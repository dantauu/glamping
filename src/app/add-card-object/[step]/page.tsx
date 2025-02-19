export default function StepPage({
	params,
}: {
	params: {
		step: string 
	}
}) {
	const currentStep = parseInt(params.step, 10) || 1
	const totalSteps = 13

	if (currentStep < 1 || currentStep > totalSteps) {
		return <div>Неверный шаг!</div>
	}

	return (
		<div></div>
	)
}
