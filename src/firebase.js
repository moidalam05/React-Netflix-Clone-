import { initializeApp } from 'firebase/app';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from 'react-toastify';

const firebaseConfig = {
	apiKey: 'AIzaSyAkWUnlKxyLa2VEp8a2v6omveHdJCB3eMs',
	authDomain: 'netflix-clone-bb1fa.firebaseapp.com',
	projectId: 'netflix-clone-bb1fa',
	storageBucket: 'netflix-clone-bb1fa.appspot.com',
	messagingSenderId: '662878297659',
	appId: '1:662878297659:web:5058326218e8f1c7f3061e',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, 'user'), {
			uid: user.uid,
			name,
			authProvider: 'local',
			email,
		});
	} catch (error) {
		console.log(error);
		toast.error(error.code.split('/')[1].split('-').join(' '));
	}
};

const login = async (email, password) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error);
		toast.error(error.code.split('/')[1].split('-').join(' '));
	}
};

const logout = () => {
	signOut(auth);
};

export { auth, db, login, signup, logout };
