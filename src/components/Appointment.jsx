import React from "react";

const Appointment = ({ appointment, deleteAppointment }) => {
  const { pet, owner, date, hour, symptoms, id } = appointment;
  return (
    <div className="cita">
      <p>
        Pet: <span>{pet}</span>
      </p>
      <p>
        Owner: <span>{owner}</span>
      </p>
      <p>
        Date: <span>{date}</span>
      </p>
      <p>
        Hour: <span>{hour}</span>
      </p>
      <p>
        Symptoms: <span>{symptoms}</span>
      </p>

      <button
        className="button eliminar u-full-width"
        onClick={() => {
          deleteAppointment(id);
        }}
      >
        Delete &times;
      </button>
    </div>
  );
};

export default Appointment;
