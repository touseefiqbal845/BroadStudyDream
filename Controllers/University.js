const { University } = require("../modals/University");

exports.createUniversity = async (req, res) => {
  console.table(req.body);
  try {
    const university = new University(req.body);
    console.log({ university });

    await university.save();
    res
      .status(201)
      .json({ message: "University created successfully", data: university });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating university", error: error.message });
  }
};

exports.getUniversities = async (req, res) => {
  try {
    const { page = 1, limit = 10, name,course } = req.query;
    // const pipeline = [];
    // pipeline.push({ $unwind: "$universities" });

    let query = {};

    if (name) {
      query = {
          // $elemMatch: {
            name: name,
          // },
      };
      // {
      //   "universities.$:":1
      // }
    }
    // if (course) {
    //   query = {
    //     "universities.Courses": {
    //       $elemMatch: {
    //         name: course,
    //       },
    //     },
    //   };
    // }
    // if (course) {
    //   const coursesArray = course.split("&&").map((c) => c.trim());
    //   pipeline.push({
    //     $match: { "universities.Courses.name": { $in: coursesArray } },
    //   });
    // }

    // if (name) {
    //   pipeline.push({ $match: { "universities.name": name } });
    // }

    // const countPipeline = [...pipeline, { $count: "totalUniversities" }];
    // pipeline.push({ $skip: (parseInt(page) - 1) * parseInt(limit) });
    // pipeline.push({ $limit: parseInt(limit) });
    
    // const universities = await University.find(query);

  const universities = await University.find(query);
    // const totalUniversitiesResult = await University.aggregate(countPipeline);

    // const totalUniversities =
    //   totalUniversitiesResult.length > 0
    //     ? totalUniversitiesResult[0].totalUniversities
    //     : 0;
    // const totalPages = Math.ceil(totalUniversities / parseInt(limit));

    res.status(200).json({
      // totalUniversities,
      // page: parseInt(page),
      // totalPages,
      universities,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving universities", error: error.message });
  }
};


exports.getUniversityById = async (req, res) => {
  try {
    const university = await University.findById(req.params.id);
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }
    res.status(200).json(university);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving university", error: error.message });
  }
};

exports.updateUniversity = async (req, res) => {
  try {
    const university = await University.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }
    res
      .status(200)
      .json({ message: "University updated successfully", data: university });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating university", error: error.message });
  }
};

exports.deleteUniversity = async (req, res) => {
  try {
    const university = await University.findByIdAndDelete(req.params.id);
    if (!university) {
      return res.status(404).json({ message: "University not found" });
    }
    res.status(200).json({ message: "University deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting university", error: error.message });
  }
};
