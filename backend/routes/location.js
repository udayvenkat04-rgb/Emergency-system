import express from 'express';

const router = express.Router();

// Update user location
router.post('/update', (req, res) => {
  const { latitude, longitude } = req.body;
  // TODO: Save location to database
  res.json({ success: true, message: 'Location updated' });
});

// Generate share link
router.post('/share', (req, res) => {
  const shareId = Math.random().toString(36).substring(7);
  res.json({ shareUrl: `http://localhost:5173/location/${shareId}` });
});

// Get shared location
router.get('/share/:shareId', (req, res) => {
  const { shareId } = req.params;
  // TODO: Fetch location from database using shareId
  res.json({
    shareId,
    latitude: 51.5074,
    longitude: -0.1278,
    timestamp: new Date(),
    userName: 'User Name',
  });
});

export default router;
