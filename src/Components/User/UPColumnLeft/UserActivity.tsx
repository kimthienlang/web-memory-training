import Achievement from './Achievement'
import DaysActive from './DaysActive'
import HistorySolving from './HistorySolving'

export default function UserActivity() {
    return (
        <div className='user-activity'>
            <Achievement />
            <DaysActive />
            <HistorySolving />
        </div>
    )
}
