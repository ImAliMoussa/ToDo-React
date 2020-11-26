import firebase, {firestore} from "./firebaseinit";

export const createNewToDoList = async (title) => {
    const user = firebase.auth().currentUser;
    console.log(user);
    if (!user) return;
    let retVal = null;
    const creationDate = firebase.firestore.Timestamp.now();
    await firestore.collection('todoCollections').add({
        users: user.uid,
        title,
        creationDate
    }).then(async ret => {
        const {id} = ret;
        console.log({ret});
        console.log({id});
        await firestore.doc(`users/${user.uid}/todos/${id}`).set({
            creationDate
        }).then(ret => {
            console.log("successfully added todolist to user");
            console.log({id});
            retVal = id;
        }).catch(err => {
            console.error(err, "created to do list but couldnt add to user");
        });
    }).catch(err => {
        console.error({err});
    });
    return retVal;
};