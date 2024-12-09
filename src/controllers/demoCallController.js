const DemoCallModel = require("../models/demoCallModel");

exports.bookDemoCall = async (req, res, next) => {
  try {
    const { name, email, contact } = req.body;

    if (!name || !email || !contact) {
      return res.status(400).json({
        success: false,
        error: "All fields (name, email, contact) are required.",
      });
    }

    const newDoc = new DemoCallModel({ name, email, contact });

    await newDoc.save();

    return res.status(201).json({
      success: true,
      message: "Call added successfully.",
      data: newDoc,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        error: "Validation failed.",
        details: messages,
      });
    }

    return res.status(500).json({
      success: false,
      error: "Internal server error.",
      details: error.message,
    });
  }
};


exports.getDemoCall = async (req, res, next) => {
  try {

    const AllData = await DemoCallModel.find();

    res.status(200).json({
      success: true,
      DemoCalls:AllData
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Internal server error.",
      details: error.message,
    });
  }


}