export default function Bio({ bio } : { bio: string}) {
  return (
    <div className="bio up-element">
        {bio || `I like code. I'm interested in creating something new.`}
    </div>
  )
}
