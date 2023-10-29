import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import APP_CONFIG from "./app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: APP_CONFIG.firebaseApiKey,
  authDomain: APP_CONFIG.firebaseAuthDomain,
  projectId: APP_CONFIG.firebaseProjectId,
  storageBucket: APP_CONFIG.firebaseStorageBucket,
  messagingSenderId: APP_CONFIG.firebaseMessagingSenderId,
  appId: APP_CONFIG.firebaseAppId,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
