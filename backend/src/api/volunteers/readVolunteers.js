const volunteerManager = require('../VolunteerManager');

function readVolunteers(request, response) {

  Promise.resolve()
    .then(() => {
      return volunteerManager.getVolunteers();
    })
    .then(volunteers => {
      response.status(200);
      response.json({ volunteers });
    })
    .catch(({ code, message }) => {
      response.status(code === 'no-content' ? 204 : 500);
      response.json({ error: message });
    });
}

module.exports = readVolunteers;