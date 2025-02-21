import BathRoom from "@/intities/intities-add-card-object/comfort-number/bath-room/bath-room"
import ComfortMore from "@/intities/intities-add-card-object/comfort-number/comfort-more/comfort-more"
import ComfortSleep from "@/intities/intities-add-card-object/comfort-number/comfort-sleep/comfort-sleep"
import Kitchen from "@/intities/intities-add-card-object/comfort-number/kitchen/kitchen"
import Street from "@/intities/intities-add-card-object/comfort-number/street/street"


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