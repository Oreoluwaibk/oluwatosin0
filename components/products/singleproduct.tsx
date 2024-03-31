import React, { useEffect } from 'react';
import Headers from '@/reusables/headers';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getSingleProduct } from '@/redux/action/productAction';
import { AppDispatch } from '@/lib/store';
import { Spin, Carousel, Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SingleProductComponents = () => {
    const router = useRouter();
    const dispatch: AppDispatch = useAppDispatch();
    const { loading, currentProduct } = useAppSelector(state => state.product);

    useEffect(() => {
        const id = Number(router.query.id);
        dispatch(getSingleProduct(id))
    }, [dispatch, router]);
    
    const style = {
        height: "fit-content",
        '@media (min-width: 768px)': {
            height: "80vh"
        },
    }

    const carouselStyle = {
        height: "300px",
        '@media (min-width: 768px)': {
            height: "100%"
        },
    }

    return (
        <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
            <Headers active="products"/>
            <div className="text-gray-500 px-2 lg:px-16 flex flex-col gap-4 pb-8 pt-8">
                <div className="heading flex items-center justify-between">
                    <h2 className="text-2xl font-bold ">Product - {currentProduct && currentProduct.title}</h2>
                    <Link className="transition-opacity duration-1000 hover:opacity-70" href="/products">back to products</Link>
                </div>
                {loading ? <div className="spin-class"><Spin size='large' /></div> :<div>
                    <div className="flex flex-col md:flex-row gap-1 md:gap-4 w-full py-8 px-5 shadow-lg rounded-md bg-gray-100 mt-3" style={style}>
                        <div className="w-full md:w-1/2" style={carouselStyle}>
                            <Carousel autoplay dots style={carouselStyle}>
                                {currentProduct && currentProduct.images?.map((products: any, index: any) => {
                                    return <div key={index} style={carouselStyle}>
                                        <Image 
                                            src={products} 
                                            alt={currentProduct.title}
                                            width={300}
                                            height={300}
                                            className="w-full transition-opacity opacity-0 duration-1000" 
                                            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                        />
                                    </div>
                                })}
                            </Carousel>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-4 py-4">
                            <p className="text-5xl font-bold">{currentProduct.title}</p>
                            <p className="text-2xl mb-4">{currentProduct.description}</p>
                            <p><strong>Brand:</strong> {currentProduct.brand}</p>
                            <p className="font-semibold text-xl">${currentProduct.price}</p>
                            <p className="font-semibold text-md">{currentProduct.stock} left</p>
                            <Button type="primary" className="bg-code-p flex items-center justify-center gap-1 h-10" onClick={(e) => e.stopPropagation()}>
                                <i className="bi bi-cart-check"></i>
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>}
                
            </div>
        </div>
      )
}

export default SingleProductComponents;