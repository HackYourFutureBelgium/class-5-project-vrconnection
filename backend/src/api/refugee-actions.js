import Refugee from '../models/refugee';

const getRefugees = async (req, res) => {
  try {
    const refugees = await Refugee.find();
    res.json(refugees)
  } catch (error) {
    res.status(400).json({message:error.message})
  }
};

const getRefugee = async (req, res) => {
  try {
    const refugee = await Refugee.findById(req.params.id);
    if (refugee === null) {
      return res.status(400).json({ message: 'Can not find refugee' })
    }
    res.json(refugee)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
  
};

const createRefugee = async (req, res) => {
  const refugee = new Refugee({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    age: req.body.age,
    email: req.body.email,
    help:req.body.help,
    phoneNumber: req.body.phoneNumber,
    country: req.body.country,
    language: req.body.language,
    username: req.body.username,
    password: req.body.password
  })

  try {
    const newRefugee = await refugee.save();
    res.status(201).json(newRefugee);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};

const updateRefugee = async (req, res) => {
  try {
    const refugee = await Refugee.findById(req.params.id);
    
    if (refugee === null) return res.status(400).json({ message: 'Can not update refugee' });
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
    if (req.body.address !== null) {
      refugee.address = req.body.address;
    }

    const updatedRefugee = await refugee.save();
    res.json(updatedRefugee);
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}; 

const deleteRefuge = async (req, res) => {
  try {
    const refugee = await Refugee.findById(req.params.id);
    if (refugee === null) {
      return res.status(400).json({ message: 'There is no such refugee' })
    }
    await refugee.remove();
    res.json({ message: `refugee deleted` })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
  
};

module.exports = { getRefugees, getRefugee, createRefugee, updateRefugee, deleteRefuge };
