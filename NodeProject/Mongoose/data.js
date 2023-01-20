const bcrypt = require("bcryptjs");

const data = {
    users: [
        {
            name: "skillqode",
            password: bcrypt.hashSync("hr1@skillqode.in", 8),
            isadmin: true,
            email: "hr@skillqode.in"
        },
        {
            name: "skillqode1",
            password: bcrypt.hashSync("hr1@skillqode.in", 8),
            isadmin: true,
            email: "hr1@skillqode.in",
        }
    ],
};

module.exports = data;