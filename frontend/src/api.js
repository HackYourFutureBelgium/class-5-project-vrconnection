const API_URL = () => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'https://vrconnection.herokuapp.com/';
    default:
      return 'http://localhost:8080/api';
  }
};

export default API_URL
