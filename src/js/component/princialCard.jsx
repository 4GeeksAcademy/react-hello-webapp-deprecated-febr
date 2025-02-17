import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../img/1.jpg";
import "../img/2.jpg";
import "../img/3.jpg";
import "../img/4.jpg";
import "../img/5.jpg";
import "../img/6.jpg";
import "../img/7.jpg";
import "../img/8.jpg";
import "../img/9.jpg";
import "../img/10.jpg";
import "../img/11.jpg";
import "../img/12.jpg";
import "../img/13.jpg";
import "../img/14.jpg";
import "../img/15.jpg";
import "../img/16.jpg";
import "../img/17.jpg";
import "../img/18.jpg";
import "../img/19.jpg";
import "../img/20.jpg";

const Card = ({ contact }) => {
  const { store, actions } = useContext(Context);

  const eliminarContacto = () => {
    console.log(contact);
    actions.deleteContact(contact.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-center all">
      <div className="d-flex align-items-center w-75">
        <div className="col-md-3 d-flex justify-content-center">
          <img
            className="rounded-circle w-100"
            src="https://thispersondoesnotexist.com/?random= +
            Math.floor(Math.random() * 100)"
            //https://thispersondoesnotexist.com/?random=
            //https://picsum.photos/500?random=

            alt="Contact"
          />
        </div>
        <div className="col-md-6">
          <h5 className="card-title mb-1">{contact.name}</h5>
          <p className="card-text mb-1">{contact.address}</p>
          <p className="card-text mb-1">{contact.phone}</p>
          <p className="card-text mb-1">{contact.email}</p>
        </div>
        <div className="col-md-3 d-flex justify-content-end">
          <Link to={"/edit/" + contact.id} className="btn btn-link p-0 me-3">
            <h1>&#128221;</h1>
          </Link>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target={"#delete-contact-" + contact.id}
          >
            <h1 className="h1">&#128465;</h1>
          </button>

          <div
            className="modal fade"
            id={"delete-contact-" + contact.id}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Are you sure?
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  If you delete this thing the etire universe will go down!
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Oh no!
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={eliminarContacto}
                  >
                    Yes baby!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Card;
