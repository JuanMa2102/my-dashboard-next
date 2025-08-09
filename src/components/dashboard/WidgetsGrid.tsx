'use client'
import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store';
import { CiShoppingCart } from 'react-icons/ci';


export const WidgetsGrid = () => {
  const count = useAppSelector(state => state.counter.count);
  return (
    <div className="flex flex-wrap p-2">
          {/* <SimpleWidget /> */}
          <SimpleWidget 
            title={count.toString()} 
            subtitle='carito de compras'
            label= 'Counter'
            icon= {<CiShoppingCart size={50}/>}
            href='/dashboard/counter'
          />
    </div>
  )
}
