import Achievement from "./UPColumnLeft/Achievement";
import DaysActive from "./UPColumnLeft/DaysActive";
import HistorySolving from "./UPColumnLeft/HistorySolving";

export default function UPColumnLeft() {
  return (
    <div className="up-column-left">
        <Achievement />
        <DaysActive />
        <HistorySolving />
    </div>
  )
}
