import express from 'express';
import { createContact, getAllContacts, updateContact, deleteContact} from '../controllers/contactController';
import { validateRequest } from '../middleware/validateRequest';
import { contactSchema } from '../validation/contactValidation';

const router = express.Router();

router.post('/create', validateRequest(contactSchema), createContact);
router.get('/get', getAllContacts);
router.put('/update/:id', updateContact)
router.delete("/delete/:id", deleteContact)


export default router;