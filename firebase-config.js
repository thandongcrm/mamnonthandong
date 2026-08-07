// Cấu hình Firebase chuẩn cho phiên bản Compat (Dán đè toàn bộ nội dung vào file firebase-config.js)
const firebaseConfig = {
    apiKey: "ĐIỀN_API_KEY_CỦA_BẠN_VÀO_ĐÂY",
    authDomain: "ĐIỀN_AUTH_DOMAIN_CỦA_BẠN_VÀO_ĐÂY",
    projectId: "crmmamnon",
    storageBucket: "ĐIỀN_STORAGE_BUCKET_CỦA_BẠN_VÀO_ĐÂY",
    messagingSenderId: "ĐIỀN_MESSAGING_SENDER_ID_CỦA_BẠN_VÀO_ĐÂY",
    appId: "ĐIỀN_APP_ID_CỦA_BẠN_VÀO_ĐÂY"
};

// Khởi tạo Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
