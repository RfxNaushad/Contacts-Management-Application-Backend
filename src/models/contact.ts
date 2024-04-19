import mongoose from 'mongoose';

interface IContact {
  name: string;
  email?: string;
  phoneNumber: string;
  address: string;
  profilePicture?: string;
}

const contactSchema = new mongoose.Schema<IContact>({
  name: { type: String, required: true },
  email: { type: String },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  profilePicture: { type: String }
});

const Contact = mongoose.model<IContact>('Contact', contactSchema);

export default Contact;