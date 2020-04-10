import React, { Fragment } from "react";

const Form = () => {
  return (
    <Fragment>
      <h2>Create appointment</h2>

      <form action="">
        <label htmlFor="">Pet Name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet Name"
        />
        <label htmlFor="">Owner Name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner Name"
        />
        <label htmlFor="">Date</label>
        <input type="date" name="date" className="u-full-width" />
        <label htmlFor="">Hour</label>
        <input type="time" name="hour" className="u-full-width" />
        <label htmlFor="">Symptoms</label>
        <textarea name="symptoms" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
