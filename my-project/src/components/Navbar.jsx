import React from 'react';

const Navbar = () => {
  return (
    <div className='px-4 sm:px-8 md:px-16 py-2 font-inter'>
      <nav>
        <div className='flex flex-col sm:flex-row items-center sm:items-start px-4 sm:px-5 md:px-5 gap-3'>
          <button className='rounded-sm shadow-sm p-2 border-2'>
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ios-filled/50/737373/long-arrow-left.png"
              alt="long-arrow-right"
            />
          </button>
          <div className='pt-1 sm:pr-10'>Prosign</div>
          <span className='text-custom-text text-base pt-1 ml-4 sm:ml-16'>
            Use
          </span>
          <button className='rounded-sm shadow-sm p-2 border-2'>
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ios-filled/50/737373/long-arrow-left.png"
              alt="long-arrow-right"
            />
          </button>
          <button className='rounded-sm shadow-sm p-2 border-2'>
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ios-filled/50/737373/long-arrow-right.png"
              alt="long-arrow-right"
            />
          </button>
          <span className='text-custom-text text-base pt-1'>
            to navigate case studies
          </span>
          <button className='bg-custom-blue rounded-lg text-white py-2 px-5 text-sm flex gap-2'>
            <img
              className='pt-1'
              width="16"
              height="16"
              src="https://img.icons8.com/windows/32/FFFFFF/chat-message.png"
              alt="chat-message"
            />
            Work with us
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
