import React from 'react';
import { Button } from "antd";
import Headers from '@/reusables/headers';
import { DressImage } from '@/assets/images';


const HomePage = () => {
  return (
    <div className="h-screen" style={{ background: `#fff center center/cover no-repeat`}}>
      <Headers />
      <div className="h-4/5 flex flex-col justify-center items-center text-gray-500">
        <h2 className="text-6xl text-left font-semibold">Shop oluwatosin0</h2>
        <p className="text-2xl text-left mt-4">Your one stop shop to all things fashion</p>
        <span className="mt-8"><Button type="primary" className="h-12 flex-center bg-zinc-700">Start shopping</Button></span>
      </div>
    </div>
  )
}

export default HomePage;