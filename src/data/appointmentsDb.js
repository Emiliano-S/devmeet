import google from '../components/assets/calendarImages/google.png';
import meta from '../components/assets/calendarImages/meta.png';

import Andrea from '../components/assets/calendarImages/Andrea.jpeg';
import Vince from '../components/assets/calendarImages/Vince.jpg';
import Emiliano from '../components/assets/calendarImages/Emiliano.jpg';

const notificationsDb = [
    {
        id: 1,
        logo: Emiliano,
        name: "Emiliano Gabriele Scanga",
        appointment: "Lunedi 17 Ottobre - Ore 18:00",
        held: false,
        accepted: false,
        declined: false,
    },
    {
        id: 2,
        logo: Vince,
        name: "Vincenzo Insinna",
        appointment: "Mercoledì 16 Novembre - Ore 11:15",
        held: false,
        accepted: false,
        declined: false
    },
]
export default notificationsDb;