import {
  collection, getDocs,
} from 'firebase/firestore/lite';
import firestore, { snapshotToData } from './index';

export const getCategories = async () => {
  const col = collection(firestore, 'categories');
  const snapshot = await getDocs(col);
  return snapshotToData(snapshot);
};

export default getCategories;
