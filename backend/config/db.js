import mongoose from 'mongoose';

const mongodbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/emergency_system';

export const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};
