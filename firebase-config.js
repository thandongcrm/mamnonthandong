import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Lấy trực tiếp từ khung trên màn hình của bạn:
const firebaseConfig = {
    apiKey: "AIzaSyBE3PkAPgI3OUblV8e6B12RdXU-gx9gFHI",
    authDomain: "crmmamnon.firebaseapp.com",
    projectId: "crmmamnon",
    storageBucket: "crmmamnon.appos.appspot.com", // hoặc crmmamnon.appspot.com tùy theo dòng hiển thị đầy đủ của bạn
    messagingSenderId: "759420339515",
    appId: "1:759420339515:web:66900a20d0eb59bc73a31e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, setDoc, doc };
