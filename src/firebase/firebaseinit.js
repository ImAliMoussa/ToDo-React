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

export const testFirebase = () => {
    console.log("inside test function");
    firestore.collection("users").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

export const testFirebaseGet = () => {
    firestore.collection("todos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const d = {
                id : doc.id,
                data: doc.data()
            };
            console.log(d);
        });
    });
}

export const addToDo = (collectionUUID) => {
    collectionUUID = "QD3xnUNZnRIMB9BtCqSh";
    const t = new Date();
    const str = "new todo " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds()
    firestore.collection(`todoCollections/${collectionUUID}/todos`).add({
        val: str
    }).then(ret => {
        console.log({ret});
    }).catch(err => {
        console.error({err});
    });
};

export const viewToDos = (collectionUUID) => {
    collectionUUID = "QD3xnUNZnRIMB9BtCqSh";
    firestore.collection(`todoCollections/${collectionUUID}/todos`)
        .onSnapshot(function(querySnapshot) {
            console.log("viewtodos was called");
            const todos = [];
            querySnapshot.forEach(function(doc) {
                todos.push(doc.data().val);
            });
            console.log("Current cities in CA: ", todos.join(", "));
        });
}

