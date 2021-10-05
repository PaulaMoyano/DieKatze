import {
  collection, getDocs, query, where, doc, updateDoc, increment,
} from 'firebase/firestore/lite';
import firestore, { snapshotToData } from './index';

export const getItems = async () => {
  const itemsCol = collection(firestore, 'items');
  const itemSnapshot = await getDocs(itemsCol);
  return snapshotToData(itemSnapshot);
};

export const getItem = async (itemId) => {
  const q = query(collection(firestore, 'items'), where('uid', '==', itemId));
  const snapshot = await getDocs(q);
  return snapshotToData(snapshot)[0];
};

export const updateStock = async (itemId, quantity) => {
  const q = query(collection(firestore, 'items'), where('uid', '==', itemId));
  const snapshot = await getDocs(q);
  const itemRef = doc(firestore, snapshot.docs[0].ref.path);

  await updateDoc(itemRef, {
    stock: increment(quantity),
  });
};

export const getItemsByCategory = async (category) => {
  const q = query(collection(firestore, 'items'), where('category', '==', category));
  const snapshot = await getDocs(q);
  return snapshotToData(snapshot);
};

export default getItems;
