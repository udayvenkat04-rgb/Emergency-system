import mongoose from 'mongoose';

const emergencySchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    latitude: Number,
    longitude: Number,
    contacts: {
      type: [Object],
      default: [],
    },
    status: {
      type: String,
      enum: ['active', 'resolved', 'cancelled'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

const Emergency = mongoose.model('Emergency', emergencySchema);

export default Emergency;
