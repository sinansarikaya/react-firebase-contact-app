import {
  child,
  get,
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useEffect, useState } from "react";
import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/ToastNotify";
import { db } from "./firebase";

// Create a new contact database
export const addNewContact = (contacts) => {
  try {
    const { name, surname, tel, gender } = contacts;
    const contactRef = ref(db, "contacts/");
    const newContactRef = push(contactRef);

    set(newContactRef, {
      name: name,
      surname: surname,
      tel: tel,
      gender: gender,
    });
    toastSuccessNotify("New contact added successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

// Read all contacts from database
export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    const contactRef = ref(db, "contacts/");

    onValue(contactRef, (snapshot) => {
      const data = snapshot.val();
      const contactArray = [];

      for (let id in data) {
        contactArray.push({ id, ...data[id] });
      }
      setContactList(contactArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

// Read one contact from database
export const readOneData = (userId, setContacts) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `contacts/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setContacts(snapshot.val());
      } else {
        setContacts({ name: "", surname: "", tel: "", gender: "" });
      }
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
};

// Update contact
export const updateContact = (userId, contacts) => {
  const { name, surname, tel, gender } = contacts;

  set(ref(db, "contacts/" + userId), {
    name: name,
    surname: surname,
    tel: tel,
    gender: gender,
  })
    .then(() => {
      toastSuccessNotify("Contact updated successfully!");
    })
    .catch((error) => {
      toastErrorNotify(error.message);
    });
};

// Delete contact database
export const deleteContact = (id) => {
  remove(ref(db, "contacts/" + id));
  toastWarnNotify("Deleted Successfully");
};
