import { useState } from 'react';
import { Button } from './ui/button';
import JointList from './JointList';
import { calculateFullMatrix } from '../lib/dhCalculations';
import { Separator } from './ui/separator';

export default function DHCalculator() {
	const [joints, setJoints] = useState([]);
	const [position, setPosition] = useState(null);

	// Função para adicionar uma nova junta
	const addJoint = () => {
		setJoints([...joints, { theta: 0, d: 0, a: 0, alpha: 0 }]);
	};

	// Função para calcular a matriz final e exibir as coordenadas x, y, z
	const finalizeCalculation = () => {
		const finalMatrix = calculateFullMatrix(joints);
		// Pegando a última coluna da matriz para obter as coordenadas (x, y, z)
		const x = finalMatrix[0][3];
		const y = finalMatrix[1][3];
		const z = finalMatrix[2][3];

		// Atualiza o estado com a posição final da garra
		setPosition({ x, y, z });
	};

	const isFormValid = () => {
		return joints.some(
			(joint) =>
				joint.theta !== 0 || joint.d !== 0 || joint.a !== 0 || joint.alpha !== 0
		);
	};

	return (
		<div className="flex items-center justify-center flex-col py-2">
			<div className="flex flex-col gap-4">
				<div className="text-center">
					<h1 className="text-2xl text-orange-500 font-semibold">
						Cálculo Denavit Hartenberg
					</h1>
					<h2 className="text-lg text-orange-300">
						Victor Silva Guedes - 836450
					</h2>
				</div>
				<JointList
					joints={joints}
					setJoints={setJoints}
				/>
				<Button
					className="text-base w-64 mx-auto"
					onClick={addJoint}
				>
					Adicionar junta
				</Button>
				{isFormValid() && (
					<Button
						onClick={finalizeCalculation}
						className="text-base w-64 mx-auto"
					>
						Calcular posição da garra
					</Button>
				)}
			</div>

			{position && (
				<div className="mt-4 text-center">
					<h2 className="text-lg font-semibold text-orange-500">
						Posição final da garra:
					</h2>
					<div className="flex gap-5">
						<p>
							<span className="text-orange-300">X:</span>{' '}
							{position.x.toFixed(2)}
						</p>
						<p>
							<span className="text-orange-300">Y:</span>{' '}
							{position.y.toFixed(2)}
						</p>
						<p>
							<span className="text-orange-300">Z:</span>{' '}
							{position.z.toFixed(2)}
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
