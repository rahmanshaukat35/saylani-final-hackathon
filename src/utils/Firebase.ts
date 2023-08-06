import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUMaFhwWBgbnEiOWE3dcaI0Xg3Pmlif9M",
  authDomain: "e-commerce-ce7e1.firebaseapp.com",
  projectId: "e-commerce-ce7e1",
  storageBucket: "e-commerce-ce7e1.appspot.com",
  messagingSenderId: "695986126039",
  appId: "1:695986126039:web:96b81cc58b5b1aee7fc492",
  measurementId: "G-6QQMK8JZRH",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app, "gs://e-commerce-ce7e1.appspot.com");
