
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyC7VTJEATYFSNdloGR4IBWWt066lcX4J2Y",
  authDomain: "sooq-13483.firebaseapp.com",
  projectId: "sooq-13483",
  storageBucket: "sooq-13483.appspot.com",
  messagingSenderId: "206241232334",
  appId: "1:206241232334:web:105267788148211746279f",
  measurementId: "G-YXKB0CMYMX"
};
 firebase.initializeApp(firebaseConfig);

 const storage=firebase.storage();

 export {storage , firebase as default};