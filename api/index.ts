import { db } from "../firebase";
import { getFirestore, doc, getDoc, collection, query, getDocs } from "firebase/firestore";

// 원두 전체 정보 조회
export const getCollectionData = async (path: string) => {
  const data: any = [];
  const beans = await getDocs(collection(db, path));
  beans.forEach((doc) => {
    data.push(doc.data())
  });

  return data;
};


// 원두 정보 조회
export const getCoffeeBeanInfo = async (name: string) => {
  const coffeeData = await getDoc(doc(db, "bean", name));
  return coffeeData.data();
};