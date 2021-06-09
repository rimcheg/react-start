import React from 'react';
import './header.css'

export const Header = () => {
    return (
      <div className = 'header'>
        <h1>Companyname</h1>
        <div>
            <div className='registration'>
                <input></input>
                <input></input>
                <button>enter</button>
            </div>
            <div className='headermenu'>
                <div>about</div>
                <div>projects</div>
                <div>contakts</div>
            </div>
        </div>
      </div>
    )
  }