const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const PhoneNumber = mongoose.model('PhoneNumber', { phoneNumber: String });

module.exports = PhoneNumber;