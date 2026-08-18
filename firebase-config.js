import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDBFm66qJgExN4E_URHbDGhiTrzOhp_Mok",
  authDomain: "employee-clock-system-bc798.firebaseapp.com",
  projectId: "employee-clock-system-bc798",
  storageBucket: "employee-clock-system-bc798.firebasestorage.app",
  messagingSenderId: "276476267207",
  appId: "1:276476267207:web:50b7fdd375b33f57774ce2",
  measurementId: "G-XEZ8WGXXMJ"
};


const app =
  initializeApp(firebaseConfig);


const db =
  getFirestore(app);


export { db };
