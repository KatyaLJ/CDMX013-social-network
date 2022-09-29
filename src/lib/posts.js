import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { db } from './config.js';

export const savePost = async (text) => {
  if (text != '') {
    const docRef = await addDoc(collection(db, 'posts'), {
      texto: text,
      likes: [],
      // fecha
      // correo
    });
    console.log('Document written with ID: ', docRef);
    if (docRef.id != '') {
      console.log('Se guardo correctamente');
    }
  } else {
    console.error('Introduce texto ');
  }
};