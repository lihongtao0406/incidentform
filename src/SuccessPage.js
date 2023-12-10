// SuccessPage.js
import React from 'react';
import successImg from './success.png';
const SuccessPage = () => {
  return (
    <div style={{marginTop:'40px'}}>
        <div style={{textAlign:'center'}}>
            <img style={{width:'200px', height:'200px'}} src={successImg} alt="Successful" />
        </div>
        <h2>Form Submitted Successfully!</h2>
    </div>
  );
};

export default SuccessPage;
