import React from 'react';

const Map = () => {
  return (
    <div >
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3795074536033!2d72.91394231456822!3d19.0910000564626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7cc849925a9%3A0xae6b724d51049e67!2sTechsa+Services+Private+Limited!5e0!3m2!1sen!2s!4v1471602687866"
        style={{
          border: '0',
          width: '800px',
          maxWidth: '100%',
          height: '400px',
          minHeight: '300px',
        }}
       
      ></iframe>
    </div>
  );
};

export default Map;
