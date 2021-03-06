import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO -> clean this up and make several files as this is getting bigger

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

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;

export const createUserProfileDocument = async (userAuth, fullName) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        await firestore.doc(`users/${userAuth.uid}`).set({
            fullName
        })
            .catch(err => console.error(err));
    }
};

export const addToDo = (collectionUUID) => {
    if (!collectionUUID) console.error(collectionUUID, "is null");

    const priority = 1;
    const val = ""
    const creationDate = firebase.firestore.Timestamp.now();
    const dueDate = creationDate;
    const completed = false;

    firestore.collection(`todoCollections/${collectionUUID}/todos`).add({
        val,
        dueDate,
        creationDate,
        priority,
        completed
    }).catch(err => {
        console.error({err});
    });
};

export const removeToDo = (documentUUID, collectionUUID) => {
    firestore.doc(`todoCollections/${collectionUUID}/todos/${documentUUID}`).delete().catch(function (error) {
        console.error("Error removing document: ", error);
    });
};

export const updateToDo = (collectionUUID, documentUUID, newToDoValue, completed) => {
    firestore.doc(`todoCollections/${collectionUUID}/todos/${documentUUID}`)
        .update({
            val: newToDoValue,
            completed
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
};