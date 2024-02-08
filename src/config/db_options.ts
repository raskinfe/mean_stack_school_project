import mongoose from "mongoose";
import QueryResponse from "../ResponseInterface/QueryResponse";

export const options = {
  useNewUrlParser: true,
  autoIndex: true, // this is the code I added that solved it all
  keepAlive: true,
  connectTimeoutMS: 200000,
  socketTimeoutMS: 45000,
  family: 4, // Use IPv4, skip trying IPv6
  useUnifiedTopology: true,
};

export const dbConnect = async (url: any): Promise<QueryResponse> => {
  try {
    await mongoose.connect(url, options);
    return QueryResponse.result({
      success: true,
      message: `> Database connected to ${url}`,
    });
  } catch (error: any) {
    return QueryResponse.error({ success: true, message: error.message });
  }
};
