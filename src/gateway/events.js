const baseUrl = "https://633805ab5327df4c43dbafc2.mockapi.io/event";

export const fetchEventsList = () => {
    return fetch(baseUrl).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load tasks");
        } else return response.json();
    });
};

export const createNewEvent = (taskData) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(taskData),
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to create event");
        }
    });
};

export const deleteEvent = (eventId) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((response) => {
        if (!response.ok) {
            throw new Error("Failed to delete event");
        }
    });
};