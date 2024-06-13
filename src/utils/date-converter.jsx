import { useState } from "react";

export const useDateConverter = () => {
    const [nextRace, setNextRace] = useState("");
    // parse date string to Date object
    const parseDate = dateString => {
        const [year, month, day] = dateString.split("-");
        return new Date(year, month - 1, day);
    };

    // find the next upcoming date
    const findNextDate = array => {
        const currentDate = new Date();
        const nextDateArray = array.find(item => {
            const date = parseDate(item.date);
            return date > currentDate;
        });
        setNextRace(nextDateArray);
    };

    return {
        findNextDate,
        nextRace
    }
}