import React from 'react';

const SlideItem = (props) => {
    return (
        <div className={props.dia + ' block-progm'}>
            <div className='top-progrm'>
                <div className='img-progrm'></div>
                <h1 className='head-slide'>{props.slideTitle}</h1>
                {props.children}
            </div>
            


        </div>
    );
}

export default SlideItem;
