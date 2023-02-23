const sender = require('../config/email-config');

// SMTP --> simple mail transfer protocol
const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        })
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    sendBasicEmail
};