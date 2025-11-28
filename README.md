# Leaflet Backend API

Backend API untuk aplikasi Leaflet dengan MongoDB dan Express.js, siap deploy ke Vercel.

## 📋 Prerequisites

- Node.js (v14 atau lebih tinggi)
- MongoDB Atlas account
- Vercel account

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Setup environment variables:**
   - Copy `.env.example` ke `.env`
   - Isi dengan kredensial MongoDB Anda:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   PORT=3000
   FRONTEND_URL=http://localhost:5500
   NODE_ENV=development
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

## 🌐 Deploy ke Vercel

### Metode 1: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login ke Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy production:**
   ```bash
   vercel --prod
   ```

### Metode 2: GitHub Integration

1. Push kode ke GitHub repository
2. Import project di [Vercel Dashboard](https://vercel.com/dashboard)
3. Connect repository Anda
4. Configure environment variables di Vercel Dashboard:
   - `MONGO_URI`: Connection string MongoDB Atlas Anda
   - `FRONTEND_URL`: URL frontend Anda (opsional)
   - `NODE_ENV`: production

5. Deploy!

## ⚙️ Environment Variables di Vercel

Tambahkan environment variables berikut di Vercel Dashboard:

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `FRONTEND_URL` | Frontend URL untuk CORS | `https://your-app.com` |
| `NODE_ENV` | Environment mode | `production` |

## 📁 File Structure

```
backend-leafleat/
├── api/
│   └── index.js          # Vercel serverless entry point
├── models/
│   └── Location.js       # Mongoose model
├── routes/
│   └── locations.js      # API routes
├── server.js             # Express app
├── vercel.json           # Vercel configuration
├── .env.example          # Environment template
├── .gitignore            # Git ignore file
└── package.json          # Dependencies
```

## 🔌 API Endpoints

### Base URL
- Local: `http://localhost:3000`
- Production: `https://your-app.vercel.app`

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/locations` | Get all locations |
| POST | `/api/locations` | Create new location |
| DELETE | `/api/locations/:id` | Delete location |

### Example Request

**GET all locations:**
```bash
curl https://your-app.vercel.app/api/locations
```

**POST new location:**
```bash
curl -X POST https://your-app.vercel.app/api/locations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Location Name",
    "description": "Description",
    "lat": -6.200000,
    "lng": 106.816666
  }'
```

## 🔒 CORS Configuration

CORS dikonfigurasi untuk menerima request dari:
- Development: `*` (all origins)
- Production: URL yang ditentukan di `FRONTEND_URL`

Update `FRONTEND_URL` di environment variables Vercel untuk production.

## 🐛 Troubleshooting

### Error: Cannot connect to MongoDB
- Pastikan connection string benar di environment variables
- Whitelist IP address `0.0.0.0/0` di MongoDB Atlas Network Access
- Check MongoDB Atlas cluster status

### Error: CORS issues
- Set `FRONTEND_URL` environment variable di Vercel
- Pastikan frontend URL sudah benar

### Error: 404 on routes
- Check `vercel.json` configuration
- Pastikan `api/index.js` exists

## 📝 Notes

- Vercel menggunakan serverless functions, koneksi database di-cache untuk efisiensi
- MongoDB Atlas recommended untuk production
- Free tier Vercel memiliki limit: 100GB bandwidth/bulan

## 🔗 Links

- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js](https://expressjs.com/)
