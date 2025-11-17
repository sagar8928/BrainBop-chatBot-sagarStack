import mongoose from 'mongoose';

const UserSchema = new mongoose.schema(
  {
    _id: { type: string, required: true },
    name: { type: string, required: true },
    email: { type: string, required: true },
    image: { type: string, required: false },
  },
  { timestamps: true }
);

const User = mongoose.models.user || mongoose.model('user', UserSchema);

export default User;
