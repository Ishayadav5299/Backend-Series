import mongoose from "mongoose";
import { DB_NAME} from "../constants.js";


const connectDb = async () => {
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URL}/{DB_NAME}`);
        console.log(`\n MongoDb connected!! DB Host : ${connectioninstance.connection.host}`);
    }catch (error) {
        console.log("MONGODB connection Error", error);
        process.exit(1)
    }
}

export default connectDb