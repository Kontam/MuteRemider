const Const = require('../const');
const apiBaseUrl = Const.API_BASE_URL;

const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
})

module.exports = (slug) => axios.get(slug).then(data => {
  console.log("execRequest", data);
  return data;
});
