const Joi = require('joi');
const db = require('./connections');
 
// const schema = Joi.object().keys({
//     username: Joi.string().alphanum().required(),
//     subject: Joi.string().required(),
//     message: Joi.string().max(500).required(),
//     imageURL: Joi.string().uri({
//         scheme: [
//             /https?/
//         ]
//     })
// });
 
const messages = db.get('business');
 
function getAll() {
    return messages.find();
}
 
function create(message) {
    message.username = 'Anonymous';
    return messages.insert(message);
}
 
module.exports = {
    create,
    getAll
};