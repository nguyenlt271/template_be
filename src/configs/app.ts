export const app = {
  port: process.env.PORT || 8080,
  mongoUrl: process.env.MONGO_URI || 'mongodb://localhost:27017/learning',
};
