# Firebase CRUD

This project is a generic **CRUD (Create, Read, Update, Delete)** built with **Node.js and TypeScript**, using **Firebase Realtime Database** as its data source. It serves as a simple and flexible way to manage your Firebase database programmatically, acting as an abstraction layer for basic database operations.

## 🚀 Technologies

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ts-node](https://typestrong.org/ts-node/)

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/firebase-crud.git
cd firebase-crud
npm install
```

## ⚙️ Configuration

Create a `.env` file in the root of the project with the following content:

```env
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
```

## 🛠️ Usage

During development:

```bash
npm run dev
```

For production build and run:

```bash
npm run build
npm start
```

## 📁 Project Structure

```bash
src/
├── firebase-crud.ts  # Generic Firebase CRUD class
└── index.ts          # Entry/test file
```

## ✨ Example

```ts
import dotenv from "dotenv";
import FirebaseCRUD from "./firebase-crud";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const crud = new FirebaseCRUD<{ name: string; age: number }>(
  "users",
  firebaseConfig
);

crud.create("123", { name: "adriano", value: 99 });
```

## ✅ TODO

- [ ] Add optional authentication support
- [ ] Automated tests

## 📄 License

This project is licensed under the MIT License.
