'use client'

import ChannelBlock from "@/features/features-extra-net-lk/channel-manager/channel-block/channel-block"
import ChannelModal from "@/features/features-extra-net-lk/channel-manager/channel-modal/channel-modal"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"



const ChannelManagerPage = () => {
   const [showModal, setShowModal] = useState<boolean>(false)
   return (
      <>
         <ChannelBlock setShowModal={setShowModal} />
         <AnimatePresence>
         {showModal && (
            <ChannelModal showModal={showModal} setShowModal={setShowModal} />
         )}
         </AnimatePresence>
      </>
   )
}

export default ChannelManagerPage