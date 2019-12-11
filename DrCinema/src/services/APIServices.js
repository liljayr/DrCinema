import * as axios from 'axios';

let token = '';

const baseURL = 'http://api.kvikmyndir.is/';

const getToken = async () => {
  const url = `${baseURL}authenticate`;
  const { data } = await axios.post(url, { username: 'Dr.cinema', password: '123456' });
  token = data.token;
};

const connect = async (url) => {
  const response = await axios.get(url, { headers: { 'x-access-token': token } });
  if (Object.prototype.hasOwnProperty.call(response, 'success')) {
    await getToken();
    return connect();
  }
  return response.data;
};

export const getMovies = async () => {
  try {
    const url = `${baseURL}movies`;
    const data = await connect(url);
    const results = [];
    for (let i = 0; i < data.length; i += 1) {
      const movie = {
        id: data[i]._id,
        name: data[i].title,
        image: data[i].poster,
        plot: data[i].plot,
        duration: data[i].durationMinutes,
        yof: data[i].year,
        genres: data[i].genres,
        showtimes: data[i].showtimes,
      };
      results.push(movie);
    }
    return results;
  } catch (error) {
    return (error);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const url = `${baseURL}upcoming`;
    const data = await connect(url);
    const results = [];
    for (let i = 0; i < data.length; i += 1) {
      const movie = {
        id: data[i]._id,
        name: data[i].title,
        image: data[i].poster,
        releaseDate: data[i]['release-dateIS'],
      };
      results.push(movie);
    }
    return results;
  } catch (error) {
    return (error);
  }
};

export const getCinemas = async () => {
  try {
    const url = `${baseURL}theaters`;
    const data = await connect(url);
    const results = [];
    for (let i = 0; i < data.length; i += 1) {
      const cinema = {
        id: data[i].id,
        name: data[i].name,
        description: data[i].description,
        address: data[i]['address\t'],
        city: data[i].city,
        phone: data[i].phone,
        website: data[i].website,
      };
      results.push(cinema);
    }
    return results;
  } catch (error) {
    return (error);
  }
};
