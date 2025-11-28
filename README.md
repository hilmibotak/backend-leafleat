# Leaflet Backend API

Backend API untuk aplikasi Leaflet dengan MongoDB dan Express.js, siap deploy ke Railway.

## 📋 Prerequisites

- Node.js (v14 atau lebih tinggi)
- MongoDB Atlas account
- Railway account (gratis)

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
   FRONTEND_URL=https://hilmibotak.github.io
   NODE_ENV=development
   ```

3. **Run development server:**

   ```bash
   npm run dev
   ```

4. **Run production mode:**
   ```bash
   npm start
   ```

## 🚂 Deploy ke Railway

### Metode 1: GitHub Integration (Recommended)

1. **Push kode ke GitHub:**

   ```bash
   git add .
   git commit -m "Ready for Railway deployment"
   git push origin main
   ```

2. **Deploy di Railway:**

   - Buka [Railway Dashboard](https://railway.app/dashboard)
   - Klik "New Project"
   - Pilih "Deploy from GitHub repo"
   - Pilih repository `backend-leafleat`
   - Railway akan otomatis detect dan deploy

3. **Configure Environment Variables:**
   Di Railway Dashboard, tambahkan variables:

   - `MONGO_URI`: Connection string MongoDB Atlas
   - `FRONTEND_URL`: `https://hilmibotak.github.io`
   - `NODE_ENV`: `production`

4. **Get URL:**
   - Railway akan generate URL otomatis (misal: `https://backend-leafleat-production.up.railway.app`)
   - Copy URL ini untuk digunakan di frontend

### Metode 2: Railway CLI

1. **Install Railway CLI:**

   ```bash
   npm i -g @railway/cli
   ```

2. **Login:**

   ```bash
   railway login
   ```

3. **Initialize project:**

   ```bash
   railway init
   ```

4. **Add environment variables:**

   ```bash
   railway variables set MONGO_URI="your-mongodb-uri"
   railway variables set FRONTEND_URL="https://hilmibotak.github.io"
   railway variables set NODE_ENV="production"
   ```

5. **Deploy:**
   ```bash
   railway up
   ```

## ⚙️ Environment Variables

| Variable       | Description                       | Example                        |
| -------------- | --------------------------------- | ------------------------------ |
| `MONGO_URI`    | MongoDB connection string         | `mongodb+srv://...`            |
| `FRONTEND_URL` | Frontend URL untuk CORS           | `https://hilmibotak.github.io` |
| `NODE_ENV`     | Environment mode                  | `production`                   |
| `PORT`         | Server port (auto-set by Railway) | `3000`                         |

## 📁 File Structure

```
backend-leafleat/
├── models/
│   └── Location.js       # Mongoose model
├── routes/
│   └── locations.js      # API routes
├── server.js             # Express app
├── Procfile              # Railway process configuration
├── .env.example          # Environment template
├── .gitignore            # Git ignore file
└── package.json          # Dependencies
```

## 🔌 API Endpoints

### Base URL

- Local: `http://localhost:3000`
- Production: `https://your-app.up.railway.app`

### Endpoints

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| GET    | `/`                  | Health check          |
| GET    | `/health`            | Database status check |
| GET    | `/api/locations`     | Get all locations     |
| POST   | `/api/locations`     | Create new location   |
| DELETE | `/api/locations/:id` | Delete location       |

### Example Request

**GET all locations:**

```bash
curl https://your-app.up.railway.app/api/locations
```

**POST new location:**

```bash
curl -X POST https://your-app.up.railway.app/api/locations \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Location Name",
    "description": "Description",
    "lat": -6.200000,
    "lng": 106.816666
  }'
```

## 🔒 CORS Configuration

Backend sudah dikonfigurasi untuk menerima request dari:

- `https://hilmibotak.github.io` (GitHub Pages)
- `http://localhost:5500` (Local development)
- `http://127.0.0.1:5500` (Local development)

Untuk menambah origin lain, edit array `allowedOrigins` di `server.js`.

## 📊 Logging

Server memiliki logging otomatis untuk:

- ✅ MongoDB connection status
- 📍 Request method dan path
- ❌ Error details
- 🚀 Server startup info

## 🐛 Troubleshooting

### Error: Cannot connect to MongoDB

- Pastikan `MONGO_URI` benar di environment variables
- Whitelist IP address `0.0.0.0/0` di MongoDB Atlas Network Access
- Check MongoDB Atlas cluster status

### Error: CORS issues

- Pastikan `FRONTEND_URL` sudah di-set di Railway
- Check origin di browser console
- Verifikasi URL frontend ada di array `allowedOrigins`

### Error: Application failed to respond

- Check logs di Railway Dashboard
- Pastikan semua dependencies terinstall
- Verifikasi `PORT` tidak hardcoded

### Railway deployment stuck

- Check build logs di Railway Dashboard
- Pastikan `package.json` memiliki `start` script
- Verifikasi `Procfile` ada dan benar

## 📝 Notes

- Railway free tier: 500 jam/bulan, 512MB RAM, 1GB disk
- Railway auto-assign PORT, jangan hardcode
- MongoDB Atlas free tier: 512MB storage
- Logs tersedia di Railway Dashboard
- Auto-deploy saat push ke GitHub (jika terhubung)

## 🔗 Links

- [Railway Documentation](https://docs.railway.app/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js](https://expressjs.com/)
- [Railway Pricing](https://railway.app/pricing)

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

| Variable       | Description               | Example                |
| -------------- | ------------------------- | ---------------------- |
| `MONGO_URI`    | MongoDB connection string | `mongodb+srv://...`    |
| `FRONTEND_URL` | Frontend URL untuk CORS   | `https://your-app.com` |
| `NODE_ENV`     | Environment mode          | `production`           |

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

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/`                  | Health check        |
| GET    | `/api/locations`     | Get all locations   |
| POST   | `/api/locations`     | Create new location |
| DELETE | `/api/locations/:id` | Delete location     |

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
