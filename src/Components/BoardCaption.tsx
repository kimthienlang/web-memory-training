import TextCaption from './TextCaption'
import '../styles/BoardCaption.css'


export default function BoardCaption() {
  const textCaptionQuantity = 5
  const timeDuration = 20 // It is not allowed to change it
  const listCaption1: Array<any> = []
  const listCaption2: Array<any> = []
  const listCaption3: Array<any> = []
  
  function setList(listCaption: any, isRightToLeft: any) {
    for (let i = 1; i <= textCaptionQuantity; ++i) {
      listCaption.push(
        <TextCaption 
          key={Math.random()} 
          content={'Caption ' + i} 
          timeDelay={(timeDuration/textCaptionQuantity * (textCaptionQuantity - i) * -1)} 
          rightToLeft={isRightToLeft}
        />
      )
    }
  }

  setList(listCaption1, 0)
  setList(listCaption2, 1)
  setList(listCaption3, 0)
  

  return (
    <div className="board-caption">
        <div className="row-caption">
          {listCaption1}
        </div>
        <div className="row-caption">
          {listCaption2}
        </div>
        <div className="row-caption">
          {listCaption3}
        </div>
    </div>
  )
}
