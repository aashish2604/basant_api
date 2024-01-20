// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyBblycYrBZzvs4VgRyeimX328daZB3TybU",
  authDomain: "basant-b49f1.firebaseapp.com",
  projectId: "basant-b49f1",
  storageBucket: "basant-b49f1.appspot.com",
  messagingSenderId: "608154345485",
  appId: "1:608154345485:web:ae997044de03f9a7357544",
  measurementId: "G-VKBCJWKHGG"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

async function getEvents(){
    try {
        let day1=[];
        let day2=[];
        const snapshot=await db.collection('events').get();
        snapshot.forEach(element => {
            if(element.data().day==='1') day1.push(element.data());
            else day2.push(element.data());
        });
        console.log(day1);
        return {
            "day1": day1,
            "day2": day2
        };
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getSponsors(){
    try {
        let sponsors=[];
        let isPrepared=1;
        const snapshot=await db.collection("sponsors").get();
        snapshot.forEach(e=>{
            if(e.id==="waiting") isPrepared=0;
            sponsors.push(e.data());
        });
        console.log(sponsors);
        if(isPrepared===1)
        return sponsors;
        else return "empty";
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getEvents,getSponsors };
