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

const crud = new FirebaseCRUD<{ name: string; value: number }>(
  "contas",
  firebaseConfig
);

crud.create("123", { name: "luz", value: 100 });
