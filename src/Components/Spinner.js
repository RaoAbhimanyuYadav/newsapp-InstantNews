import React from 'react';
import loading from './loading.gif'
const Spinner= ()=> {
    return <div className=' d-flex align-items-center justify-content-center my-3'>
        <img src={loading} alt="loading" />
    </div>;
}

export default Spinner;
