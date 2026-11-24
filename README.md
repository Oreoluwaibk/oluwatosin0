# oluwatosin0

Storefront for oluwatosin0, a fashion shop. Shoppers browse products, open a product, use the cart, read the blog, and manage an account. The API is [oluwatosin0-backend](https://github.com/Oreoluwaibk/oluwatosin0-backend).

## Stack

Next.js (Pages Router), React, TypeScript, Tailwind CSS, Ant Design, Redux Toolkit, and Axios.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home |
| `/products`, `/products/[id]` | Catalog and a product |
| `/cart` | Cart |
| `/blog`, `/blog/[id]` | Blog |
| `/about`, `/contact` | Shop info |
| `/auth/login`, `/auth/register` | Account |
| `/auth/forgotpassword`, `/auth/resetpassword` | Password reset |
| `/profile` | Profile |

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Point Axios at a running copy of the backend.

This repo contains a `.env` file. Keep API URLs and secrets local, and do not publish new secrets in it.

`npm run build` then `npm start` runs the production server.
