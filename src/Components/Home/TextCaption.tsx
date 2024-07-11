export default function TextCaption({content = 'This is text caption 1', timeDelay = -20, rightToLeft = 0}) {
  const style = {
    animationDelay: timeDelay + 's',
  }
  
  let class_name = 'text-caption'
  if (rightToLeft) class_name += ' left-to-right'
  else class_name += ' right-to-left'

  return (
    <div className={class_name} style={style}>
        <a href='#'>
          <p>{content}</p>
        </a>
    </div>
  )
}
