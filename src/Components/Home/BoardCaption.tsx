import TextCaption from './TextCaption'
export default function BoardCaption() {
  const textCaptionQuantity = 5
  const timeDuration = 20 // It is not allowed to change it

  const listCaption1: Array<any> = []
  const listCaption2: Array<any> = []
  const listCaption3: Array<any> = []

  const listContentCaption1: Array<string> = [
    "Quantum Memory Power", 
    "How to develop a perfect memory", 
    "How to Pass Exams Dominic O'Brien", 
    "How to Develop a Brilliant Memory Toolkit: Tips, Tricks and Techniques to Remember Names, Words, Facts, Figures, Faces and Speeches Dominic O'Brien", 
    "The Amazing Memory Kit Dominic O'Brien",
  ]
  const listContentCaption2: Array<string> = [
    "How to Develop a Brilliant Memory Week by Week", 
    "How to Develop a Brilliant Memory Week by Week: 50 Proven Ways to Enhance Your Memory Dominic O'Brien", 
    "The method of memorization through images.", 
    "The method of memorization through images.", 
    "The method of memorization through images.",
  ]
  const listContentCaption3: Array<string> = [
    "You Can Have an Amazing Memory: Learn Life-Changing Techniques and Tips from the Memory Maestro", 
    "The method of memorization through images.", 
    "The method of memorization through images.", 
    "The method of memorization through images.", 
    "The method of memorization through images.",
  ]
  
  function setList(listCaption: any, listContentCaption: any,isRightToLeft: any) {
    for (let i = 1; i <= textCaptionQuantity; ++i) {
      listCaption.push(
        <TextCaption 
          key={Math.random()} 
          content={listContentCaption[i-1]} 
          timeDelay={(timeDuration/textCaptionQuantity * (textCaptionQuantity - i) * -1)} 
          rightToLeft={isRightToLeft}
        />
      )
    }
  }

  setList(listCaption1, listContentCaption1, 0)
  setList(listCaption2, listContentCaption2, 1)
  setList(listCaption3, listContentCaption3, 0)
  

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
