import { ConfigProvider } from 'antd';
import 'tailwindcss/tailwind.css';
import "@/styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import type { AppProps } from "next/app";
import theme from "@/theme/themeConfig";
import StoreProvider from "./storeProvider";
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <AnimatePresence mode='wait' initial={false}>
        <ConfigProvider theme={theme}>
          <Component {...pageProps} />
        </ConfigProvider>
      </AnimatePresence>
    </StoreProvider>
      
  )

}
