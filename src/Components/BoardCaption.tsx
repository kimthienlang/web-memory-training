import TextCaption from './TextCaption'

export default function BoardCaption() {
  return (
    <div className="board-caption">
        <div className="row">
            <TextCaption content='this is new ctn 1' />
            <TextCaption content='this is new ctn 1' />
            <TextCaption content='this is new ctn 1' />
        </div>
        <div className="row">
            <TextCaption content='this is new ctn 2'/>
            <TextCaption content='this is new ctn 2'/>
            <TextCaption content='this is new ctn 2'/>
        </div>
        <div className="row">
            <TextCaption content='this is new ctn 3'/>
            <TextCaption content='this is new ctn 3'/>
            <TextCaption content='this is new ctn 3'/>
        </div>
    </div>
  )
}
