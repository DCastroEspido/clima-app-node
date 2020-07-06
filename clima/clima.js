const axios = require('axios');

const apiKey = 'c3e5af4c2080bde6a738d9ad61e3d48a'
const units = 'metric'


const getClima = async (location) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&q=${location}&units=${units}`)
    
    return resp.data.main.temp;
}


module.exports = {
    getClima
}