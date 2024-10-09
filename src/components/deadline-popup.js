import React from "react";
import { formatDistance } from "date-fns";
import { cs } from "date-fns/locale";
import { DEADLINE } from "../constants";

const Popup = () => {
    const now = new Date();

    const getPopupMessage = () => {
        if (now >= DEADLINE) {
            return "Přihlašování do soutěže je ukončeno! Děkujeme všem za účast.";
        }

        const oneMonthBeforeDeadline = new Date(DEADLINE);
        oneMonthBeforeDeadline.setMonth(DEADLINE.getMonth() - 1);

        if (now >= oneMonthBeforeDeadline) {
            return `Přihlašování do soutěže skončí už ${formatDistance(DEADLINE, now, {
                addSuffix: true,
                locale: cs,
            })}!`;
        }
        const longDateString = new Intl.DateTimeFormat('cs-CZ', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(DEADLINE);
        return `Přihlašování do soutěže skončí už ${longDateString}.`;
    };

    return <div className="popup">{getPopupMessage()}</div>;
};

export default Popup;
