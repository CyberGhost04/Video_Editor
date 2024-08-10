const path = require("node:path");
const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const { pipeline } = require("node:stream/promises");
const util = require("../../node_modules/cpeak/lib/util");
const DB = require("../DB");

const getVideos = (req, res, handleErr) => {
  
};

// Upload a video file
const uploadVideo = async (req, res, handleErr) => {
  const specifiedFileName = req.headers.filename;
  const extension = path.extname(specifiedFileName).substring(1).toLowerCase();
  const name = path.parse(specifiedFileName).name;
  const videoId = crypto.randomBytes(4).toString("hex");

    await fs.mkdir(`./storage/${videoId}`);
    const fullPath = `./storage/${videoId}/original.${extension}`; // the original video path
    const file = await fs.open(fullPath, "w");
    const fileStream = file.createWriteStream();

    req.pipe(fileStream);

//   try {
//     // Make a thumbnail for the video file
//     // Get the dimensions

//     DB.update();
//     DB.videos.unshift({
//       id: DB.videos.length, 
//       videoId,
//       name,
//       extension,
//       userId: req.userId,
//       extractedAudio: false,
//       resizes: {},
//     });
//     DB.save();

//     res.status(201).json({
//       status: "success",
//       message: "The file was uploaded successfully!",
//     });
//   } catch (e) {
//     // Delete the folder
//     util.deleteFolder(`./storage/${videoId}`);
//     if (e.code !== "ECONNRESET") return handleErr(e);
//   }
};

const controller = {
  getVideos,
  uploadVideo,
};

module.exports = controller;
