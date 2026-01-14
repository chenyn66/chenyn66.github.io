importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBp8U-OOhqAq8cduJY6drH2qaEz-RxRA84",
    authDomain: "climb-d1596.firebaseapp.com",
    databaseURL: "https://climb-d1596-default-rtdb.firebaseio.com",
    projectId: "climb-d1596",
    storageBucket: "climb-d1596.firebasestorage.app",
    messagingSenderId: "137441301946",
    appId: "1:137441301946:web:3eb8750fb851f0aaaf3983",
    measurementId: "G-46JLS940NZ"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '../images/mstile-150x150.png',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

