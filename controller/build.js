const Build = require("../model/Build");

const getAllBuilds = async (req, res) => {
  try {
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const builds = await Build.find({ user_id: userId }).populate(
      "products.product"
    );
    if (!builds || builds.length === 0) {
      return res.status(404).json({ message: "No builds found" });
    }
    return res.status(200).json({ builds });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getBuildById = async (req, res) => {
  try {
    const build = await Build.findById(req.params.id);
    if (!build) {
      return res.status(404).json({ message: "Build not found" });
    }
    return res.status(200).json({ build });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const createBuild = async (req, res) => {
  try {
    const userId = req.session.userId;
    console.log(req.session.userId);

    if (!userId) {
      return res.status(401).json({ message: "Not logged in" });
    }

    const { build_name, products } = req.body;
    if (!build_name || !Array.isArray(products)) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const buildData = {
      ...req.body,
      user_id: userId,
    };

    const build = await Build.create(buildData);

    return res.status(201).json({ build });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", err: error.message });
  }
};

const deleteBuild = async (req, res) => {
  try {
    const build = await Build.findByIdAndDelete(req.params.id);
    if (!build) {
      return res.status(404).json({ message: "Build not found" });
    }
    return res.status(200).json({ message: "Build deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllBuilds, getBuildById, createBuild,deleteBuild };
