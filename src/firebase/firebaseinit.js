import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDyuu1P5a6LAcXAh-5vp-0lVDxJhtpekd8",
    authDomain: "todo-est.firebaseapp.com",
    databaseURL: "https://todo-est.firebaseio.com",
    projectId: "todo-est",
    storageBucket: "todo-est.appspot.com",
    messagingSenderId: "712752571291",
    appId: "1:712752571291:web:c1eff62fc40c961e64373e",
    measurementId: "G-YYPQPH5ESS"
};

console.log("hello world");

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData
            });
        } catch (error) {
            console.log("Error creating user, ", error.message);
        }
    }

    return userRef;
};

export const addToDo = (collectionUUID) => {
    collectionUUID = "QD3xnUNZnRIMB9BtCqSh";
    const t = new Date();
    // const str = "new todo " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
    const str = ""
    firestore.collection(`todoCollections/${collectionUUID}/todos`).add({
        val: str
    }).then(ret => {
        console.log({ret});
    }).catch(err => {
        console.error({err});
    });
};

export const removeToDo = (documentUUID) => {
    const collectionUUID = "QD3xnUNZnRIMB9BtCqSh";
    firestore.doc(`todoCollections/${collectionUUID}/todos/${documentUUID}`).delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
};

export const updateToDo = (documentUUID, newToDoValue) => {
    const collectionUUID = "QD3xnUNZnRIMB9BtCqSh";
    firestore.doc(`todoCollections/${collectionUUID}/todos/${documentUUID}`)
        .update({val: newToDoValue})
        .then(() => {
            console.log("Document successfully updated!")
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
};