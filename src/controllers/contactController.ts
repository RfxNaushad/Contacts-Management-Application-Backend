import { Request, Response } from 'express';
import Contact from '../models/contact';

export async function createContact(req: Request, res: Response) {
  const newContact = new Contact(req.body);
  try {
    await newContact.save();
    res.status(201).send(newContact);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function getAllContacts(req: Request, res: Response) {
  try {
    const contacts = await Contact.find({});
    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function updateContact(req: Request, res: Response) {
   try{
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(updatedContact);
   } catch (error) {
    res.status(400).send(error)
   }
}

export async function deleteContact(req: Request, res: Response) {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        res.send("deleted")
        if(!deletedContact) return res.status(404).send()
    } catch (error) {
         res.status(500).send(error);
}
}