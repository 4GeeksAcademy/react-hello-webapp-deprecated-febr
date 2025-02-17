import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import Card from "../component/princialCard.jsx";

const AllContact = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="w-75 mx-auto">
      <div className="d-flex justify-content-end">
        <Link to="/create">
          <button className="btn btn-success button">Add New contact</button>
        </Link>
      </div>
      <ul className="list-group mt-3">
        {store.listContacts &&
          store.listContacts.length > 0 &&
          store.listContacts.map((contact, index) => {
            return <Card contact={contact} key={index} />;
          })}
      </ul>
    </div>
  );
};
export default AllContact;
