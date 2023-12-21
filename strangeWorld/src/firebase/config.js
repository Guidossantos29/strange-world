
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzFC0ZNECIe88aIZDXWG6mbRNBn8xrFJM",
  authDomain: "strange-world-65b1c.firebaseapp.com",
  projectId: "strange-world-65b1c",
  storageBucket: "strange-world-65b1c.appspot.com",
  messagingSenderId: "615019813953",
  appId: "1:615019813953:web:b62c7a82fce699b4f13ac0"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };

