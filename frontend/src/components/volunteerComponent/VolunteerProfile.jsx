/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import '../../assets/VolunteerProfile.css';

function VolunteerProfile() {
  const { registeredVolunteer } = useContext(AuthContext);

  let [name, username, age, gender, city, email, help, registeredDate] = '';

  if (registeredVolunteer !== undefined) {
    name = registeredVolunteer.name;
    username = registeredVolunteer.username;
    age = registeredVolunteer.age;
    gender = registeredVolunteer.gender;
    city = registeredVolunteer.city;
    email = registeredVolunteer.email;
    help = registeredVolunteer.help;
    registeredDate = registeredVolunteer.registeredDate;
  }

  return (
    <div className="Container my-3 py-6 text-center">
      <div className="row mb-5">
        <div className="col">
          <h1>VRconnection</h1>
          <div className="p at-3">Thank You being a part of our community</div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-3 col-md-6">
          <div className="VolunteerProfileCard">
            <div className="card-body">
              <img
                src="https://thumbs.dreamstime.com/b/avatar-man-shirt-avatar-face-single-icon-cartoon-style-vector-symbol-stock-illustration-web-90353034.jpg"
                alt="profile"
                className="img-fluid rounded-circle w-50 mb-3"
              />
              <h3>{name}</h3>
              <h5>Address</h5>
              <div className="ProfileDetail">
                <div className="row">
                  <div className="col-4"> Username </div>
                  <div className="col-4 ">{username}</div>
                </div>
                <div className="row ">
                  <div className="col-4  "> Age </div>
                  <div className="col-4  ">{age}</div>
                </div>
                <div className="row  ">
                  <div className="col-4  "> Gender </div>
                  <div className="col-4  ">{gender}</div>
                </div>
                <div className="row ">
                  <div className="col-4  "> City </div>
                  <div className="col-4  ">{city}</div>
                </div>
                <div className="row ">
                  <div className="col-4  "> Email </div>
                  <div className="col-4 ">{email}</div>
                </div>
                <div className="row ">
                  <div className="col-4  "> Volunteering </div>
                  <div className="col-4  ">{help}</div>
                </div>
                <div className="row  ">
                  <div className="col-4 "> Registered Date </div>
                  <div className="col-4 t ">{registeredDate}</div>
                </div>
              </div>
              <p>
                <a href="/volunteers/edit" className="btn btn-primary a-btn-slide-text ">
                  <span className="glyphicon glyphicon-edit" aria-hidden="true" />
                  <span>
                    <strong>Edit Profile</strong>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerProfile;
