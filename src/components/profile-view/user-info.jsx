import React from "react";

export function UserView (username, email, birthday) {
    return (
        <>
        <h4>Your info:</h4>
            <p>User: {username}</p>
            <p>E-mail: {email}</p>
            <p>Birthday: {birthday}</p>
        </>
    );
}