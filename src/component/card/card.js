import React from 'react';
import './card.css'

export const Card = (props) => {
    return(
        <div className = "card">
            <div className = "top_flex">
                <div className = "card_img"><img src=''></img></div>
                <div>
                    <h3>'name'</h3>
                    <p>'about'</p>
                </div>
            </div>
            <button className="read_more">read_more</button>
            <div className = "flex_block">
                <p>'price'</p>
                <button> buy </button>
            </div>
        </div>
    )
}