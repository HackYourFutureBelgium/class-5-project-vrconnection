const volunteerManager = require('../volunteerManager');
const validator = require('email-validator');

function updateVolunteer(request, response) {

  Promise.resolve()
    .then(() => {
      const id = request.params.id;
      const { name, email, help, city, age, gender } = request.body;

      if (name !== undefined && typeof name !== 'string') {
        const error = new Error('name  is not valid');
        error.code = 'bad-request';
        throw error;
      }

      if (email !== undefined && !validator.validate(email)) {
        const error = new Error('email is in wrong format');
        error.code = 'bad-request';
        throw error;
      }

      if (help !== undefined && typeof help !== 'object') {
        const error = new Error('help  is not valid');
        error.code = 'bad-request';
        throw error;
      }

      if (city !== undefined && typeof city !== 'string') {
        const error = new Error('city  is not valid');
        error.code = 'bad-request';
        throw error;
      }

      if (age !== undefined && age < 18) {
        const error = new Error('Age of volunteer must be  greater than 18');
        error.code = 'bad-request';
        throw error;
      }

      const validGender = ['male', 'female', 'other'].find(x => gender === x)
      if (gender !== undefined && !validGender) {
        const error = new Error('Gender of volunteer must be  male, female or other');
        error.code = 'bad-request';
        throw error;
      }

      return volunteerManager.update(id, request.body);
    })
    .then(volunteer => {
      response.status(200);
      response.json({ volunteer });
    })
    .catch(({ message, code }) => {
      response.status(code === 'not-found' ? 404 : code === 'bad-request' ? 400 : 500);
      response.json({ error: message });
    });

}

module.exports = updateVolunteer;