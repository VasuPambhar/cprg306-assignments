import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query} from "firebase/firestore";

export const addItems = async (userID,item) => {
  try {
    const itemsCollection = collection(db,"users",userID,"items");
    const doc = await addDoc(itemsCollection,item);
    return doc.id;
  } catch (error) {
    console.error(`Error adding ${item}`);
  }
}

export const getItems = async (userID) => {
    const itemsCollection = collection(db,"users",userID,"items");
    const q = query(itemsCollection);
    const querySnapshot = await getDocs(q);
    return querySnapshot.forEach((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
 
}