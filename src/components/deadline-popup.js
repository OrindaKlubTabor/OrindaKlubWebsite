import React from "react"
import { formatDistance } from "date-fns"
import cs from "date-fns/locale/cs"
import { DEADLINE } from "../constants"

const Popup = () => {
  const now = new Date()
  const nextFallYear = DEADLINE.getFullYear() + 1

  const getPopupMessage = () => {
    if (now >= DEADLINE) {
      return `Přihlašování do soutěže je ukončeno! Další ročník soutěže spustíme na podzim ${nextFallYear}.`
    }

    const oneMonthBeforeDeadline = new Date(DEADLINE)
    oneMonthBeforeDeadline.setMonth(DEADLINE.getMonth() - 1)

    if (now >= oneMonthBeforeDeadline) {
      return `Přihlašování do soutěže skončí už ${formatDistance(
        DEADLINE,
        now,
        {
          addSuffix: true,
          locale: cs,
        }
      )}!`
    }
    const longDateString = new Intl.DateTimeFormat("cs-CZ", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(DEADLINE)
    return `Přihlašování do soutěže skončí už ${longDateString}.`
  }

  return <div className="popup">{getPopupMessage()}</div>
}

export default Popup
