import { useFetch } from "../../../utils/firebaseFunctions";

const ContactList = () => {
  const { isLoading, contactList } = useFetch();

  return (
    <div>
      {isLoading
        ? "Loading..."
        : contactList?.lenght === 0
        ? "Empty Contact List"
        : contactList?.map((contact, i) => (
            <div key={i}>
              <div>{contact.username}</div>
              <div>{contact.surname}</div>
              <div>{contact.number}</div>
              <div>{contact.gender}</div>
            </div>
          ))}
    </div>
  );
};

export default ContactList;
