import mongoose, { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/.+@.+\..+/, 'Please fill a valid email address'],
    },
    birthDate: {
      type: Date,
      required: true,
    },
    sourceInfo: {
      type: String,
      required: true,
      enum: ['social media', 'friends', 'found myself'],
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'events',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const UsersCollection = model('users', usersSchema);
