import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/Home/Scrollbar.css'
import './styles/Home/Banner.css'
import './styles/Home/BoardCaption.css'
import './styles/Home/NavigationBar.css'
import './styles/Home/Scrollbar.css'
import './styles/Home/TextCaption.css'
import './styles/Home/RowIntro.css'
import './styles/User/UserPage.css'
import './styles/User/UPColumnRight/UserProfile.css'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
