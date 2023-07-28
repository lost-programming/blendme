// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCH1AsYz4HGxRzqusi_GJhq9c3DmhFza_s",
	authDomain: "blendme-6e839.firebaseapp.com",
	projectId: "blendme-6e839",
	storageBucket: "blendme-6e839.appspot.com",
	messagingSenderId: "662005109090",
	appId: "1:662005109090:web:addbf987ff1d8d0616dc3b",
	measurementId: "G-FWVG6GVJ87"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);