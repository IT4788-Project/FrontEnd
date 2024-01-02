import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDV2TIOvufBqjwvMjihMUPZK2DfhjItyRw',
  authDomain: 'imagestore-f373f.firebaseapp.com',
  projectId: 'imagestore-f373f',
  storageBucket: 'imagestore-f373f.appspot.com',
  messagingSenderId: '888809142831',
  appId: '1:888809142831:web:3928fce0ca1bb7049f24da',
  caloriesmentId: 'G-F2R5B2RN22',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

export {firebase};