import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "你的 apiKey",
  authDomain: "你的项目.firebaseapp.com",
  projectId: "你的 projectId",
  storageBucket: "你的 storageBucket",
  messagingSenderId: "你的 messagingSenderId",
  appId: "你的 appId"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export { auth };
