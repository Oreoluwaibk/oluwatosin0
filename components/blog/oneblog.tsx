import React, { useEffect } from 'react';
import Headers from '@/reusables/headers';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getOneBlog } from '@/redux/action/blogaction';
import { AppDispatch } from '@/lib/store';
import Image from 'next/image';
import { Background2 } from '@/assets/images';
import { Spin } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Oneblog = () => {
    const router = useRouter();
    const dispatch: AppDispatch = useAppDispatch();
    const { loading: blogLoading, currentBlog } = useAppSelector(state => state.blog);
    const textDate = new Date().toLocaleString();

    useEffect(() => {
        const id = Number(router.query.id);
        dispatch(getOneBlog(id));
    }, [router, dispatch]);

  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers active="blog" />
        {blogLoading ? <div className="spin-class"><Spin size='large'/></div> : 
        <div className="body px-6 md:px-24 lg:px-64 flex flex-col gap-1 py-10 text-gray-500" >
            <h2 className="text-left mb-6 md:mb-0 md:text-center text-6xl capitalize font-bold italic">{currentBlog?.title}</h2>
            <div className="blog-div flex flex-col-reverse md:flex-row items-center">
                <Image src={Background2} className="w-full md:w-1/2 p-12" alt="The blog image" height={200} />
                <div className="text-gray-500 flex flex-col gap-4">
                    <h2 className="text-2xl italic">“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”</h2>
                    <p className="text-2xl">George R.R. Martin</p>
                    <p className="italic font-normal">{textDate}</p>
                </div>
            </div>
            <div>
                <p className="break-all">{currentBlog?.body}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi fuga inventore itaque ratione est officia? Exercitationem eveniet quasi quas temporibus velit nemo sequi voluptatem pariatur qui adipisci. Quas, doloribus autem.</p>
            </div>
            <div className="mt-4 text-center"><Link href="/blog" className=" text-slate-400 transition-colors duration-1000 hover:text-slate-600">Go to Blog </Link></div>
        </div>}
        
    </div>
  )
}

export default Oneblog