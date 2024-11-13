import { Schema, model } from 'mongoose';
import { emailRegexp } from '../../constants/users.js';

const userSchema = new Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: emailRegexp,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserCollection = model('user', userSchema);

export default UserCollection;
