import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    id: string;
    googleId: string;
    displayName: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema({
    googleId: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model<IUser>('User', UserSchema);
export default User;