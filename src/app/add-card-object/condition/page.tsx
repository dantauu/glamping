import ConditionSize from "@/entities/entities-add-card-object/condition-size/condition-size"
import ConditionVariants from "@/entities/entities-add-card-object/condition-variants/condition-variants"
import FullInformation from "@/entities/entities-add-card-object/full-information/full-information"
import Season from "@/entities/entities-add-card-object/season/season"


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