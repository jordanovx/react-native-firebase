import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdW2E2BgOeA5eA37Rod7crtLTUPbAEEXg",
    authDomain: "reactnativemob-31bf1.firebaseapp.com",
    databaseURL: "https://reactnativemob-31bf1.firebaseio.com",
    projectId: "reactnativemob-31bf1",
    storageBucket: "reactnativemob-31bf1.appspot.com",
    messagingSenderId: "619876212349",
    appId: "1:619876212349:web:6c311d75e40f82b43cdb14",
    measurementId: "G-031WBC75F6",
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase }