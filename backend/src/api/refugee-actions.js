import Refugee from '../models/refugee';

const getRefugees = async (req, res) => {
  try {
    const refugees = await Refugee.find();
    res.json(refugees)
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
};

const getRefugee = async (req, res) => {
  try {
    const refugee = await Refugee.findById(req.params.id);
    if (refugee === null) {
      return res.status(400).json({
        message: 'Can not find refugee'
      })
    }
    res.json(refugee)
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }

};

const createRefugee = async (req, res) => {
  const refugee = new Refugee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    age: req.body.age,
    email: req.body.email,
    help: req.body.help,
    phoneNumber: req.body.phoneNumber,
    country: req.body.country,
    language: req.body.language,
    description: req.body.description,
  })

  try {
    const newRefugee = await refugee.save();
    res.status(201).json(newRefugee);
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }
};

const updateRefugee = async (req, res) => {
  try {
    const refugee = await Refugee.findById(req.params.id);
    console.log(refugee)

    if (refugee === null) return res.status(401).json({
      message: 'Can not update refugee'
    });
    if (req.body.fullName !== null) {
      refugee.fullName = req.body.fullName;
    }
    if (req.body.age !== null) {
      refugee.age = req.body.age;
    }
    if (req.body.help !== null) {
      refugee.help = req.body.help;
    }
    if (req.body.gender !== null) {
      refugee.gender = req.body.gender;
    }
    if (req.body.phoneNumber !== null) {
      refugee.phoneNumber = req.body.phoneNumber;
    }
    if (req.body.helpStatus !== null) {
      refugee.helpStatus = req.body.helpStatus;
    }
    if (req.body.helpVolunteer !== null) {
      refugee.helpVolunteer = req.body.helpVolunteer;
    }
    if (req.body.description !== null) {
      refugee.description = req.body.description;
    }
    const updatedRefugee = await refugee.save();
    console.log(updateRefugee);
    res.json(updatedRefugee);
  } catch (error) {
    console.log(error)
    res.status(403).json({
      message: error.message
    })
  }
};

const deleteRefuge = async (req, res) => {
  try {
    const refugee = await Refugee.findById(req.params.id);
    if (refugee === null) {
      return res.status(401).json({
        message: 'There is no such refugee'
      })
    }
    await refugee.remove();
    res.json({
      message: `refugee deleted`
    })
  } catch (error) {
    res.status(400).json({
      message: error.message
    })
  }

};

module.exports = {
  getRefugees,
  getRefugee,
  createRefugee,
  updateRefugee,
  deleteRefuge
};