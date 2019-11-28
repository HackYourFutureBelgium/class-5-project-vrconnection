const volunteerManager = require('../VolunteerManager');

function readUser(request, response) {

  Promise.resolve()
    .then(() => {
      const id = request.params.id;
      return volunteerManager.get(id);
    })
    .then(user => {
      response.status(200);
      response.json({ user });
    })
    .catch(({ code, message }) => {
      response.status(code === 'not-found' ? 404 : 500);
      response.json({ error: message });
    });
}

module.exports = readUser;