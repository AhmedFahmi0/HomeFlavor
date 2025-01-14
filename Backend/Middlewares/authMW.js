let jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  var token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(400).send("Not Login");

  var decodePayload = jwt.verify(token, "token");
  if (decodePayload.role === "seller") {
    next();
  } else {
    return res.send("Access Denied...");
  }
};
