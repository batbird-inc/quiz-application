import firebase from 'firebase';

const Config = {
  
        apiKey: "AIzaSyB5eWQ74cxhSRi2AXLztcsf570LO9apN0g",
        authDomain: "quizapp-9cc29.firebaseapp.com",
        projectId: "quizapp-9cc29",
        storageBucket: "quizapp-9cc29.appspot.com",
        messagingSenderId: "532410992349",
        appId: "1:532410992349:web:212c86276140829e133d34",
        measurementId: "G-RV11XZY5F8"    
}
 // Initialize Firebase
 if(firebase.app.length)
 { 
         firebase.initializeApp(Config)
}
//  var db = firebase.firestore();
// export auth = firebase.auth()
 export default firebase;