// @desc        schickt die Loginseite an den client
// @route       /force
// @access      public
exports.callLoginPage = (req, res, next) => {
    res
        .status(200)
        .send('Welcome to Force')
}

exports.sendAuthentication = (req, res, next) => {
    res
        .status(200)
        .send('Wird angemeldet')
}