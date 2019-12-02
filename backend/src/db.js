const mongoose = require('mongoose');
const uri = `mongodb+srv://vrconnection:KSg2WnnTjvpb7JgT@rvconnections0-w205o.mongodb.net/vrconnection_db`;

export default callback => {
  // connect to a database
  const db = mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('Db Connected'))
    .catch(err => console.log(err));
  callback();
};
