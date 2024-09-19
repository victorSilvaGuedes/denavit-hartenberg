import { useState } from 'react';

export default function JointForm({ joint, index, setJoint }) {
	const [currentJoint, setCurrentJoint] = useState(joint);

	const handleChange = (e) => {
		const { name, value } = e.target;
		const updatedJoint = { ...currentJoint, [name]: parseFloat(value) };
		setCurrentJoint(updatedJoint);
		setJoint(index, updatedJoint);
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2 justify-between">
				<p>Ângulo theta (θ)</p>
				<input
					type="number"
					name="theta"
					value={currentJoint.theta}
					onChange={handleChange}
					className="bg-transparent border-2 border-zinc-800 px-2 w-20 rounded-md text-center"
				/>
			</div>
			<div className="flex gap-2 justify-between">
				<p>Deslocamento (d)</p>
				<input
					type="number"
					name="d"
					value={currentJoint.d}
					onChange={handleChange}
					placeholder="Deslocamento (d)"
					className="bg-transparent border-2 border-zinc-800 px-2 w-20 rounded-md text-center"
				/>
			</div>
			<div className="flex gap-2 justify-between">
				<p>Comprimento (a)</p>
				<input
					type="number"
					name="a"
					value={currentJoint.a}
					onChange={handleChange}
					placeholder="Comprimento (a)"
					className="bg-transparent border-2 border-zinc-800 px-2 w-20 rounded-md text-center"
				/>
			</div>
			<div className="flex gap-2 justify-between">
				<p>Ângulo alpha (α)</p>
				<input
					type="number"
					name="alpha"
					value={currentJoint.alpha}
					onChange={handleChange}
					placeholder="Ângulo (α)"
					className="bg-transparent border-2 border-zinc-800 px-2 w-20 rounded-md text-center"
				/>
			</div>
		</div>
	);
}
