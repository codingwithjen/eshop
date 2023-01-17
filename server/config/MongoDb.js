/** Connect to Mongoose DB */

import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB currently connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
