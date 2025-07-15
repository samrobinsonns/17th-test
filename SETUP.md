# 17th Street RP - Database Setup Guide

## 🗄️ Database Setup

### 1. Vercel Postgres Setup

1. **Create Vercel Postgres Database:**
   - Go to your Vercel dashboard
   - Navigate to Storage → Create Database
   - Choose "Postgres" and select your project
   - Follow the setup wizard

2. **Get Database Credentials:**
   - Copy the connection string from Vercel
   - Note down the database URL, host, database name, username, and password

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Database Configuration (Vercel Postgres)
POSTGRES_URL="your-postgres-url-here"
POSTGRES_HOST="your-postgres-host-here"
POSTGRES_DATABASE="your-database-name"
POSTGRES_USERNAME="your-username"
POSTGRES_PASSWORD="your-password"

# JWT Configuration
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"

# Database Initialization (for production)
INIT_DB_SECRET="your-init-db-secret-key"

# Next.js Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"
```

### 3. Initialize Database Tables

After setting up your database, initialize the tables by making a POST request to:

```
POST /api/init-db
```

**For Development:**
```bash
curl -X POST http://localhost:3000/api/init-db
```

**For Production:**
```bash
curl -X POST https://your-domain.vercel.app/api/init-db \
  -H "Authorization: Bearer your-init-db-secret-key"
```

### 4. Security Considerations

1. **JWT Secret:**
   - Generate a strong random string for JWT_SECRET
   - Use: `openssl rand -base64 32`

2. **Database Security:**
   - Never commit `.env.local` to version control
   - Use Vercel's environment variables in production
   - Enable SSL connections for production

3. **Password Hashing:**
   - Passwords are hashed using bcrypt with 12 salt rounds
   - JWT tokens expire after 7 days
   - Sessions are stored in the database

### 5. API Endpoints

#### Authentication Endpoints:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user data

#### Database Endpoints:

- `POST /api/init-db` - Initialize database tables

### 6. Database Schema

#### Users Table:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  discord_username VARCHAR(100),
  role VARCHAR(20) DEFAULT 'player',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### User Sessions Table:
```sql
CREATE TABLE user_sessions (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  token_hash VARCHAR(255) NOT NULL,
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Characters Table:
```sql
CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  character_name VARCHAR(50) NOT NULL,
  level INTEGER DEFAULT 1,
  job VARCHAR(50) DEFAULT 'Unemployed',
  bank_balance DECIMAL(15,2) DEFAULT 0.00,
  playtime_hours INTEGER DEFAULT 0,
  licenses JSONB DEFAULT '{}',
  skills JSONB DEFAULT '{}',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 7. Deployment Checklist

- [ ] Set up Vercel Postgres database
- [ ] Configure environment variables in Vercel
- [ ] Initialize database tables
- [ ] Test authentication flow
- [ ] Verify user registration and login
- [ ] Check dashboard functionality

### 8. Troubleshooting

**Common Issues:**

1. **Database Connection Error:**
   - Verify environment variables are set correctly
   - Check if database is accessible from Vercel

2. **Authentication Fails:**
   - Ensure JWT_SECRET is set
   - Check if database tables are created

3. **Registration/Login Errors:**
   - Verify API endpoints are working
   - Check browser console for errors
   - Ensure all required fields are provided

### 9. Next Steps

After setting up the database:

1. **Add Character Creation:**
   - Create character on first login
   - Allow character customization

2. **Add Server Integration:**
   - Connect to actual GTA server
   - Sync character data with game server

3. **Add Admin Features:**
   - User management
   - Server statistics
   - Ban/unban functionality

4. **Add Real-time Features:**
   - Live server status
   - Player count updates
   - Real-time notifications 