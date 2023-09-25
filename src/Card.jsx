import React from 'react';
import Heading1 from './Heading1';
import Images from './Images';

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images imgsrc={props.imgsrc} />
                    <div className="card_info">
                        <span className="card_category">{props.category}</span>
                        <Heading1 sname ={props.sname} />
                        <a href={props.link} target="_blank">
                            <button> Watch Now</button>
                        </a>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;