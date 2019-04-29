const express = require('express');

const app = express();

const PhoneNumber = require('./model');

app.get('/:fancy/:number?', async (req, res)=>{
    try {
        let number = Number(req.params.number);
        let count = await PhoneNumber.count({phoneNumber: number.toString()});

        if (req.params.fancy === 'yes' && count === 0) {

            if (isNaN(number) === false && (number >= 1111111111 && number <= 9999999999)) {

                const phoneToAdd = new PhoneNumber({phoneNumber: number.toString()});
                await phoneToAdd.save();

                res.status(200).send('fancy number ' + number)
            } else {
                res.status(400).send('A number between 1111111111 and 9999999999 should be provided in case of yes.')
            }
        } else if (req.params.fancy === 'no' || count !== 0) {
            do {
                number = Math.round(10000000000 * Math.random());
                count = await PhoneNumber.count({phoneNumber: number.toString()});
                // console.log('phone', count)
            } while (number < 1111111111 || count > 0);

            const phoneToAdd = new PhoneNumber({phoneNumber: number.toString()});
            await phoneToAdd.save();

            res.send('not fancy number ' + number)
        } else {
            res.send('The fancy param should either be yes or no.')
        }
    } catch(e){
        console.log(e)
    }
});

app.listen('3000',  () =>{
    console.log('listening to port 3000')
});