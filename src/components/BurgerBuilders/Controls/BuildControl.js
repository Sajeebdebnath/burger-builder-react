import React from 'react';

const BuildControl = (props) => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div style={{fontSize:"18px", marginRight:"auto"}}>
                {props.label}
            </div>
            <button className='btn btn-danger btn-sm m-1' onClick={ ()=> props.removed(props.type)}>Less</button>
            <button className='btn btn-success btn-sm m-1' onClick={ ()=> props.added(props.type)}>More</button>
            
        </div>
    );
};

export default BuildControl;