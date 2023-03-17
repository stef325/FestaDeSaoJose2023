import React from 'react';

const ProgrmTextBlock = (props) => {
    return (
        <div className='text-block-progrm'>
            {props.children}
            <h2>Dedicação: {props.dedicado}</h2>
            <h2>Animação: {props.minMusica}</h2>
        </div>
    );
}

export default ProgrmTextBlock;
