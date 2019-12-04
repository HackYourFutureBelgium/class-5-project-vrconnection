import { Router } from 'express';
const
  { getRefugees,
    getRefugee,
    createRefugee,
    updateRefugee,
    deleteRefuge
  } = require('./refugee-actions');

const REFUGEE = `refugee`

// import  CRUD  volunteers
const VOLUNTEERS = 'volunteer';
const {
  readVolunteer,
  createVolunteer,
  readVolunteers,
  updateVolunteer,
  deleteVolunteer,
} = require('./volunteers');


export default ({ config, db }) => {
  const api = Router();


  // API - Volunteer
  api.post(`/${VOLUNTEERS}`, createVolunteer);
  api.get(`/${VOLUNTEERS}/:id`, readVolunteer);
  api.get(`/${VOLUNTEERS}/`, readVolunteers);
  api.patch(`/${VOLUNTEERS}/:id`, updateVolunteer);
  api.delete(`/${VOLUNTEERS}/:id`, deleteVolunteer)


  // Refugee-CRUD actions
  api.get(`/${REFUGEE}`, getRefugees);
  api.get(`/${REFUGEE}/:id`, getRefugee);
  api.post(`/${REFUGEE}`, createRefugee);
  api.patch(`/${REFUGEE}/:id`, updateRefugee)
  api.delete(`/${REFUGEE}/:id`, deleteRefuge);

  // perhaps expose some API metadata at the root
  api.get('/hello', (req, res) => {
    res.json({ greeting: 'world' });
  });

  api.get('/', (req, res) => {
    res.json({ version });
  });


  return api;
}
