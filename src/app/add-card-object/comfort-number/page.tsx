import BathRoom from "@/entities/entities-add-card-object/comfort-number/bath-room/bath-room"
import ComfortMore from "@/entities/entities-add-card-object/comfort-number/comfort-more/comfort-more"
import ComfortSleep from "@/entities/entities-add-card-object/comfort-number/comfort-sleep/comfort-sleep"
import Kitchen from "@/entities/entities-add-card-object/comfort-number/kitchen/kitchen"
import Street from "@/entities/entities-add-card-object/comfort-number/street/street"


const ComfortNumberPage = () => {
    return (
        <>
            <Kitchen />
            <BathRoom />
            <ComfortSleep />
            <Street />
            <ComfortMore />
        </>
    )
}
export default ComfortNumberPage