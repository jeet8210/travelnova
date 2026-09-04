# TravelNova — MERN Stack Travel Website

A full-stack clone of the TravelNova design, built with **MongoDB, Express, React, Node.js**.

## Project structure

```
travelnova/
├── backend/          Express API + MongoDB (Mongoose)
│   ├── config/db.js
│   ├── models/        User, Destination, Package, Booking
│   ├── controllers/
│   ├── routes/
│   ├── middleware/auth.js   JWT auth + admin guard
│   ├── seed.js         Sample data loader
│   └── server.js
└── frontend/         React (Vite) + Tailwind CSS
    └── src/
        ├── components/  Navbar, Hero, PopularDestinations, FeaturedPackages,
        │                 WhyChooseUs, AIPlannerBanner, Testimonials, Newsletter, Footer
        └── api/api.js   Axios client
```

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/travelnova   # or your MongoDB Atlas URI
JWT_SECRET=some_long_random_string
CLIENT_URL=http://localhost:5173
```

You need MongoDB running — either locally (`mongod`) or a free cluster on
[MongoDB Atlas](https://www.mongodb.com/atlas).

Load sample destinations & packages:
```bash
npm run seed
```

Start the API:
```bash
npm run dev      # nodemon, auto-restarts
# or
npm start
```

API runs at `http://localhost:5000`. Try `http://localhost:5000/api/health`.

### Key endpoints
| Method | Route | Description |
|---|---|---|
| POST | /api/auth/register | Create account |
| POST | /api/auth/login | Login, returns JWT |
| GET  | /api/destinations | List destinations (`?featured=true`) |
| GET  | /api/packages | List packages |
| POST | /api/bookings | Create booking (auth required) |
| GET  | /api/bookings/my | My bookings (auth required) |
| GET  | /api/bookings | All bookings (admin only) |

## 2. Frontend setup

```bash
cd frontend
npm install
npm run dev
```

Runs at `http://localhost:5173`. The Vite dev server proxies `/api/*` calls to
`http://localhost:5000`, so make sure the backend is running too.

To build for production:
```bash
npm run build   # outputs to frontend/dist
```

## 3. What's implemented

This is a full multi-page site, not just a homepage:

| Page | Route | What it does |
|---|---|---|
| Home | `/` | Hero, trusted-by, popular destinations, featured packages, why-choose-us, AI planner banner, testimonials, newsletter |
| Destinations | `/destinations` | Full destination list with live search |
| Destination detail | `/destinations/:id` | Destination info + related packages |
| Packages | `/packages` | Full package list with price sorting |
| Package detail | `/packages/:id` | Full details, includes, and a **working booking form** (dates, guests, live total) |
| Login | `/login` | Email/password login against the API |
| Signup | `/signup` | Account creation |
| My Bookings | `/my-bookings` | A logged-in user's bookings, pulled live from the database |
| Contact | `/contact` | Contact form |

Behind the scenes:
- Real authentication: JWT + bcrypt password hashing, persisted in
  `localStorage`, shared app-wide via React Context (`src/context/AuthContext.jsx`).
- Booking a package requires login; unauthenticated users are redirected to
  `/login` and sent back to finish their booking after signing in.
- Destinations & packages are fetched live from the API, with sample data as
  a fallback so the UI still renders if the backend isn't running yet.
- Admin-only routes for managing destinations, packages, and bookings
  (protected by role-based middleware — set a user's `role` to `"admin"`
  directly in MongoDB to test these).
- Deployment-ready: `frontend/vercel.json` (SPA routing rewrites) and
  `backend/render.yaml` are included for one-click deploys.

## 4. Deploying it (when you're ready)

1. **Database** — create a free cluster on
   [MongoDB Atlas](https://www.mongodb.com/atlas), grab the connection string.
2. **Backend** — push `backend/` to GitHub, deploy on
   [Render](https://render.com) (it will pick up `render.yaml`) or
   [Railway](https://railway.app). Set `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`
   as environment variables.
3. **Frontend** — push `frontend/` to GitHub, deploy on
   [Vercel](https://vercel.com) or [Netlify](https://netlify.com). Point its
   API calls at your deployed backend URL (update the `baseURL` in
   `src/api/api.js` or set up an environment-based proxy).
4. **Seed data** — run `npm run seed` once against your production database
   (or connect Compass/Atlas UI and add destinations/packages manually).

## 5. Suggested next steps

- Add a payment gateway (Razorpay/Stripe) to the booking flow.
- Build an admin dashboard UI (the API already supports managing
  destinations, packages, and bookings — it just needs a front end).
- Add server-side search/filtering (by destination, dates, price).
- Add a custom domain once deployed.

## Design credit
Visual layout and copy modeled on the uploaded reference screenshot.
