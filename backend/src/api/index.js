import { Router } from 'express';
const
  { getRefugees,
    getRefugee,
    createRefugee,
    updateRefugee,
    deleteRefuge
  } = require('./refugee-actions');

const REFUGEE = `refugee`

export default ({ config, db }) => {
  const api = Router();

  // Refugee-CRUD actions
  api.get(`/${REFUGEE}`, getRefugees);
  api.get(`/${REFUGEE}/:id`, getRefugee);
  api.post(`/${REFUGEE}`, createRefugee );
  api.patch(`/${REFUGEE}/:id`, updateRefugee)
  api.delete(`/${REFUGEE}/:id`, deleteRefuge);

  return api;
}
