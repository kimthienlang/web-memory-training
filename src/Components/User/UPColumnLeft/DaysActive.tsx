import BoardMonth from "./BoardMonth"

export default function DaysActive() {
  let totalSubmission = 402
  let totalActiveDays = 66
  let maxStreak = 32
  return (
    <div className="day-active card">
      <div id="da-row1">
        <div className="da-row1-left">
          <span><strong>{totalSubmission}</strong></span>
          <span> Submissions in the past one year</span>
        </div>
        <div className="da-row1-right">
          <span>Total active days: <strong>{totalActiveDays}</strong></span>
          <span>Max streak: <strong>{maxStreak}</strong></span>
        </div>
      </div>
      <div id="da-row2">
        <BoardMonth name="Jan" day={28}/>
        <BoardMonth name="Feb" day={31}/>
        <BoardMonth name="Mar" day={30}/>
        <BoardMonth name="Apr" day={31}/>
        <BoardMonth name="May" day={31}/>
        <BoardMonth name="Jun" day={31}/>
        <BoardMonth name="Jul" day={31}/>
        <BoardMonth name="Aug" day={31}/>
        <BoardMonth name="Sep" day={31}/>
        <BoardMonth name="Oct" day={31}/>
        <BoardMonth name="Nov" day={31}/>
        <BoardMonth name="Dec" day={31}/>
      </div>      
    </div>
  )
}
