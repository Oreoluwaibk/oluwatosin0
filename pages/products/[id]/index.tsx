import React from 'react';
import { useRouter } from 'next/router';
import SingleProductComponents from '@/components/products/singleproduct';


const index = () => {
  const router = useRouter();
  
  return (
    <SingleProductComponents id={router.query.id} />
  )
}

export default index