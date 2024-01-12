import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { collection, getFirestore, onSnapshot,
  deleteDoc, doc, getDoc, setDoc, updateDoc, addDoc,
  query, where, orderBy, serverTimestamp, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes, } from "firebase/storage";
import { Navigate } from "react-router-dom";



const firebaseConfig = {
  apiKey: "AIzaSyCxBBBODBxYzm6UF39UZK2hA15uBqlph34",
  authDomain: "ecoproject-65d4a.firebaseapp.com",
  databaseURL: "https://ecoproject-65d4a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ecoproject-65d4a",
  storageBucket: "ecoproject-65d4a.appspot.com",
  messagingSenderId: "454442138545",
  appId: "1:454442138545:web:bd73e9aa49997d7c779b90",
  measurementId: "G-9B2TC4P22F"
};

// Initialize Firebase
initializeApp(firebaseConfig)

const db = getFirestore()
const auth = getAuth()
const storage = getStorage();

const provider = new GoogleAuthProvider();
// const user = auth.currentUser;

export const createUser = async (email, password, username) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User created:", userCredential.user.uid);

    const user = {
      name: username,
      email: email,
      role: "user",
      img: "https://cdn.discordapp.com/attachments/1121152150731489360/1121231511270723665/iconfast.png",
      BackImg: "https://media.discordapp.net/attachments/1121152150731489360/1121231511534977044/backminado.png",
      favPost: [],
      uid: userCredential.user.uid,
    };
    console.log("User data:", user);

    localStorage.setItem("imgPf", "https://cdn.discordapp.com/attachments/1121152150731489360/1121231511270723665/iconfast.png")

    const docRef = doc(db, "users", userCredential.user.email); // Use UID instead of email
    await setDoc(docRef, user);

    console.log("User document created successfully.");

    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "/ecoforum";
  } catch (error) {
    console.log("Error creating user:", error);
  }
};
export const getUsers = async () => {
  try {
    const users = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    console.log("Error getting users:", error);
  }
};
export const updateUser = async (email, updatedUser) => {
  try {
    const docRef = doc(db, "users", email);
    await updateDoc(docRef, updatedUser);
    console.log("User updated successfully.");
  } catch (error) {
    console.log("Error updating user:", error);
  }
};
export const deleteUsers = async (email) => {
  try {
    const docRef = doc(db, "users", email);
    await deleteDoc(docRef);
    console.log("User deleted successfully.");
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};

export const getFeedback = async () => {
  try {
    const feedbacks = [];
    const querySnapshot = await getDocs(collection(db, "feedback"));
    querySnapshot.forEach((doc) => {
      feedbacks.push({ id: doc.id, ...doc.data() });
    });
    return feedbacks;
  } catch (error) {
    console.log("Error getting feedbacks:", error);
  }
};

export const deleteFeedback = async (feedbackId) => {
  try {
    const docRef = doc(db, "feedback", feedbackId);
    await deleteDoc(docRef);
    console.log("Feedback deleted successfully.");
  } catch (error) {
    console.log("Error deleting feedback:", error);
  }
};

export const updateFeedback = async (feedbackId, updatedFeedback) => {
  try {
    const docRef = doc(db, "feedback", feedbackId);
    await updateDoc(docRef, updatedFeedback);
    console.log("Feedback updated successfully.");
  } catch (error) {
    console.log("Error updating feedback:", error);
  }
};
export const createUserFeedback = async (feedback) => {
  try {
    const docRef = await addDoc(collection(db, "feedback"), {
      email: feedback.email,
      firstName: feedback.firstName,
      lastName: feedback.lastName,
      message: feedback.message,
      subject: feedback.subject,
    });
    console.log("Feedback created successfully:", docRef.id);
  } catch (error) {
    console.log("Error creating feedback:", error);
  }
};

const trackUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {

      // console.log(user); // Store user information in local storage

      const userObj = {
        name: user.displayName,
        email: user.email,
      };
      localStorage.setItem("currentUser", JSON.stringify(userObj));
    } else {
      localStorage.removeItem("currentUser");
    }
  });
};
trackUser();

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    const user = userCredential.user;

    const userObj = {
      name: user.displayName,
      email: user.email,
      role: "user",
    };
    const docRef = doc(db, "users", user.email);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      await setDoc(docRef, userObj);
    }

    const userDocRef = doc(db, "users", userCredential.user.email);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const isAdmin = userData.role === "admin";

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          ...userCredential.user,
          isAdmin,
        })
      );

      if (isAdmin) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/ecoforum";
      }
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    const userObj = {
      name: user.displayName,
      email: user.email,
      role: "user",
    };

    const docRef = doc(db, "users", user.email);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      await setDoc(docRef, userObj);
    }

    const userDocRef = doc(db, "users", user.email);
    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const isAdmin = userData.role === "admin";

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          ...user,
          isAdmin,
        })
      );

      if (isAdmin) {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/ecoforum";
      }
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  }
};

