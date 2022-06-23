const { Registration } = require("../models/registration.model");

const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.findAll();

    res.status(200).json({
      status: "success",
      registrations,
    });
  } catch (err) {
    console.log(err);
  }
};

const createRegistration = async (req, res) => {
  try {
    const date = new Date();
    console.log(date);
    const newRegistration = await Registration.create({
      entranceTime: date,
      status: "working",
    });

    res.status(201).json({
      status: "success",
      newRegistration,
    });
  } catch (err) {
    console.log(err);
  }
};

const getRegistrationById = async (req, res) => {
  try {
    const { id } = req.params;
    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }

    res.status(200).json({
      status: "success",
      registration,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const date = new Date();
    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }
    await registration.update({ exitTime: date, status: "out" });

    res.status(204).json({ status: "success" });
  } catch (err) {
    console.log(err);
  }
};

const cancelRegistration = async (req, res) => {
  try {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration) {
      return res.status(404).json({
        status: "error",
        message: "Registration not found",
      });
    }
    await registration.update({ status: "cancelled" });

    res.status(204).json({ status: "success" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllRegistrations,
  createRegistration,
  getRegistrationById,
  updateRegistration,
  cancelRegistration,
};
