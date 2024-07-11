import UserProfile from './UserProfile'
import Achievement from './Achievement'
import DaysActive from './DaysActive'
import HistorySolving from './HistorySolving'

export default function UserPage() {
  return (
    <div className="user-page">
      <div className="up-column-right">
        <UserProfile />
      </div>
      <div className="up-column-left">
        <Achievement />
        <DaysActive />
        <HistorySolving />
      </div>
      
    </div>
  )
}
