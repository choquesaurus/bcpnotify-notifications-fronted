importScripts("https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js"
);
// const {
//   REACT_APP_FIREBASE_apiKey,
//   REACT_APP_FIREBASE_authDomain,
//   REACT_APP_FIREBASE_databaseURL,
//   REACT_APP_FIREBASE_projectId,
//   REACT_APP_FIREBASE_storageBucket,
//   REACT_APP_FIREBASE_messagingSenderId,
//   REACT_APP_FIREBASE_appId,
// } = process.env;

// let firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_apiKey,
//   authDomain: process.env.REACT_APP_FIREBASE_authDomain,
//   databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
//   projectId:process.env.REACT_APP_FIREBASE_projectId ,
//   storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
//   messagingSenderId:process.env.REACT_APP_FIREBASE_messagingSenderId ,
//   appId: process.env.REACT_APP_FIREBASE_appId
// };

var firebaseConfig = {
  apiKey: "AIzaSyBVPcebGQZYNuMY7o7azgYF7OmhAQSvvdw",
  authDomain: "notifications-examples.firebaseapp.com",
  databaseURL: "https://notifications-examples.firebaseio.com",
  projectId: "notifications-examples",
  storageBucket: "notifications-examples.appspot.com",
  messagingSenderId: "383671783933",
  appId: "1:383671783933:web:c9147b4ceb92ec7bcb8994"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
const url = { value: "" };
// self.addEventListener("push", (e) => {
//   const { data } = JSON.parse(e.data.text());

//   console.log("push : ", data);
//   const options = {
//     body: data.body,
//     icon:
//       "https://www.rafterslanguages.com/wp-content/uploads/2017/02/cropped-Site-Icon-512x512.png",
//     image:
//       "https://yt3.ggpht.com/a/AATXAJzELQIWhi7eZgNSZjk9CUeuYu31tM1cbzbmVI3T=s900-c-k-c0xffffffff-no-rj-mo",
//   };
//   e.waitUntil(self.registration.showNotification(data.title, options));
// });

// self.addEventListener("notificationclick", function (event) {
//   console.log("click ", event);
//   window.location.href = "https://choquesaurus.com";
// });
messaging.onBackgroundMessage((payload) => {
  //self.registration.hideNotification();
  //HandlerNotificationClick(payload.data.url);
  url.value = payload.data.url;
  console.log(payload);
  const title = payload.data.title;
  const options = {
    body: payload.data.body,
    image:
      "https://image.freepik.com/vector-gratis/golpe-codo-saludo-contacto-prevencion-coronavirus_227564-125.jpg",
    icon: "iconobcp.jpeg",
    // vibrate: [
    //   200,
    //   100,
    //   200,
    //   275,
    //   425,
    //   100,
    //   200,
    //   100,
    //   200,
    //   275,
    //   425,
    //   100,
    //   75,
    //   25,
    //   75,
    //   125,
    //   75,
    //   25,
    //   75,
    //   125,
    //   100,
    //   100,
    // ],
  };

  // console.log("GAAAA :V", payload);
  self.registration.showNotification(title, options);
});

//function HandlerNotificationClick(url) {

self.addEventListener("notificationclick", function (event) {
  console.log("click evento => ", event.returnValue);
  event.notification.close();
  var clickResponsePromise = Promise.resolve();
  clickResponsePromise = clients.openWindow(url.value);
  event.waitUntil(clickResponsePromise);
  // event.waitUntil(
  //   Promise.all([
  //     clickResponsePromise,
  //     self.analytics.trackEvent("notification-click"),
  //   ])
  // );
});
//}
