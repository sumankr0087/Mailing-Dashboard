const { getEmails, getEmailById } = require("../models/Email");

const getEmailList = (req, res) => {
  const emails = getEmails();
  res.status(200).json(emails);
};

const getEmailDetail = (req, res) => {
  const email = getEmailById(parseInt(req.params.id));
  if (!email) {
    return res.status(404).json({ message: "Email not found" });
  }
  res.status(200).json(email);
};

module.exports = { getEmailList, getEmailDetail };