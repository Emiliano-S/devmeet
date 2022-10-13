import { combineReducers } from "redux";
import google from "../../components/assets/calendarImages/google.png";
import meta from "../../components/assets/calendarImages/meta.png";

const ADD_APPOINTMENTS = "ADD_APPOINTMENTS";

export function addAppointment(appointment) {
  return {
    type: ADD_APPOINTMENTS,
    appointment,
  };
}

const defaultAppointments = [
  {
    first_card_loading: true,
    appointments: [
      {
        id: 1,
        logo: google,
        name: "Google",
        appointment: "Lunedi 22 Settembre - Ore 15:45",
        held: false,
        accepted: true,
        declined: false,
      },
    ],
    notifications: [
      {
        id: 1,
        logo: google,
        name: "Google",
        appointment: "Lunedi 22 Settembre - Ore 15:45",
        held: false,
        accepted: false,
        declined: false,
      },
      {
        id: 2,
        logo: meta,
        name: "Meta",
        appointment: "Mercoledì 12 Ottobre - Ore 11:15",
        held: false,
        accepted: false,
        declined: false,
      },
    ],
  },
];

function appointments(state = defaultAppointments, action) {
  switch (action.type) {
    case ADD_APPOINTMENTS:
      return [
        ...state,
        {
          logo: "",
          name: state.name,
          appointment: state.appointment,
          held: false,
          accepted: true,
          declined: false,
        },
      ];
    default:
      return state;
  }
}

const appointmentApp = combineReducers({
  appointments,
});

export default appointmentApp;
