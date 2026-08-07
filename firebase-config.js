const firebaseConfig = {
    apiKey: "Dán_API_Key_của_bạn_vào_đây",
    authDomain: "Dán_Auth_Domain_của_bạn_vào_đây",
    projectId: "crmmamnon",
    storageBucket: "Dán_Storage_Bucket_của_bạn_vào_đây",
    messagingSenderId: "Dán_Messaging_Sender_Id_vào_đây",
    appId: "Dán_App_Id_của_bạn_vào_đây"
};

// Khởi tạo Firebase Compat
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
