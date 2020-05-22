import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JHUw7m0CP9xlMYrdKWpSJ3H0MZTUxYUpkvGiOSO1RUg'
      }

}); 