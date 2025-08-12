'use client';
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, removeOne, initCounterState } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  initialCount?: number;
}

export interface CounterResponse {
  method: string;
  count:  number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(res => res.json());
  return data;
}


export const CardCounter = ( {initialCount = 0}: Props ) => {
    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //   dispatch( initCounterState(initialCount) );
    // }, [dispatch, initialCount])
    
    useEffect(() => {
      getApiCounter().then(({count}) => {
        dispatch( initCounterState(count) );
      })
    }, [dispatch])

  return (
    <>
    <span className="text-9xl">{count}</span>
    <div className="flex space-x-4 mt-6">
        <button className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          onClick={ () => dispatch( addOne() ) }>
          +1
        </button>
        <button className="flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200 ml-4"
          onClick={ () => dispatch( removeOne() ) }
        >
          -1
        </button>
      </div>
    </>
  )
}
