# Emergency Contact + Location Share System

A web application for emergency alerts with live location sharing.

## Features

- 🚨 One-click emergency button
- 📍 Live map with mock GPS location
- 🔗 Generate and share emergency location link
- 📞 Emergency contact management
- 💬 Real-time location updates via WebSockets
- 📱 Responsive mobile-friendly design

## Project Structure

```
Emergency-System/
├── frontend/          # React + Vite + Tailwind CSS
├── backend/           # Node.js + Express + Socket.io
└── README.md
```

## Quick Start

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`

### Backend Setup

```bash
cd backend
npm install
cp ../.env.example ../.env
npm run dev
```

Backend runs on `http://localhost:5000`

## Environment Variables

Create a `.env` file in the root directory:

```
VITE_API_URL=http://localhost:5000/api
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URL=mongodb://localhost:27017/emergency-system
JWT_SECRET=your_secret_key
```

## API Endpoints

### Emergency
- `POST /api/emergency/trigger` - Trigger emergency alert
- `GET /api/emergency` - Get emergency history

### Location
- `POST /api/location/update` - Update user location
- `POST /api/location/share` - Generate share link
- `GET /api/location/share/:shareId` - Get shared location

### Contacts
- `GET /api/contacts` - Get all contacts
- `POST /api/contacts` - Add new contact
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact

## Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Leaflet (Maps)
- Axios
- Socket.io Client

**Backend:**
- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT Authentication

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License

## Support

For issues and questions, please open an issue in the repository.
