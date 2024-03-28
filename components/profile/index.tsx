import Footer from '@/reusables/footer';
import Headers from '@/reusables/headers';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import { useRouter } from 'next/router';


const ProfileComponent = () => {
  const router = useRouter()
  const { isAuthenticated, user } = useAppSelector(state => state.user);

  useEffect(() => {
    if(!isAuthenticated) router.push("/auth/login");
  }, []);
  
  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers active="profile"/>
        <Footer />
    </div>
  )
}

export default ProfileComponent;