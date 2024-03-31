import React from 'react';
import Oneblog from '@/components/blog/oneblog';
import { useRouter } from 'next/router';

const index = () => {
  const router = useRouter();
    
  return (
    <Oneblog id={router.query.id} />
  )
}

export default index