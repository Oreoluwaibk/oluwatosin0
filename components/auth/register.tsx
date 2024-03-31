import React, { useState, useEffect } from 'react';
import Headers from '@/reusables/headers';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { AppDispatch } from '@/lib/store';
import { Form, Input, Button, DatePicker, Select, message } from 'antd';
import Link from 'next/link';
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import moment from 'moment';
import { register } from '@/redux/action/authaction';
import { useRouter } from 'next/router';


const FormItem = Form.Item;
const { Password } = Input;
type RegisterPayload = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  address_line1: string;
  address_line2: string;
  state: string;
  phone_number: number;
  country: string;
  date_of_birth: Date;
  postal_code: string;
  sex: string;
  // picture: string;
}


const Register = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const router = useRouter();
  const { isAuthenticated, error, loading } = useAppSelector(state => state.user);
  const [ state, setState ] = useState("");
  const [ country, setCountry ] = useState("");
  const [ sex, setSex ] = useState("");
  

  const handleRegister = (values: RegisterPayload) => {

    const date_of_birth = moment(values.date_of_birth).format("YYYY-MM-DD")
    const payload = {...values, date_of_birth}
    
    dispatch(register(payload));
  }  

  useEffect(() => {
    if(isAuthenticated) router.push("/profile");
  }, [isAuthenticated, router]);

  useEffect(() => {
    if(error) {
      const code = error.split("code ")[1];

      if(Number(code) === 403) {message.error("user already exist, kindly login to continue!")};
    }
  }, [error])

  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers />
        <div
          className="flex flex-col gap-2 mx-6 md:mx-32 lg:mx-72 my-8 shadow-lg rounded-sm py-10 px-4 md:px-16"
        >
          <h2 className="text-black text-3xl font-bold text-center">REGISTER</h2>
          <Form layout="vertical" onFinish={handleRegister}>
            <div className="flex items-center gap-2">
              <FormItem
                name="first_name"
                rules={[{required: true, message: "Please enter your first name"}]}
                className="w-1/2"
              >
                <Input size="large" placeholder="First name" />
              </FormItem>
              <FormItem
                name="last_name"
                rules={[{required: true, message: "Please enter your last name"}]}
                className="w-1/2"
              >
                <Input size="large" placeholder="Last name" />
              </FormItem>
            </div>
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
            <div className="flex items-center gap-2">
              <FormItem
                name="address_line1"
                rules={[{required: true, message: "Please enter your address line 1"}]}
                className="w-1/2"
              >
                <Input size="large" placeholder="Address line 1" />
              </FormItem>
              <FormItem
                name="address_line2"
                rules={[{required: true, message: "Please enter your address line 2"}]}
                className="w-1/2"
              >
                <Input size="large" placeholder="Address line 2" />
              </FormItem>
            </div>
            <div className="flex items-center gap-2">
              <FormItem
                name="country"
                rules={[{required: true, message: "Please enter your country"}]}
                className="w-1/2 "
              >
                <CountryDropdown 
                  defaultOptionLabel='Select your country'
                  value={country}
                  onChange={(value) =>setCountry(value)}
                  classes="h-10 w-full border rounded-lg px-2 font-normal active:border focus:border"
                />
                {/* <Input size="large" placeholder="Address line 1" /> */}
              </FormItem>

              <FormItem
                name="state"
                rules={[{required: true, message: "Please enter your state"}]}
                className="w-1/2"
              >
                <RegionDropdown 
                  defaultOptionLabel='Select your state'
                  country={country}
                  value={state}
                  onChange={(val) => setState(val)}
                  classes="h-10 w-full border rounded-lg px-2 font-normal "
                />
              </FormItem>
            </div>
            <div className="flex items-center gap-2">
              <FormItem
                name="date_of_birth"
                rules={[{required: true, message: "Please enter your date of birth"}]}
                className="w-1/2"
              >
                <DatePicker 
                  size="large" 
                  placeholder="Date of birth"
                  showTime={false}
                  className="w-full"
                />
              </FormItem>

              <FormItem
                name="phone_number"
                rules={[{required: true, message: "Please enter your phone number"}]}
                className="w-1/2"
              >
                <PhoneInput 
                  placeholder="Phone number" 
                  country="ng"
                  inputStyle={{
                    border: "1px solid #d9d9d9",
                    width: `${ "100%"}`,
                    height: "40px",
                  }}
                />
              </FormItem>
            </div>

            <div className="flex items-center gap-2">
              <FormItem
                name="sex"
                rules={[{required: true, message: "Please select your sex"}]}
                className="w-1/2"
              >
                <Select onChange={(value) => setSex(value)} placeholder="Select your sex">
                  <Select.Option key="male" value="male" >Male</Select.Option>
                  <Select.Option key="female" value="female">Female</Select.Option>
                  <Select.Option key="others" value="others">Others</Select.Option>
                </Select>
              </FormItem>

              <FormItem
                name="postal_code"
                rules={[{required: true, message: "Please enter your postal code"}]}
                className="w-1/2"
              >
                <Input 
                  size="large" 
                  placeholder="Postal code" 
                />
              </FormItem>
            </div>

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

            <p className="text-right">Already registered? 
              <Link 
                href={"/auth/login"}
                className="transition-opacity duration-[1s] hover:opacity-50 text-code-p"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
    </div>
  )
}

export default Register;