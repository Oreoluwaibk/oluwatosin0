import React, { useEffect, useState } from 'react';
import Headers from '@/reusables/headers';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import { getAllCategory, getAllProduct, getProductByCategory } from '@/redux/action/productAction';
import { Tabs, Spin, Button } from 'antd';
import type { TabsProps } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router'


interface Product {
    category: string;
    description: string;
    id: number;
    images: [""];
    price: number;
    rating?: {
        rate: number;
        count: number;
    },
    title: string;
    thumbnail: string;
}

const AllproductsComponents = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const router = useRouter();
    const { loading, allCategory, allProducts } = useAppSelector(state => state.product);
    const [ activeKey, setActiveKey ] = useState("All")
    const [ pageLimit, setPageLimit ] = useState(12);
    const [ catgeories, setCategories ] = useState([
        {key: "",
        label: ""}
    ]);

    useEffect(() => {
        dispatch(getAllCategory());
        dispatch(getAllProduct(pageLimit));
    }, []);

    useEffect(() => {
        allCategory.length > 0 && setCategories(() => {
            return allCategory.map((cate, i) => {
                return {
                    key: cate,
                    label: cate
                }
            })
        });
    }, [dispatch, allCategory]);

    const handleCategoryChange = (key: string) => {
        setActiveKey(key);
        if(key === "All"){
            dispatch(getAllProduct(pageLimit));
        }else{
            dispatch(getProductByCategory(key))
        }
    }
    
    const tabItems: TabsProps["items"] = [
        {
            key: "All",
            label: "All",
        },
        ...catgeories
    ]
    

    return (
        <div className="h-screen overflow-y-scroll " style={{ background: `#fff center center/cover no-repeat`}}>
            <Headers active="products"/>
            <div className="text-gray-500 px-2 lg:px-16 flex flex-col gap-4 pb-8 pt-8">
                <div className="heading">
                    <h2 className="text-2xl font-bold ">All Products</h2>
                </div>
                {loading ? <div className="spin-class"><Spin size='large' /></div> :<div>
                    <div className="flex items-center justify-center mb-4">
                        <Tabs 
                            items={tabItems} 
                            defaultActiveKey="All" 
                            onChange={handleCategoryChange}
                            activeKey={activeKey}
                            className="overflow-x-scroll tablet"
                        />
                    </div>
                    <div className="grid gap-3 sm:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {allProducts.length > 0 && allProducts.map((product: Product, index) => {
                            return (
                                <div key={index} onClick={() => router.push(`/products/${product.id}`)} className="flex flex-col h-full rounded-lg overflow-y-hidden shadow-lg transition-all duration-1000 hover:shadow-2xl hover:scale-110 cursor-pointer">
                                    <Image 
                                        src={product.images[0] || product.thumbnail} 
                                        className="w-full h-52 object-cover transition-opacity opacity-0 duration-1000" 
                                        alt={product.title} 
                                        width={150} 
                                        height={150}
                                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                                    />
                                    <div className="flex flex-col gap-1 py-2 px-4">
                                        <h3 className="text-sm font-bold leading-4 h-6">{product.title}</h3>
                                        <p className="font-semibold text-sm">${product.price}</p>
                                        <p className="text-xs h-16 md:h-10">{product.description.substring(0, 100)}...</p>
                                        <div className="flex items-center justify-between gap-3 mt-4 pb-4" onClick={(e) => e.stopPropagation()}>
                                            <i className="bi bi-star cursor-pointer"></i>
                                            <Button type="primary" className="bg-code-p flex items-center justify-between gap-1" onClick={(e) => e.stopPropagation()}>
                                                <i className="bi bi-cart-check"></i>
                                                Add to Cart
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </div>
        </div>
      )
}

export default AllproductsComponents;