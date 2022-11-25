import { onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
import { db } from "./firebase";

// Create a new contact database
export const addNewContact = (contacts) => {
  try {
    const { name, surname, tel, gender } = contacts;
    const contactRef = ref(db, "contacts/");
    const newContactRef = push(contactRef);

    set(newContactRef, {
      username: name,
      surname: surname,
      number: tel,
      gender: gender,
    });
    toastSuccessNotify("New contact added successfully!");
  } catch (error) {
    toastErrorNotify(error.message);
  }
};

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
