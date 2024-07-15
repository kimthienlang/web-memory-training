import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/Home/Banner.css'
import './styles/Home/BoardCaption.css'
import './styles/Home/NavigationBar.css'
import './styles/Home/TextCaption.css'
import './styles/Home/RowIntro.css'
import './styles/User/UserPage.css'
import './styles/index.css'
import './styles/User/UPColumnRight/UPColumnRight.css'
import './styles/User/UPColumnLeft/UPColumnLeft.css'
import './styles/User/UPColumnLeft/DaysActive.css'
import './styles/User/UPColumnLeft/BoardMonth.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
