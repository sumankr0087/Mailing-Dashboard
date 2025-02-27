const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../models/User");

const signUp = async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  if (findUserByEmail(email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = { email, password: hashedPassword };
  createUser(user);

  res.status(201).json({ message: "User created successfully" });
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = findUserByEmail(email);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Validate password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Generate JWT
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });
};

module.exports = { signUp, signIn };