const config = {
  env: process.NODE_ENV || 'development',
  port: process.eventNames.PORT || 4040,
  jwtSecret: process.env.JWT_SECRET || 'mysecret_key',
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://localhost:27017/reactApp'
}
export default config;