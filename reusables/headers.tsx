import React, { useState, useEffect } from 'react';
import { 
    LogoNoBackground, 
    Avatar, 
    Cart,
    Cancel 
} from '@/assets/logo';
import Link from 'next/link';
import Image from 'next/image';
import { List } from '@/assets/logo';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import { useRouter } from 'next/router';

const Headers = ({ active }: any) => {
    const dispatch: AppDispatch = useAppDispatch();
    const router = useRouter();
    const { isAuthenticated, user } = useAppSelector(state => state.user)

    const [ showMenu, setShowMenu ] = useState(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }
    
    const handleProfileRedirect = () => {
        if(!isAuthenticated) router.push("/auth/login");

        router.push("/profile");
    }

  return (
    <div className="p1 backwhite static w-full z-10" style={{height: `${showMenu ? "fit-content" : "56px"}`}}>
        <div className="headerclass header_flex">
            <div className="left flexd" style={{width: "45%"}}>
                <ul className="flex-left">
                    <li>
                        <Link href="/products" className="flex items-center gap-2 link"><i className="bi bi-bookmarks"></i>Categories</Link>
                    </li>
                    <li className="m4">
                        <Link href="/products" className="flex items-center gap-2 link"><i className="bi bi-plus-circle"></i>New Arrivals</Link>
                    </li>
                </ul>
            </div>
            <div className="right flex-center" style={{width: "55%"}}>

                <Link href="/" className="logo">
                    <Image 
                        src={LogoNoBackground} 
                        alt="oluwatosin0 logo" 
                        width={150} 
                        height={150}
                    />
                </Link>

                <ul className="flexd-center">
                    <li>
                        <Link href="/blog" className={`flex items-center gap-2 link ${active === "blog" && "active-link"}`}>
                            <i className="bi bi-chat-right-text"></i>
                            Blog
                        </Link>
                    </li>
                    <li className="m4">
                        <Link href="/about" className={`flex items-center gap-2 link ${active === "about" && "active-link"}`}>
                            <i className="bi bi-file-person"></i>
                            About
                        </Link>
                    </li>
                    {<li className="m4">
                        <Link href="/contact" className={`flex items-center gap-2 link ${active === "contact" && "active-link"}`}>
                            <i className="bi bi-person-lines-fill"></i>
                            Contacts
                        </Link>
                    </li>}
                    {user && user.user_type === "admin" && <li className="m4" >
                        <Link href="/contact" className={`flex items-center gap-2 link ${active === "dashboard" && "active-link"}`}>
                            <i className="bi bi-person-workspace"></i>
                            Dashboard
                        </Link>
                    </li>}
                    <li className="ml-6" >
                        <Image 
                            src={Avatar} 
                            alt="profile icon" 
                            width={20} 
                            height={20}
                            onClick={handleProfileRedirect}
                            className="cursor-pointer"
                        />
                    </li>
                    <li className="m4">
                        <Link href="/cart">
                            <Image 
                                src={Cart} 
                                alt="cart icon" 
                                width={20} 
                                height={20}
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="absolute left-4">
            <Image 
                src={LogoNoBackground} 
                alt="menu icon" 
                width={150} 
                height={150}
                className="cursor-pointer md:hidden"
            />
        </div>
        <div className="absolute right-4">
            <Image 
                src={showMenu ? Cancel : List} 
                alt="menu icon" 
                width={20} 
                height={20}
                className="cursor-pointer md:hidden"
                onClick={handleMenu}
            />
        </div>
        {showMenu && <div className="pt-11 md:hidden">
            <ul className="flex flex-col gap-3 items-start">
                <li>
                    <Link href="/blog" className={`flex items-center gap-2 link ${active === "blog" && "active-link"}`}>
                        <i className="bi bi-chat-right-text"></i>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link href="/about" className={`flex items-center gap-2 link ${active === "about" && "active-link"}`}>
                        <i className="bi bi-file-person"></i>
                        About
                    </Link>
                </li>
                {<li>
                    <Link href="/contact" className={`flex items-center gap-2 link ${active === "contact" && "active-link"}`}>
                        <i className="bi bi-person-lines-fill"></i>
                        Contacts
                    </Link>
                </li>}
                {user && user.user_type === "admin" && <li>
                        <Link href="/contact" className={`flex items-center gap-2 link ${active === "dashboard" && "active-link"}`}>
                        <i className="bi bi-person-workspace"></i>
                            Dashboard
                        </Link>
                    </li>}
                <li>
                    <Link className="flex items-center gap-2 link" href="/products"><i className="bi bi-bookmarks"></i>Categories</Link>
                </li>
                <li>
                    <Link className="flex items-center gap-2 link" href="/products"><i className="bi bi-plus-circle"></i>New Arrivals</Link>
                </li>
                <div className="icons flex items-center justify-start gap-8">
                    <li>
                        <Image 
                            src={Avatar} 
                            alt="profile icon" 
                            width={20} 
                            height={20}
                            onClick={handleProfileRedirect}
                            className="cursor-pointer"
                        />
                    </li>
                    <li>
                        <Link href="/cart">
                            <Image 
                                src={Cart} 
                                alt="cart icon" 
                                width={20} 
                                height={20}
                            />
                        </Link>
                    </li>
                </div>
            </ul>
        </div>}
        
    </div>
  )
}

export default Headers