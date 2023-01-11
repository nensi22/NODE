
const tokenobj = require("../Token/token");
const jwtToken = require("jsonwebtoken");

const middleware = (req, res, next) => {
    if (tokenobj.token == req.headers.token)
    {
        jwtToken.verify(tokenobj.token, 'skill', function(err, decoded) {
            if(err)
            {
                res.json({token:"expire"});
            }
            else
            {
                next();
                res.json({token:"valid"});
            }
          });
          
    }
    else {
        res.json({ msg: "fail in module1.....!" })
    }
}


module.exports = middleware;