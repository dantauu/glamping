import ConditionSize from "@/intities/intities-add-card-object/condition-size/condition-size"
import ConditionVariants from "@/intities/intities-add-card-object/condition-variants/condition-variants"
import FullInformation from "@/intities/intities-add-card-object/full-information/full-information"
import Season from "@/intities/intities-add-card-object/season/season"


const ConditionPage = () => {
    return (
			<>
				<ConditionSize />
				<ConditionVariants />
            <FullInformation />
            <Season />
			</>
		)
}

export default ConditionPage