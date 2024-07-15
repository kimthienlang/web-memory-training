import CommunityStats from "./UPColumnRight/CommunityStats"
import Divider from "./UPColumnRight/Divider"
import Info from "./UPColumnRight/Info"
import MemoryRecord from "./UPColumnRight/MemoryRecord"
import Skills from "./UPColumnRight/Skills"

export default function UPColumnRight() {
  return (
    <div className="up-column-right card">
        <Info />
        <Divider />
        <CommunityStats />
        <Divider />
        <Skills />
        <Divider />
        <MemoryRecord />
    </div>
  )
}