export const signOutForum = () => {
  signOut(auth)
    .then(() => {
      console.log("Signed out successfully");
    })
    .catch((error) => {});
};

export const checkAdminRole = async () => {
  try {
    const user = auth.currentUser;

    if (user) {
      const userDocRef = doc(db, "users", user.email);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const isAdmin = userData.role === "admin";

        return isAdmin;
      }
    }
  } catch (error) {
    console.log("Error retrieving user document:", error);
  }

  return false;
};

const trackLoginUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      const userObj = {
        email: user.email,
        uid: user.uid,
      };
      localStorage.setItem("currentUser", JSON.stringify(userObj));
    } else {
      localStorage.removeItem("currentUser");
    }
  });
};
trackLoginUser();

export const addForum = (from, title, tags, desc, file) => {
  const addForum = from
  const colRef = collection(db, 'Forums')

  addDoc(colRef, {
    forumName: title,
    tags: tags,
    forumDesc: desc,
    forumImg: "",
    forumBackImg: "",
    forumId: "",
    createdAt: serverTimestamp()
  })
  .then((snapshot) => {

        const storageRef = ref(storage, `forums/${snapshot.id}/background`);
        const storagRef = ref(storage, `forums/${snapshot.id}/profilePic`);

        uploadBytes(storageRef, file[0]).then((snap) => {

          uploadBytes(storagRef, file[1]).then((snap) => {

            getDownloadURL(storageRef)
              .then((url) => {
                

                getDownloadURL(storagRef)
                  .then((ur) => {
                  
                    updateDoc(doc(db, 'Forums', snapshot.id), {
                      forumImg: url,
                      forumId: snapshot.id,
                      forumBackImg: ur
                    }).then(()=>{
                      addForum.reset()
                      localStorage.setItem("lastForum", snapshot.id)
                      Navigate("/ecoforum/forum")
                    })

                  })
              })
          });
        });
  })
  .catch((err) => {
    console.log(err)
  })
  
}

