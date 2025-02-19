
interface PageProps {
	step: string
	params: {
		step: string
	}
}

export default function StepPage({params}:  PageProps) {
	const currentStep = parseInt(params.step, 10) || 1
	const totalSteps = 13

	if (currentStep < 1 || currentStep > totalSteps) {
		return <div>Неверный шаг!</div>
	}

	return (
		<div></div>
	) 
}
