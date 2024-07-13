interface User {
  name: string
  rank: number
}

export default  function InfoHeader({ user } : { user: User }) {
  return (
    <div className="info-header">
        <div className="user-img"></div>
        <div className="user-name">
            <div>
                <div className="user-name-1">{user.name || 'Kim thien lang'}</div>
                <div className="user-name-2">{user.name || 'Kim thien lang'}</div>
            </div>
            <div className="rank">
                Rank <span style={{fontWeight: 600, color: '#fff'}}>{user.rank.toLocaleString() || '532,660'}</span>
            </div>
        </div>
    </div>
  )
}
