import React, { useState } from 'react';
import Headers from '@/reusables/headers';
import Footer from '@/reusables/footer';
import {  useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AppDispatch } from '@/lib/store';
import { login } from '@/redux/action/authaction';
import { Button, Form, Input, FormInstance } from 'antd';
import Link from 'next/link';

const FormItem = Form.Item;
const { Password } = Input;
type loginParam = {
  email: string;
  password: string
}

const ResetPassword = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { isAuthenticated, user, loading } = useAppSelector(state => state.user);
  const [ password, setPassword ] = useState("");
  const [ confirmPassword, setConfirmPassword ] = useState("");

  const [form] = Form.useForm()

  const handleResetPassword = (values: loginParam) => {

  }

  const handleConfirmPassword = (e: any) => {
    const value = e.target.value;
    const { getFieldsValue, validateFields } = form;
    
    const { password } = getFieldsValue();
    console.log("pa", password, value);
    
    if(password === "") return validateFields();
    if(password !== value) return validateFields();
    setConfirmPassword(value);
  }

  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers />
        <div
          className="flex flex-col gap-4 mx-6 md:mx-32 lg:mx-72 my-20 shadow-lg rounded-sm py-10 px-4 md:px-16"
        >
          <h2 className="text-black text-3xl font-bold text-center">RESET PASSWORD</h2>
          <Form layout="vertical" onFinish={handleResetPassword} form={form}>
            <FormItem
              name="password"
              rules={[{required: true, message: "Please enter your password"}]}
            >
              <Password size="large" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </FormItem>

            <FormItem
              name="confirm_password"
              rules={[{required: true, message: "Passwords don't match"}]}
            >
              <Password 
                size="large" 
                placeholder="confirm password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </FormItem>
           
            <FormItem>
              <Button type="primary" htmlType="submit" className="w-full bg-code-p transition-opacity duration-700 hover:opacity-70">Submit</Button>
            </FormItem>
          </Form>

          <div className="flex items-center justify-between text-black">
            <Link href={"/auth/forgotpassword"} className="text-left transition-opacity duration-[1s] hover:opacity-50 text-code-p">Forgot password</Link>
            <p className="text-right">Dont't have an account? <Link href={"/auth/register"} className="transition-opacity duration-[1s] hover:opacity-50 text-code-p">Register</Link></p>
          </div>
        </div>
        <Footer />
    </div>

  )
}

export default ResetPassword;