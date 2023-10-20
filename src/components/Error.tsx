// import React from "react";

const Error = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div>
        <img
          src='/browser.png'
          className='mx-auto'
          alt='Failed to get data'
          width={150}
          loading='lazy'
        />
        <p className='text-lg text-center font-bold'>
          Some error has occured... <br />
          Maybe check your connection?
        </p>
      </div>
    </div>
  );
};

export default Error;
