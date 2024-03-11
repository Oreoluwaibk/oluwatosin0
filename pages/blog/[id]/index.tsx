import React from 'react';
import { useRouter } from 'next/router';
import Oneblog from '@/components/blog/oneblog';

const index = () => {
    const router = useRouter();
    
  return (
    <Oneblog id={router.query.id} />
  )
}

export default index