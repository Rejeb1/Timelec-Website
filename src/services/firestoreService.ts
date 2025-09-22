import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { Panne, Technicien, Equipement } from '../types';

// Add Panne
export const addPanne = async (panneData: Omit<Panne, 'id'>): Promise<string> => {
  const docRef = await addDoc(collection(db, 'pannes'), panneData);
  return docRef.id;
};

// Get all Pannes
export const getPannes = async (): Promise<Panne[]> => {
  const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'pannes'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Panne));
};

// Update Panne
export const updatePanne = async (id: string, updates: Partial<Panne>): Promise<void> => {
  await updateDoc(doc(db, 'pannes', id), updates);
};

// Delete Panne
export const deletePanne = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'pannes', id));
};

// Repeat similar functions for techniciens and equipements collections