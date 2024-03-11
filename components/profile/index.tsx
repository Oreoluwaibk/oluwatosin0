import Headers from '@/reusables/headers';
import React from 'react';


const ProfileComponent = () => {
  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers active="profile"/>
    </div>
  )
}

export default ProfileComponent;