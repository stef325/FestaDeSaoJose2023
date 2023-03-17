import React from 'react';
import './Partner.css'

const Partner = (props) => {
    return (
        <div className='partn-container'>
            <img src={'/img/patrocinio/'+props.image} alt="" className='patrocinador'/>
        </div>
    );
}

export default Partner;
