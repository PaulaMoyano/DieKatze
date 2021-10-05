import {
  setDoc, doc, collection, serverTimestamp,
} from 'firebase/firestore/lite';
import firestore from './index';
import { updateStock } from './items';

const BUYER = {
  name: 'Comprador random',
  phone: '1554325432',
  email: 'compradorrandom@gmail.com',
};

export const addOrder = async (newOrder) => {
  const newOrderRef = doc(collection(firestore, 'order'));

  return setDoc(newOrderRef, { ...newOrder, date: serverTimestamp(), buyer: BUYER }).then(() => {
    newOrder.items.forEach(({ quantity, uid }) => updateStock(uid, -quantity));
  }).then(
    () => newOrderRef.id,
  );
};

export default addOrder;
