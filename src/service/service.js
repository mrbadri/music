import axios from 'axios';

const Mainservice = axios.create({
  baseURL: 'https://api.pixelgenius.ir/api', // Set your base URL here
});

Mainservice.interceptors.request.use(
  function (config) {
    // Get token from wherever it's stored (e.g., localStorage, Vuex store, etc.)
    const token = '9f8729927b6747232cf6135f243d76baec3afac151c294e423d891bb3ca6325f1a0af4b50650837c7d1c43193dbd0bdf0227662ced6d9f371b68eb51b4502bfc833e6103b0784cf818318771ccdcfa09259919f51d3e4e747ca2175830225d83f9c1b6a50a8bfa7b29d217dfb1b576ca8c83eec527f028fe66fe39e4dfbbf0c2'; // Replace 'your_token_here' with your actual token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);



export default Mainservice;