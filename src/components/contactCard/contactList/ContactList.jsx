import { deleteContact, useFetch } from "../../../utils/firebaseFunctions";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import "./ContactList.scss";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
  const { isLoading, contactList } = useFetch();
  // const [isEditActive, setIsEditActive] = useState(false);
  const navigate = useNavigate();

  // const editContact = (id) => {
  //   console.log(id);
  //   setIsEditActive(true);
  // };

  return (
    <>
      <div className="my-3 p-3 bg-body rounded shadow-sm">
        <h6 className="border-bottom pb-2 mb-0">Contact List</h6>

        {isLoading
          ? "Loading..."
          : contactList?.lenght === 0
          ? "Empty Contact List"
          : contactList?.map((contact, i) => (
              <div key={i} className="d-flex text-muted pt-3">
                {contact.gender === "male" ? (
                  <FcBusinessman
                    size={38}
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded-circle avatar"
                  />
                ) : (
                  <FcBusinesswoman
                    size={38}
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded-circle avatar"
                  />
                )}

                <div className="pb-3 mb-0 small lh-sm border-bottom w-100">
                  <div className="d-flex justify-content-between">
                    <strong className="text-gray-dark">
                      {contact.name} {contact.surname}
                    </strong>
                    <span>
                      <AiFillEdit
                        size={20}
                        className="me-3 icons"
                        onClick={() => navigate(`/add-contact/${contact.id}`)}
                      />

                      <AiFillDelete
                        onClick={() => deleteContact(contact.id)}
                        size={20}
                        className="me-3 icons"
                      />
                    </span>
                  </div>
                  <span className="d-block">{contact.tel}</span>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default ContactList;
