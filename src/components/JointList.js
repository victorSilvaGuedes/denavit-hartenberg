import JointForm from './JointForm';
import { Separator } from './ui/separator';

export default function JointList({ joints, setJoints }) {
	const updateJoint = (index, updatedJoint) => {
		const newJoints = [...joints];
		newJoints[index] = updatedJoint;
		setJoints(newJoints);
	};

	return (
		<div>
			{joints.map((joint, index) => (
				<div key={index}>
					<h3 className="text-xl font-semibold text-center text-blue-500 mb-2">
						Junta {index + 1}
					</h3>
					<JointForm
						joint={joint}
						index={index}
						setJoint={updateJoint}
					/>
					{index < joints.length - 1 && (
						<Separator className="my-4 bg-orange-300" />
					)}
				</div>
			))}
		</div>
	);
}
