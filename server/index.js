const compress_images = require("compress-images");

const FOLDER = "/Users/infinity/Desktop/Camera";
const INPUT_PATH = `${FOLDER}/**/*.{jpg,JPG,jpeg,JPEG}`;
const OUTPUT_PATH = "build/img/";

compress_images(
  INPUT_PATH,
  OUTPUT_PATH,
  { compress_force: false, statistic: true, autoupdate: true },
  false,
  {
    jpg: {
      engine: "mozjpeg",
      command: ["-quality", "60"],
    },
  },
  { png: { engine: false, command: false } },
  { svg: { engine: false, command: false } },
  { gif: { engine: false, command: false } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);
