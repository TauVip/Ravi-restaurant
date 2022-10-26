import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCWmOH1rfGEaegJ3ZBwTbWQ8Y50bouM9NU',
  authDomain: 'ravi-restaurant.firebaseapp.com',
  databaseURL: 'https://ravi-restaurant-default-rtdb.firebaseio.com',
  projectId: 'ravi-restaurant',
  storageBucket: 'ravi-restaurant.appspot.com',
  messagingSenderId: '1090583639018',
  appId: '1:1090583639018:web:8336da5d96e333e58ef893'
}

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
