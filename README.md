**An application for uploading and streaming video files from any device using private accounts**

## npm start
 - run local node

# Features included:
 - Frontend Library: React
 - Backend Microframework: Express 
 - Middleware:
   - cors
   - body-parser
  
 - S3 File storage / uploading from client side
 - PostgreSQL database storage for user information and S3 video storage URL
 - User password encryption using bcrypt
 - axios API server request library



# File Structure
 ```
.                            # Root
├── src/                     # Javascript sources
├── public/                  # Assets
├── netlify.toml             # Build config
└── package.json             # Node dependencies


/src
├── components/              # Modular Components
├── helpers/                 # Helper module
├── hooks/                   # React hooks
├── styles/                  # SCSS Styles
├── views/                   # View Components
├── App.js                   # App module
├── AppContext.js            # React Context Provider
├── index.js                 # Index module
└── routes.js                # Route paths

 ```