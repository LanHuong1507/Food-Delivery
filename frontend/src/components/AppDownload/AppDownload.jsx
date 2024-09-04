import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <h1>For Better Experience Download <br />Tomato App</h1>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img className='app_store' src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
