import React from 'react';
import './Partner.css'

const Partner = (props) => {
    return (
        <div className='partn-container'>
            <img src={'./FestaDeSaoJose2023/img/patrocinio/'+props.image} alt="" className='patrocinador'/>
        </div>
    );
}

export default Partner;
