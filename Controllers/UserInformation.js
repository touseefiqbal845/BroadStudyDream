const { UserInformation } = require("../modals/UserInformation");


exports.createUserInformation = async (req, res) => {
    const userInformation = new UserInformation(req.body);
    try {
      const newUserInformation = await userInformation.save();
      res.status(201).json(newUserInformation);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
exports.getAllUserInformation = async (req, res) => {
  try {
    const userInformation = await UserInformation.find();
    res.status(200).json(userInformation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserInformationById = async (req, res, next) => {
  let userInformation;
  try {
    userInformation = await UserInformation.findById(req.params.id);
    if (userInformation == null) {
      return res.status(404).json({ message: 'Cannot find user information' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.userInformation = userInformation;
  next();
};



exports.updateUserInformation = async (req, res) => {
  if (req.body.complete_userInfo != null) {
    res.userInformation.complete_userInfo = req.body.complete_userInfo;
  }
  try {
    const updatedUserInformation = await res.userInformation.save();
    res.json(updatedUserInformation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUserInformation = async (req, res) => {
  try {
    await res.userInformation.remove();
    res.json({ message: 'Deleted User Information' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
