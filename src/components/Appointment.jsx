import React from "react";

const Appointment = ({ appointment }) => {
  const { pet, owner, date, hour, symptoms } = appointment;
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
    </div>
  );
};

export default Appointment;
