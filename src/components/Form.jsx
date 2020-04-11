import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";

const Form = () => {
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, hour, symptoms } = appointment;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    appointment.id = uuid();
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>

      {error ? <p className="alerta-error">All fields are mandatory.</p> : null}

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
          onChange={handleChange}
          value={pet}
        />
        <label htmlFor="">Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
          onChange={handleChange}
          value={owner}
        />
        <label htmlFor="">Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label htmlFor="">Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={handleChange}
          value={hour}
        />
        <label htmlFor="">Symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handleChange}
          value={symptoms}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
