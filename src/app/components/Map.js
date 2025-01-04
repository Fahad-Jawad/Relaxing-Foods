import React from 'react';

export default function Map() {
  return (
    <div className='p-20'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10020.21748427448!2d-113.9699457!3d51.107457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371648042664955%3A0x2d801ecf3f343165!2sMadny%20Digital%20Services%20Group%20Ltd!5e0!3m2!1sen!2sus!4v1734455333033!5m2!1sen!2sus'
        width='600'
        height='450'
        allowFullScreen=''
        loading='lazy'
        className='w-full rounded-lg'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
}
