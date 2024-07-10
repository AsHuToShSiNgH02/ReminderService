const sender = require('../config/emailConfig');

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailContent) => {

    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailContent
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports ={
    sendBasicEmail
};