import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs }from "firebase/firestore"
import { addFighter } from './addFighter.js';
import { createFighterGrid } from './fighters.js'; // Import createFighterGrid from fighters.js

const firebaseConfig = {
    apiKey: "AIzaSyDhTlQWHRKNVFaAAu8E4WTBdD8pdVsmyYU",
    authDomain: "lfc-website-31dd4.firebaseapp.com",
    projectId: "lfc-website-31dd4",
    storageBucket: "lfc-website-31dd4.appspot.com",
    messagingSenderId: "1082810451787",
    appId: "1:1082810451787:web:3c2467e3ae8a4ad8f8cace"
  }

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

// collection ref
const colRef = collection(db, 'Fighters')

// Fetch data from Firestore
getDocs(colRef)
  .then(snapshot => {
    const fighters = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    // After fetching data, use createFighterGrid
    createFighterGrid(fighters, 1, 15); // Assuming currentPage is 1 and itemsPerPage is 15
  })
  .catch(err => {
    console.log(err.message);
  });



// Example usage of addFightersForm
const addFightersForm = document.querySelector('.add');
if (addFightersForm) {
  addFightersForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Assuming you have input fields for name, datacenter, and world
    const name = addFightersForm.name.value;
    const nickname = addFightersForm.nickname.value;
    const img1 = addFightersForm.img1.value;
    const img2 = addFightersForm.img2.value;
    const img3 = addFightersForm.img3.value;
    const datacenter = addFightersForm.datacenter.value;
    const world = addFightersForm.world.value;

    // Example usage of addFighter function
    addFighter(colRef, name, nickname, img1, img2, img3, datacenter, world);
  });
}