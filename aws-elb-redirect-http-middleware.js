module.exports = (req, res, next) => {
  /* AWS ELBs set the value of x-forwarded-proto header to the protocol
    used to make the request */
  let protocol = req.headers["x-forwarded-proto"];
  
  if (protocol === "http") {
    return res.redirect(`https://${req.hostname}${req.originalUrl}`);
  }
  
  return next();
}