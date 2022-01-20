
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../core/config";
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function signUpUser({ name, email, password }) {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
            displayName: name,
        })
        return { user }
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export async function loginUser({ email, password }) {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
 
        return { user }
    } catch (error) {
        return {
            error: error.message
        }
    }
}

export function logoutUser() {
    signOut(auth)
}