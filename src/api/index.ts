import axios from 'axios';

// const DOMAIN:string = '//ec2-52-52-147-166.us-west-1.compute.amazonaws.com'
const DOMAIN:string = '//localhost:8080'

const getFoodList = () => {
  return axios(`${DOMAIN}/api/foods`)
}

const getVlogList = () => {
  return axios(`${DOMAIN}/api/vlogs`)
}

const getMovieList = () => {
  return axios(`${DOMAIN}/api/movies`)
}

export { getFoodList, getVlogList, getMovieList }