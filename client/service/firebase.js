import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAmcCcvuccB8p_LNXmhwtl53uA9dp0x4-c',
  authDomain: 'chilloutmusic-ba889.firebaseapp.com',
  databaseURL: 'https://chilloutmusic-ba889.firebaseio.com',
  storageBucket: 'chilloutmusic-ba889.appspot.com',
  messagingSenderId: '812370035445'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}

export const db = firebase.database()
export const storage = firebase.storage()
export const auth = firebase.auth()
