import Banner from "./Banner";
import BoardCaption from "./BoardCaption";
import NavigationBar from "./NavigationBar";
import RowIntro from "./RowIntro";

type Profile = {
  src: string
  name: string
  description: string
}

const profiles: Profile[] = []
profiles.push({
  src: 'https://media.cnn.com/api/v1/images/stellar/prod/240116120407-bill-gates-091323.jpg?c=16x9&q=h_833,w_1480,c_fill',
  name: 'Bill Gates',
  description: `William Henry Gates III is an American businessman, investor, philanthropist, and writer best known for co-founding the software company Microsoft with his childhood friend Paul Allen.`
})
profiles.push({
  src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTkCxsu1LRXdff5hrmS7pq9JcWk4RI0_jHe0y-V5cwKTKtfatuy',
  name: 'Elon Musk',
  description: `Elon Musk's brain-computer startup Nerualink will implant its device into a second human patient in around a week, top company executives confirmed in a briefing on X. So far, Arizona-based Noland Arbaugh is the only person to receive the brain chip implant, but Musk says he hopes this number would go up into high single digits by the end of this year. 

Notably, Arbaugh had received the implant after being suffering an accident that paralyzed him shoulder down in 2016. The company had informed in May that tiny wires inside Arbaugh's had pulled out of position. However, during the the recent briefing, Musk said that the implant had become "more or less very stable".`
})
profiles.push({
  src: 'https://vcdn1-vnexpress.vnecdn.net/2023/11/30/image003-1701336779-2788-1701336862.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=O-2nqBy7IvTpjL19s7qHqg',
  name: 'Dang Ngoc Phuong Trinh',
  description: `Dang Ngoc Phuong Trinh (born in 2000, Lam Dong) broke the world record when recording 618 random pictures in 5 minutes at the World Memory Competition 2023. The previous record belonged to the French player with 547 pictures. Randomly after 5 minutes.`
})


export default function Home() {
    return (
        <>
            <NavigationBar />
            <Banner />
            <BoardCaption />
            <RowIntro profile={profiles[0]}/>
            <RowIntro profile={profiles[1]}/>
            <RowIntro profile={profiles[2]}/>
        </>
    )
}
