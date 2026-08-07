const firebaseConfig = {
    apiKey: "AIzaSy...",
    authDomain: "crmmamnon.firebaseapp.com",
    projectId: "crmmamnon",
    storageBucket: "crmmamnon.appspot.com",
    messagingSenderId: "123456789...",
    appId: "1:123456789..."
};

// Khởi tạo Firebase Compat
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
