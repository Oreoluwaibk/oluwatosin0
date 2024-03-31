import React from 'react';
import Headers from '@/reusables/headers';
import Footer from '@/reusables/footer';
import {  useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AppDispatch } from '@/lib/store';
import { login } from '@/redux/action/authaction';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

const FormItem = Form.Item;
const { Password } = Input;
type loginParam = {
  email: string;
  password: string
}

const ForgotPassword = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { isAuthenticated, user, loading } = useAppSelector(state => state.user);

  const handleForgotPassword = (values: loginParam) => {

  }

  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers />
        <div
          className="flex flex-col gap-4 mx-6 md:mx-32 lg:mx-72 my-20 shadow-lg rounded-sm py-10 px-4 md:px-16"
        >
          <h2 className="text-black text-3xl font-bold text-center">FORGOT PASSWORD</h2>
          <Form layout="vertical" onFinish={handleForgotPassword}>
            <FormItem 
              name="email"
              rules={[{required: true, message: "Please enter your email"}]}
            >
              <Input size="large" placeholder="Email" />
            </FormItem>
           
            <FormItem>
              <Button type="primary" htmlType="submit" className="w-full bg-code-p transition-opacity duration-700 hover:opacity-70">Submit</Button>
            </FormItem>
          </Form>

          <div className="flex items-center justify-between text-black">
            <Link 
              href="/auth/forgotpassword"
              className="text-left transition-opacity duration-[1s] hover:opacity-50 text-code-p"
              >
                Forgot password
              </Link>
            <div className="text-right">Don&#39;t have an account? <Link href="/auth/register" className="transition-opacity duration-[1s] hover:opacity-50 text-code-p">Register</Link></div>
          </div>
        </div>
        <Footer />
    </div>

  )
}

export default ForgotPassword;