import Cards from "@/entities/entities-add-card-object/cards/cards"
import ThreeInputs from "@/entities/entities-add-card-object/three-inputs/three-inputs"
import TitleInputName from "@/entities/entities-add-card-object/title-input-name/title-input-name"


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