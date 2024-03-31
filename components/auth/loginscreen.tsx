import React, { useEffect } from 'react';
import Headers from '@/reusables/headers';
import Footer from '@/reusables/footer';
import {  useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AppDispatch } from '@/lib/store';
import { login } from '@/redux/action/authaction';
import { Button, Form, Input, Modal, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FormItem = Form.Item;
const { Password } = Input;
type loginParam = {
  email: string;
  password: string
}

const Login = () => {
  const router = useRouter()
  const dispatch: AppDispatch = useAppDispatch();
  const { isAuthenticated, user, loading, error } = useAppSelector(state => state.user);

  useEffect(() => {
    if(isAuthenticated) router.push("/profile");
  }, [router, isAuthenticated]);

  useEffect(() => {
    if(error) {
      const code = error.split("code ")[1];
      
      if(Number(code) === 404) {message.error("User doest not exist, kindly login!")}
      if(Number(code) === 401) {message.error("Password is incorrect, please try again!")}

    }
  }, [error])


  const handleLogin = (values: loginParam) => {
    dispatch(login(values));
  }

  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers />
        <div
          className="flex flex-col gap-4 mx-6 md:mx-32 lg:mx-72 my-20 shadow-lg rounded-sm py-10 px-4 md:px-16"
        >
          <h2 className="text-black text-3xl font-bold text-center">SIGN IN</h2>
          <Form layout="vertical" onFinish={handleLogin}>
            <FormItem 
              name="email"
              rules={[{required: true, message: "Please enter your email"}]}
            >
              <Input size="large" placeholder="Email" />
            </FormItem>
            <FormItem
              name="password"
              rules={[{required: true, message: "Please enter your password"}]}
            >
              <Password size="large" placeholder="Password"/>
            </FormItem>
            <FormItem>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="w-full bg-code-p transition-opacity duration-700 hover:opacity-70"
                loading={loading}
              >
                Submit
              </Button>
            </FormItem>
          </Form>
          <div className="flex items-center justify-between text-black">
            <Link 
              href="/auth/forgotpassword"
              className="text-left transition-opacity duration-[1s] hover:opacity-50 text-code-p"
            >
              Forgot password
            </Link>
            <div className="text-right">Don&#39;t have an account? 
              <Link 
                href="/auth/register"
                className="transition-opacity duration-[1s] hover:opacity-50 text-code-p"
              >Register
              </Link>
            </div>
          </div>
        </div>
        <Footer />
    </div>

  )
}

export default Login