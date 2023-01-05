import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDwrcrBx2A__Xi_yHAOFhIQm--WeaBfSho",
  authDomain: "ecommerce-f4b05.firebaseapp.com",
  projectId: "ecommerce-f4b05",
  storageBucket: "ecommerce-f4b05.appspot.com",
  messagingSenderId: "612066521782",
  appId: "1:612066521782:web:f09ccd84a3b8290294ac17",
  measurementId: "G-9KLRLTQKW1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);