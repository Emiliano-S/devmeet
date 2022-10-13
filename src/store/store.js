import google from "../components/assets/calendarImages/google.png";
import meta from "../components/assets/calendarImages/meta.png";

import { createStore } from "redux";

const store = createStore(() => ({
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
}));

export default store;
