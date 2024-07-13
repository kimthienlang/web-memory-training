import CommunityStats from "./CommunityStats"
import Divider from "./Divider"
import Info from "./Info"
import MemoryRecord from "./MemoryRecord"
import Skills from "./Skills"

export default function UserProfile() {
  return (
    <div className="user-profile card">
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
