const Volunteer = require('../models/volunteer');
const ObjectId = require('mongoose').Types.ObjectId

class VolunteerManager {

  async create(body) {
    const { email, username } = body;
    // Validation of conflicts
    let volunteer = await this.findVolunteerEmail(email);
    if (volunteer) {
      const error = new Error('There is an volunteer with this email');
      error.code = 'conflict';
      throw error;
    }
    volunteer = await this.findVolunteerUsername(username);
    if (volunteer) {
      const error = new Error('There is an volunteer with this username');
      error.code = 'conflict';
      throw error;
    }
    // Create volunteer
    return this.addVolunteer(body)
  }

  async get(id) {
    const volunteer = await this.findVolunteerId(id);
    // Validation of conflicts
    if (!volunteer) {
      const error = new Error('Volunteer does not exist');
      error.code = 'not-found';
      throw error;
    }
    return volunteer;
  }

  async getVolunteers() {
    const volunteers = await this.findVolunteers();

    if (volunteers.length === 0) {
      const error = new Error(`Sorry!, We don't have volunteers yet.`);
      error.code = 'no-content';
      throw error;
    }

    return volunteers;
  }

  async update(id, body) {
    let volunteer = await this.get(id);
    const { username, name, email, help, age, gender, city } = body;

    // Validation of conflicts
    if (username !== undefined) {
      volunteer = await this.findVolunteerUsername(username);
      if (volunteer) {
        const error = new Error('The new username is being used by other volunteer');
        error.code = 'conflict';
        throw error;
      }
    }

    if (email !== undefined) {
      volunteer = await this.findVolunteerEmail(email);
      if (volunteer) {
        const error = new Error('The new email is being used by other volunteer');
        error.code = 'conflict';
        throw error;
      }
    }

    await this.updateVolunteer(id, username, name, email, help, age, gender, city);
    return this.get(id);
  }

  async delete(id) {
    await this.get(id);
    await this.deleteVolunteer(id);
  }

  //*********************************************************// 
  //              Methods using the DataBase
  //*********************************************************// 
  findVolunteerEmail(email) {
    return Volunteer.findOne({ email })
  }
  findVolunteerUsername(username) {
    return Volunteer.findOne({ username })
  }
  addVolunteer(body) {
    const newVolunteer = new Volunteer(body);
    return newVolunteer.save();
  }
  findVolunteerId(id) {
    return Volunteer.findOne({ _id: new ObjectId(id) })
  }
  findVolunteers() {
    return Volunteer.find();
  }
  async updateVolunteer(id, username, name, email, help, age, gender, city) {
    let volunteer = await this.get(id);
    let volunterNewData = {
      username: username === undefined ? volunteer.username : username,
      name: name === undefined ? volunteer.name : name,
      email: email === undefined ? volunteer.email : email,
      help: help === undefined ? volunteer.help : help,
      age: age === undefined ? volunteer.age : age,
      gender: gender === undefined ? volunteer.gender : gender,
      city: city === undefined ? volunteer.city : city
    }
    let query = { _id: id };

    return Volunteer.findByIdAndUpdate(query, volunterNewData);
  }

  deleteVolunteer(id) {
    return Volunteer.deleteOne({ _id: new ObjectId(id) })
  }
}

module.exports = new VolunteerManager();