export default function BoardMonth({name, day} : {name: string, day: number}) {
    let numCols = Math.ceil((day / 7))
    let square: any[][] = []
    for (let i = 0; i < 7; i++) {
        square[i] = new Array(numCols).fill('');
    }

    let count = 0
    for (let i = 0; i < numCols; ++i) {
        for (let j = 0; j < 7;  ++j) {
            if (count++ == day) break
            let nameClass = 'square'
            if (Math.random() > 0.4) nameClass += ' sq-active'
            square[j][i] = <td className={nameClass}></td>
        }
    }
    const rows = []
    for (let i = 0; i < 7; ++i) 
        rows.push(<tr className="tb-row-square">{square[i]}</tr>)

    return (
        <table className="tb-month">
            <thead>
                <tr>
                    <th className="tb-month-name" colSpan={5}>{name}</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
