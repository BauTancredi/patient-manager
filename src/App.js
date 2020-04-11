import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, setAppointments] = useState(initialAppointments);

  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments]);

  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setAppointments(newAppointments);
  };

  const title =
    appointments.length === 0 ? "No appointments" : " Manage your appointments";

  return (
    <Fragment>
      <h1>Patient Manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment
                appointment={appointment}
                key={appointment.id}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