export const profileDb = () => {
  let user = localStorage.getItem("lastUser")
  let q = query(collection(db, "users"), where("uid", "==", `${user}`))
 
  getDocs(q)
    .then((doc) => {
        let data = doc.docs
        let array = []

        data.forEach((elem) =>{
          let handData = elem.data()
          array.push(handData)
          localStorage.setItem("lastProfile", JSON.stringify(array))
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const ForumDb = () => {
  let forum = localStorage.getItem("lastForum")

  getDoc(doc(db, "Forums", forum)).then((docs) => {
    localStorage.setItem("lastForumObj", JSON.stringify(docs.data()))
  })
}

export const postManager = () =>{
  let array = []
  let id = localStorage.getItem("lastForum")

  getDocs(query(collection(db, "Forums", id, "Post"), orderBy('createdAt', 'asc')))
    .then((docs) => {
      docs.forEach((doc) => {
        array.push(doc.data())
        localStorage.setItem("array",JSON.stringify(array))
      })
    })


     
}

export const postManagerPf = () =>{
  let array = []
  let id = localStorage.getItem("lastForum")
  let user = localStorage.getItem("lastUser")
  let q = collection(db, "Forums", id, "Post")

  getDocs(query(q, where("authorID", "==", `${user}`)))
    .then((docs) => {
      // console.log(docs)
      docs.forEach((doc) => {

        array.push(doc.data())
        localStorage.setItem("array",JSON.stringify(array))

      })
    })


     
}

export const newMensage = (from, text) => {
  let id = localStorage.getItem("lastForum")
  let user = JSON.parse(localStorage.getItem("currentUser"))
  let Forum = from
  let ref = doc(db, 'Forums', `${id}`)

  getDoc(doc(db, "users", user.email))
  .then((docs) => {
    let data = docs.data()

    addDoc(collection(ref, 'Post'), 
  {
    authorID: data.uid,
    author: data.name,
    createdAt: serverTimestamp(),
    img: data.img,
    postID: " ",
    text: text
  })
  .then((docRef) => {
    updateDoc(doc(db, "Forums", id, "Post", docRef.id), {
      postID: docRef.id,
    }).then(()=>{
      Forum.reset()
    })
  })
  })
}

export const newPhoto = (from, file) => {
  const fileForum = from
  let user = JSON.parse(localStorage.getItem("currentUser"))
  const storageRef = ref(storage, `users/${user.uid}/background`);
  const storagRef = ref(storage, `users/${user.uid}/profilePic`);

  uploadBytes(storageRef, file[0]).then((snap) => {

    uploadBytes(storagRef, file[1]).then((snap) => {
      getDownloadURL(storageRef)
              .then((url) => {
                

                getDownloadURL(storagRef)
                  .then((ur) => {
                  
                    updateDoc(doc(db, 'users', user.uid), {
                      img: url,
                      BackImg: ur
                    }).then(()=>{
                      fileForum.reset()
                      const userr = {
                        name: user.name,
                        email: user.email,
                        role: "user",
                        img: url,
                        BackImg: ur,
                        favPost: [],
                        uid: user.uid,
                      };
                    
                      localStorage.setItem("currentUser", JSON.stringify(userr));
                      Navigate("/ecoforum/forum")
                    })

                  })
              })
    })
  })
}

export const forums = () =>{
  let array = []
  getDocs(query(collection(db, "Forums"), orderBy('createdAt', 'asc'))).then((docs) => {
    docs.docs.forEach((doc) => {
      array.push(doc.data())
      localStorage.setItem("array",JSON.stringify(array))
  })
  })
}

export const saved = () =>{
  let id = localStorage.getItem("id")
  let user = JSON.parse(localStorage.getItem("currentUser"))
  const ref = doc(db, "users", user.email)
  let array = []

  getDoc(ref).then((docs)=>{
     let data = docs.data()
     data = data.favPost

    if(id.length == 0){

    } else {
      if(data.includes(id)){

      }else{
        array.push(id)

        data.forEach((element) =>{
        array.push(element)
        })

        setTimeout(() => {
          updateDoc(ref, {
            favPost: array
          })
        }, 300);
      }
    }
  })
}

export const searchDB = (e) =>{
  let array = []
  getDocs(query(collection(db, "Forums"), where('forumName', '==', `${e}`))).then((docs) => {
    docs.docs.forEach((doc) => {
      array.push(doc.data())
      localStorage.setItem("arraySearch",JSON.stringify(array))
  })
  })
}

export const saveDB = () => {
  let user = JSON.parse(localStorage.getItem("currentUser"))
  let array = []

  getDoc(doc(db, "users", user.email)).then((docs) => {
    let data = docs.data()
    data = data.favPost


    getDocs(collection(db, "Forums")).then((elm) => {
      let dat = elm.docs
      dat.forEach((el) => {
        data.forEach((elem) => {
            getDoc(doc(db, "Forums", el.id, "Post", elem)).then((element)=>{
              array.push(element.data())
              localStorage.setItem("saveItems", JSON.stringify(array))
            })
          })
      })
    })
    
  })
}
