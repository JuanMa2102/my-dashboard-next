'use client';
import { useState } from "react";

interface Props {
  initialCount?: number;
}


export const CardCounter = ( {initialCount = 0}: Props ) => {
    const [count, setCount] = useState(initialCount);
    
  return (
    <>
    <span className="text-9xl">{count}</span>
    <div className="flex space-x-4 mt-6">
        <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          onClick={ () => setCount(count + 1) }>
          +1
        </button>
        <button className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 ml-4"
          onClick={ () => setCount(count - 1 )}
        >
          -1
        </button>
      </div>
    </>
  )
}
