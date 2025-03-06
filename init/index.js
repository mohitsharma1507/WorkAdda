const mongoose = require("mongoose");
const initData = require("./data.js");
const Program = require("../models/Program.js");

const initData2 = require("./data2.js");

const Subject = require("../models/Subject.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/NotesAdda";
// const MONGO_URL = "mongodb+srv://gumo:0115072003@cluster0.dxvnsmx.mongodb.net";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Program.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67c93d121ce5862451145e2f",
  }));
  await Program.insertMany(initData.data);

  console.log("data was initialized");
  console.log("Program data was initialized");
};
const initDB2 = async () => {
  await Subject.deleteMany({});
  initData2.data2 = initData2.data2.map((obj) => ({
    ...obj,
    owner: "67c93d121ce5862451145e36",
  }));
  await Subject.insertMany(initData2.data2);
  console.log("Subject data was also initialized");
};

initDB();
initDB2();
