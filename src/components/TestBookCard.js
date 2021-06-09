import React from 'react';

export default function TestBookCard({ ...book }) {
  return (
    <div className='boookCard rounded bg-white w-1/3 shadow-md m-3'>
        <div className='flex'>
          <img src={book?.imageUrl} alt={book?.title} className='w-48 object-scale-down rounded m-auto px-6 py-4'></img>
          <div className="px-6 py-4">
            <h5>{book?.title}</h5>
            <h6>{book?.author}</h6>
            <p>{book?.rating}/5</p>
            <p>{book?.review}</p>
          </div>
        </div>
        {/* <div className='buttonDiv px-6 py-4 flex justify-end'>
            <button type='button'
            className='bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full'
            onClick={() => handleClick('delete')}
            >
              delete
            </button> */}
      </div>
  );
}
