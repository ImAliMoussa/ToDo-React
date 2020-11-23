import firebase, {firestore} from "./firebaseinit";

export const createNewToDoList = () => {
    const user = firebase.auth().currentUser;
    if (!user) return;
    firestore.collection('todoCollections').add({
        users: user.uid
    }).then(ret => {
        console.log({ret});
    }).catch(err => {
        console.error({err});
    });
};