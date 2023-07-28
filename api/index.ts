import { db } from "../firebase";
import { getFirestore, doc, getDoc, collection, query, getDocs } from "firebase/firestore";

// 원두 정보 조회
export const getCoffeeBeanInfo = async (name: string) => {
  const coffeeData = await getDoc(doc(db, 'bean', name));
  return coffeeData.data();
};