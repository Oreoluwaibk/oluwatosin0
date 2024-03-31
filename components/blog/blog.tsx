import React, { useEffect, useState } from 'react'; 
import Headers from '@/reusables/headers';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getAllBlogs } from '@/redux/action/blogaction';
import { AppDispatch } from '@/lib/store';
import { DressImage, Background1 } from '@/assets/images';
import { Pagination, Input, Spin } from 'antd';
import Image from 'next/image';
import Link from 'next/link';


const BlogComponent = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { blogs, loading: blogLoading } = useAppSelector(state => state.blog);
  const [ page, setPage ] = useState(1);
  const [ searchvalue, setSearchValue ] = useState("");
  const [ originalNum, setOriginalNum ] = useState({
    size: 0,
    number: 8
  }) 
  const [ pageSize, setPageSize ] = useState(8);
  const [ pageNumber, setPageNumber ] = useState(1);
  const textDate = new Date().toLocaleString();

  useEffect(() => {
    dispatch(getAllBlogs());
  },[dispatch]);

  const handlePageChange = (pagesize: number, pagenumber: number) => {
    console.log(pagesize, pagenumber);
    
    // setPageNumber(originalNum.size * (originalNum.number * pagesize - 1))
    // setPageSize(originalNum.number * pagesize);
  }

  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers active="blog" />
        <div className="body px-2 lg:px-16 flex flex-col gap-10 pb-8">
          <div className="flex items-center justify-center mt-4 w-full">
            <Input 
              value={searchvalue} 
              onChange={(e) =>setSearchValue(e.target.value)}
              placeholder="search..."
              className="w-3/5"
            />
          </div>
          <div className="down">
            <div className={`${blogLoading ? "flex" : "grid"} gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4`}>
              {blogLoading ? <div className="spin-class"><Spin size='large' /></div> : blogs && blogs?.slice(pageNumber, pageSize).map((blog: any, i: any) => {
                return <Link href={`/blog/${blog.id}`} className="blog_card" style={{height: "fit-content"}} key={i}>
                <Image 
                  src={DressImage} 
                  alt="blog image" 
                  className="w-full object-cover h-40 transition-opacity opacity-0 duration-[2s]" 
                  // width={120} 
                  height={120}
                  onLoadingComplete={(image) => image.classList.remove("opacity-0")}
                />
                <div className="flex flex-col gap-2 p-4 text-gray-600 h-48">
                  <p className="text-sm font-bold">{`${blog.title.substr(0, 50)}...` || "New Gospel"}</p>
                  <h4 className="text-xs break-all">{blog.body.substr(0,100)}...</h4>
                 
                  <h2 className="text-sm font-semibold">{blog.author || "User name"}</h2>
                  <p className="font-normal text-xs italic">{textDate}</p>
                </div>
              </Link>
              })}
              
            </div>
          </div>
          {!blogLoading && <div className="flex items-center justify-center">
            <Pagination 
              pageSize={pageSize} 
              current={pageNumber}
              onChange={handlePageChange} 
              total={blogs && blogs.length} 
              pageSizeOptions={[10, 20, 50]}
            />
          </div>}
        </div>
    </div>
  )
}

export default BlogComponent