import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    shareId: {
      type: String,
      unique: true,
      sparse: true,
    },
    isShared: {
      type: Boolean,
      default: false,
    },
    expiresAt: Date,
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model('Location', locationSchema);

export default Location;
