import Headers from '@/reusables/headers';
import React from 'react';
import { Form, Button, Input } from 'antd';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormItem = Form.Item;
const TextArea = Input.TextArea;

const ContactComponent = () => {
  return (
    <div className="h-screen overflow-y-scroll" style={{ background: `#fff center center/cover no-repeat`}}>
        <Headers active="contact"/>
        <div className="text-gray-500 flex flex-col gap-2 mx-6 md:mx-32 lg:mx-72 my-8 shadow-lg rounded-sm py-10 px-4 md:px-16">
          <h2 className="text-2xl font-bold text-center uppercase">Want to get in touch?</h2>
          <p className="text-xl italic font-medium text-center text-code-p">Send a message below</p>

          <Form>
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
                className="w-full"
            >
              <Input size="large" placeholder="Email" type="email" />
            </FormItem>
            <FormItem
                name="phone_number"
                rules={[{required: true, message: "Please enter your phone number"}]}
                className="w-full"
            >
              <PhoneInput 
                country="ng"
                placeholder="Phone number"
                inputStyle={{width: "100%"}}
              />
            </FormItem>
            <FormItem
                name="message"
                rules={[{required: true, message: "Please enter your message"}]}
                className="w-full"
            >
              <TextArea 
                placeholder="Message"
                maxLength={250}
                className="h-28"
                cols={5}
                rows={5}
                spellCheck
              />
            </FormItem>


            <FormItem>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="w-full bg-code-p transition-opacity duration-700 hover:opacity-70"
              > 
                Send
              </Button>
            </FormItem>
          </Form>
        </div>
    </div>
  )
}

export default ContactComponent