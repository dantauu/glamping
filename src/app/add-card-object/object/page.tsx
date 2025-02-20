import Cards from "@/intities/intities-add-card-object/cards/cards"
import ThreeInputs from "@/intities/intities-add-card-object/three-inputs/three-inputs"
import TitleInputName from "@/intities/intities-add-card-object/title-input-name/title-input-name"


const ObjectPage = () => {
    return (
			<>
				<TitleInputName />
                <Cards />
				<ThreeInputs />
			</>
		)
}

export default ObjectPage