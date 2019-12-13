const volunteerManager = require('../volunteerManager');
const validator = require('email-validator');

function createVolunteer(request, response) {

  Promise.resolve()
    .then(() => {
      const { email, name, help, age } = request.body;

      if (!email) {
        const error = new Error('email is required to create volunteer');
        error.code = 'bad-request';
        throw error;
      }

      if (!email || !validator.validate(email)) {
        const error = new Error('email is in wrong format');
        error.code = 'bad-request';
        throw error;
      }

      if (!name) {
        const error = new Error('name is required to create volunteer');
        error.code = 'bad-request';
        throw error;
      }

      if (!help) {
        const error = new Error('help  is required to create volunteer or it not valid');
        error.code = 'bad-request';
        throw error;
      }

      if (help.length < 1) {
        const error = new Error('help  is not valid');
        error.code = 'bad-request';
        throw error;
      }

      if (!age) {
        const error = new Error('Age is to create volunteer');
        error.code = 'bad-request';
        throw error;
      }

      if (age < 18) {
        const error = new Error('Age of volunteer must be  greater than 18');
        error.code = 'bad-request';
        throw error;
      }

      return volunteerManager.create(request.body);
    })
    .then(volunteer => {
      response.status(201);
      response.json({ volunteer });
    })
    .catch(({ code, message }) => {
      response.status(code === 'bad-request' ? 400 : code === 'conflict' ? 409 : 500);
      response.json({ error: message });
    });

}

module.exports = createVolunteer;