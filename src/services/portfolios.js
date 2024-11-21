import db from '../../db.json'

const getAll = async () => {
  return db.portfolios
}

//import axios from 'axios'

//const baseUrl = 'http://localhost:3001/portfolios'

//const getAll = async () => {
  //const response = await axios.get(baseUrl)
  //return response.data
//}

export default { getAll }