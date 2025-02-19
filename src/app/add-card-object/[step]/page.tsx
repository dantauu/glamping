

export default function StepPage({params}:  any) {
	const currentStep = parseInt(params.step, 10) || 1
	const totalSteps = 13

	if (currentStep < 1 || currentStep > totalSteps) {
		return <div>Неверный шаг!</div>
	}

	return (
		<div></div>
	) 
}
