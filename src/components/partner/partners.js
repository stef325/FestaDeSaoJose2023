import React from 'react';
import Partner from './Partner';

const Partners = (props) => {

    const part = props.partners.map(partner=>{
        return(
          <Partner image={partner.link}></Partner>
        )
    })

    return (
        <div className='parceiros-all'>
            {part}
            {part}
        </div>
    );
}

export default Partners;
