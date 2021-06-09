import React from 'react';
import './menu.css'

export const Menu = (props) => {
    return (
        <div>
            <ul className = "menu">
                <li><h4>{props.title}</h4></li>
                <li>{props.first}</li>
                <li>{props.second}</li>
                <li>{props.third}</li>
                <li>{props.fours    }</li>
            </ul>
        </div>
    )
  }