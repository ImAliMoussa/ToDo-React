import firebase, {firestore} from "./firebaseinit";

export const createNewToDoList = async (title) => {
    const user = firebase.auth().currentUser;
    if (!user) return;
    let retVal = null;
    const creationDate = firebase.firestore.Timestamp.now();
    await firestore.collection('todoCollections').add({
        users: user.uid,
        title,
        creationDate,
    }).then(async ret => {
        const {id} = ret;
        await firestore.doc(`users/${user.uid}/todos/${id}`).set({
            creationDate,
        }).then(ret => {
            retVal = id;
        }).catch(err => {
            console.error(err, "created to do list but couldnt add to user");
        });
    }).catch(err => {
        console.error({err});
    });
    return retVal;
};