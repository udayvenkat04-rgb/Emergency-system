import express from 'express';

const router = express.Router();

// Get all contacts
router.get('/', (req, res) => {
  // TODO: Fetch from database
  res.json([
    { id: 1, name: 'Emergency Services', phone: '911' },
    { id: 2, name: 'Mom', phone: '+1234567890' },
    { id: 3, name: 'Dad', phone: '+0987654321' },
  ]);
});

// Add new contact
router.post('/', (req, res) => {
  const { name, phone } = req.body;
  // TODO: Save to database
  res.json({ id: Date.now(), name, phone });
});

// Update contact
router.put('/:id', (req, res) => {
  const { id } = req.params;
  // TODO: Update in database
  res.json({ id, ...req.body });
});

// Delete contact
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  // TODO: Delete from database
  res.json({ success: true, message: 'Contact deleted' });
});

export default router;
