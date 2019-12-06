const volunteerManager = require('../volunteerManager');

function readVolunteer(request, response) {

  Promise.resolve()
    .then(() => {
      const id = request.params.id;
      return volunteerManager.get(id);
    })
    .then(user => {
      response.status(200);
      response.json({ volunteer });
    })
    .catch(({ code, message }) => {
      response.status(code === 'not-found' ? 404 : 500);
      response.json({ error: message });
    });
}

module.exports = readVolunteer;