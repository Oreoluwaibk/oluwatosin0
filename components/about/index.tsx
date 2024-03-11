import React from 'react';
import Headers from '@/reusables/headers';


const AboutComponent = () => {
  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers active="about" />
    </div>
  )
}

export default AboutComponent;