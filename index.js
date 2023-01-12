//write in firestore document
//use below code for auto_id document
// addDoc(collection(firestore, "test"), {
//   name:";lasdf"
// });
//use below code to update document fields
// updateDoc(doc(firestore, "ids", "game_id"), {
//   id:gameId
// });
//below code to delete document
// deleteDoc(doc(firestore, "gameHistory", "10004"));

//read firestore document.
// const docRef = doc(firestore, "ids", "game_id");
// const docSnap = getDoc(doc(firestore, "ids", "game_id"));
// let gameId = "10000";
// if (docSnap.exists()) {
//   // console.log("Document data:", docSnap.data());
//   const data = docSnap.data(); //convert to javascript object
//   gameId = data.id;
//   gameId = parseInt(gameId);
//   gameId = gameId + 1;
//   const id = gameId + "";
//   updateDoc(doc(firestore, "ids", "game_id"), {
//     id: id,
//   });
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }
