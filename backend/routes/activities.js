const router = require("express").Router();
let Activity = require("../model/activitylist.model.js");

router.get("/", async (req, res) => {
  try {
    const result = await Activity.find({});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/add", async (req, res) => {
  const activity = req.body.activity;
  try {
    const newActivity = new Activity({ activity });
    await newActivity.save();
    res.status(200).json("Activity added!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// get activity by id
router.get("/:id", async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    res.status(200).json(activity);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.id);
    res.status(200).json("Activity deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Activity.findByIdAndUpdate(
      id,
      {
        activity: req.body.activity,
      },
      { new: true }
    );
    res.status(200).json("Activity updated!");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
