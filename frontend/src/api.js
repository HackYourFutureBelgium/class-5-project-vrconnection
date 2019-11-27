const API_URL = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'http://localhost:8080/api';
    default:
      return 'http://localhost:8080/api';
  }
};

export default API_URL
