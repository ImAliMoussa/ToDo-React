import firebase, {createUserProfileDocument} from "./firebaseinit";

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

// async request to sign in
export const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log({token, user});
        createUserProfileDocument(user);
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.error({errorCode, errorMessage, email, credential});
    });
};

export const signInWithEmail = (email, password) => {
    console.log("sign in with email");
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            console.log("user successfully signed in", userAuth);
        })
        .catch((error) => {
            const {message, code} = error;
            console.error({code, message});
        });
};

export const signUpWithEmail = (fullName, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            // Signed in
            createUserProfileDocument(userAuth.user, fullName);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.error({errorCode, errorMessage});
        });

}

export const signOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log("Sign out was successful");
    }).catch((error) => {
        // An error happened.
        console.error("error occurred signing out", error);
    });
}