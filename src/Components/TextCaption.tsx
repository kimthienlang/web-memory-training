import '../styles/TextCaption.css'

export default function TextCaption({content = 'This is text caption 1'}) {
  return (
    <div className="text-caption">
        {content}
    </div>
  )
}
