This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The site is a static export (`output: "export"`) deployed on Cloudflare Pages (project `gbf`, production domain [greatbonefishing.com](https://greatbonefishing.com)).

## Booking enquiry form

The `/book/` form submits with `fetch` + JSON to [Web3Forms](https://web3forms.com) (`https://api.web3forms.com/submit`). It does **not** use FormSubmit. Mail is delivered to **GreatBonefishing@gmail.com** because that is the email bound to the Web3Forms access key.

Spam protection uses a hidden text field named `website` (not a checkbox). Real users leave it empty; empty and whitespace-only values always POST to Web3Forms. Only a filled honeypot is treated as a bot (silent success, no API call). The success screen (`/book/?sent=1`) is shown for humans only after Web3Forms returns `success: true`.

`NEXT_PUBLIC_*` values are inlined at **build** time, so a new deployment is required after changing the key.

### Activate in production

1. Create an access key at [https://web3forms.com](https://web3forms.com) using **GreatBonefishing@gmail.com**. Web3Forms emails the key to that address; confirm/activate it if they ask you to.
2. In **Cloudflare Pages → project `gbf` → Settings → Environment variables → Production**, add:
   - **Variable name:** `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value:** the access key from step 1
3. **Redeploy** the production site so the new value is baked into the static export. Saving the env var without a rebuild will not update the live form.
4. Send a test enquiry from https://greatbonefishing.com/book/ and confirm it arrives at GreatBonefishing@gmail.com.

Until that key is set and the site is rebuilt, the form still shows a clear error with mailto/phone fallback instead of hanging on “Sending…”.

Locally, copy `.env.example` to `.env.local` and paste the same key if you want live delivery during `next dev`.

## Getting Started

First, install dependencies and run the development server with Bun:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
