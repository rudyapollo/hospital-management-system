<div align="center">

# 🌿 AVM Ayurvedic

<img src="https://www.avm-ayurvedic.online/favicon.ico" alt="AVM Ayurvedic Logo" width="100" height="100"/>

*Bridging ancient Ayurvedic wisdom with modern technology*

[![Website](https://img.shields.io/badge/🌐_Website-Visit_Our_Site-brightgreen?style=for-the-badge&logoColor=white)](https://avm-ayurvedic.online)
[![Frontend](https://img.shields.io/badge/▲_Frontend-Vercel-black?style=for-the-badge&logo=vercel)](https://avm-ayurvedic.online)
[![Backend](https://img.shields.io/badge/🚀_Backend-AWS-orange?style=for-the-badge&logo=amazon-aws)](https://api.avm-ayurvedic.online)

</div>

---

## 🚀 Key Features

📹 Video Consultations | 🤖 AI-Powered Wellness | 📅 Smart Booking | 💳 Secure Payments
:---: | :---: | :---: | :---:
📊 Admin Dashboard | 🔔 Real-time Notifications | 🔐 Robust Authentication | 🖼️ Secure File Uploads

---

## 💻 Tech Stack

<details>
<summary>🎨 Frontend</summary>

![Next JS](https://img.shields.io/badge/Next.js-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-%231A1A1A.svg?style=flat&logo=radix-ui&logoColor=white)
![Socket.io-client](https://img.shields.io/badge/Socket.io--client-black?style=flat&logo=socket.io&logoColor=white)
![OAuth](https://img.shields.io/badge/OAuth-3C78A9?style=flat&logo=oauth&logoColor=white)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=react-query&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat&logo=stripe&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat&logo=zod&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat&logo=reacthookform&logoColor=white)

</details>

<details>
<summary>⚙️ Backend</summary>

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat&logo=amazon-aws&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-%236464FF.svg?style=flat&logo=stripe&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens)
![NGINX](https://img.shields.io/badge/NGINX-%23009639.svg?style=flat&logo=nginx&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=flat&logo=socket.io&badgeColor=010101)
![Google AI](https://img.shields.io/badge/Google_AI-4285F4?style=flat&logo=google&logoColor=white)
![Joi](https://img.shields.io/badge/Joi-0080FF?style=flat&logo=joi&logoColor=white)
![Winston](https://img.shields.io/badge/Winston-231F20?style=flat&logo=winston&logoColor=white)

</details>

<details>
<summary>🛠 DevOps & Tools</summary>

![Git](https://img.shields.io/badge/Git-%23F05033.svg?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?style=flat&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)

</details>

---
## 🏗️ Architecture Highlights

- 🧱 **Clean Architecture**: Modular, scalable, and maintainable
- 🔒 **Secure Transactions**: Stripe payment gateway integration
- 🚀 **Real-time Communication**: Powered by Socket.io
- 📊 **Comprehensive Logging**: Winston for robust error tracking
- 🧩 **Reusable Components**: Enhancing code reusability and consistency

---

<div align="center">

**[Explore Services](https://avm-ayurvedic.online) | [Book Consultation](https://avm-ayurvedic.online/new-appointment) | [Learn About Ayurveda](https://avm-ayurvedic.online/services)**

</div>


## 🛠️ Installation

To set up **AVM Ayurvedic** locally, follow these steps:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/sinanptm/avm-ayurvedic

# 2️⃣ Navigate to the project directory
cd avm-ayurvedic

# 3️⃣ Install dependencies
npm install

# 4️⃣ Install server-side dependencies
cd server
npm install

# 5️⃣ Install client-side dependencies
cd ../client
npm install

# 6️⃣ Return to the root directory and start the development server
cd ..
npm run dev
```

```
# 7️⃣ Setup Server Environment Variables

Ensure that you create a `.env` file in both the **server** and **client** directories with the following content:

### Server-side `.env`:
```bash
# MongoDB connection URL
MONGODB_URL=mongodb://localhost:27017/AVM

# Server settings
PORT=8000
NODE_ENV=dev
CLIENT_URL=http://localhost:3000

# Nodemailer settings for email
SENDER_EMAIL=test@example.com
NODEMAILER_PASSKEY=test-nodemailer-passkey

# JWT token secrets
ACCESS_TOKEN_SECRET=test-access-token-secret
REFRESH_TOKEN_SECRET=test-refresh-token-secret

# AWS S3 storage configuration
AWS_REGION=eu-north-1
AWS_ACCESS_KEY_ID=test-aws-access-key-id
AWS_SECRET_ACCESS_KEY=test-aws-secret-access-key
S3_BUCKET_NAME=test-avm-ayurvedic-bucket

# Stripe payment gateway keys
STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXX
STRIPE_WEBHOOK_SECRET=whsec_XXXXXXXXXXXXXXXXXXXXXXXX

# Google Gemini AI API key
GEMINI_API_KEY=test-gemini-api-key
```

```bash
# 8️⃣ Setup Client Environment Variables
NEXT_PUBLIC_ENV=development

# API URL for backend server
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_BASE_API_URL=http://localhost:8000

# Firebase configuration for authentication
NEXT_PUBLIC_FIREBASE_API_KEY=test-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=test-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=test-firebase-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=test-firebase-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=test-firebase-measurement-id

# Stripe publishable key for client
NEXT_PUBLIC_STRIPE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXX

# Metered TURN server for WebRTC
NEXT_PUBLIC_METERED_TURN_USERNAME=test-metered-turn-username
NEXT_PUBLIC_METERED_TURN_CREDENTIAL=test-metered-turn-credential


```

```bash
# 9️⃣ Start the development server
npm run dev

```
