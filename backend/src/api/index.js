import { Router } from 'express';
import { version } from '../../package.json';

// import  CRUD  volunteers
const VOLUNTEERS = 'volunteers';
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

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version });
  });

  return api;
}
