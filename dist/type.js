"use strict";
const checkAccess = (user) => {
    switch (user.accessLevel) {
        case "User":
            console.log("Only read documents");
            break;
        case "Super":
            console.log("Only read and write documents");
            break;
        case "Admin":
            console.log("Read, write and delete documents");
            break;
        default:
            console.log("Unkown access lever");
            user.accessLevel;
    }
};
const SuperUser = {
    id: 1,
    name: "John",
    accessLevel: "Super",
    superPower: "Very special"
};
checkAccess(SuperUser);
