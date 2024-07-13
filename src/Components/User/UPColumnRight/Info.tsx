import InfoHeader from "./InfoHeader";
import Bio from "./Bio";
import EditProfile from "./EditProfile";
import ListLink from "./ListLink";

type typeSocialMedia = 'facebook' | 'instagram' | 'linkedin' | 'github' | 'website'

type socialMedia = {
  nameSM: string
  typeSM: typeSocialMedia
  icon: string
  URL: string
}

interface User {
  name: string
  rank: number
  bio: string
  listLink: Array<socialMedia>
}

const kimthienlang : User = {
  name: 'kim thien lang',
  rank: 508632,
  bio: `I like code. I'm interested in creating something new.`,
  listLink: [
    {
      nameSM: 'kim thien lang', 
      typeSM: 'facebook', 
      icon: 'fa-brands fa-facebook', 
      URL: 'https://www.facebook.com/'
    },
    {
      nameSM: '_kimthienlang_914', 
      typeSM: 'instagram', 
      icon: 'fa-brands fa-instagram', 
      URL: 'facebook.com'
    },
    {
      nameSM: 'kimthienlang', 
      typeSM: 'github', 
      icon: 'fa-brands fa-github', 
      URL: 'https://www.facebook.com/'
    },
    {
      nameSM: 'le anh tuan', 
      typeSM: 'linkedin', 
      icon: 'fa-brands fa-linkedin-in', 
      URL: 'https://www.facebook.com/'
    },
  ]
}


export default function Info() {
  return (
    <div className="info">
        <InfoHeader user={{name: kimthienlang.name, rank: kimthienlang.rank}} />
        <Bio bio={kimthienlang.bio}/>
        <EditProfile />
        <ListLink user={kimthienlang.listLink}/>
    </div>
  )
}
