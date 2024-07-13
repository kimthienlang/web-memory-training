



export default function ListLink({user} : any) { // need data
    const listLi : any[] = []

    const length = user.length

    for (let i = 0; i < length; ++i)
    {
        listLi.push(
            <li 
                key={Math.random()} 
                className="list-link-item up-element"
                onClick={() => {
                    window.open(user[i].URL, '_blank');
                }}
            >
                <i className={user[i].icon}></i>
                <p>{user[i].nameSM}</p>
            </li>
        )
    }
  return (
    <ul className="list-link up-element">
        {listLi}
    </ul>
  )
}
