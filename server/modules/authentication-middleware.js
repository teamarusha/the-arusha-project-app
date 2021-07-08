const rejectUnauthenticated = (req, res, next) => {
  // check if logged in
  if (req.isAuthenticated()) {
    // They were authenticated! User may do the next thing
    // Note! They may not be Authorized to do all things
    next();
  } else {
    // failure best handled on the server. do redirect here.
    res.sendStatus(403);
  }
};

const adminAuth = (req, res, next) => {

  if (req.user.is_admin == true) {
    next();
  } else {
    res.sendStatus(403)
    return res.send('You do not have administrator permissions, please reach out to KOPI if you need access')
  }
}; //END adminAuth




module.exports = { rejectUnauthenticated, adminAuth };
