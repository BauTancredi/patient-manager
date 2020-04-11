import React, { Fragment, useState } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  const [appointments, setAppointments] = useState([]);

  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <Fragment>
      <h1>Patient Manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>Manage your appointments</h2>
            {appointments.map((appointment) => (
              <Appointment appointment={appointment} key={appointment.id} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
