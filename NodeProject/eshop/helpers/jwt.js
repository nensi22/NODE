const { expressjwt: jwt } = require("express-jwt");
const authJwt = () => {
    const secret = process.env.SECRET;
    // const api = process.env.API_URL;
    return jwt({
        secret: secret,
        algorithms: ["HS256"],
        // isRevoked: isRevoked,
    })
        .unless({ path: ["/user/login"] });

}   

module.exports = authJwt;


// const { expressjwt: jwt } = require("express-jwt");
// function express_jwt () {
//   const secret = process.env.SECRET;
//   return jwt({
//     secret: secret,
//     algorithms: ["HS256"],
//   }).unless({
//     path: [
//       { url: "/categories", methods: ["GET", "OPTIONS"] },
//       `/users/login`,
//       `/users/register`,
//     ],
//   });
// }

// module.exports = express_jwt;



