
import {getUsers, postUser} from '../../../database/Controller'
import connectMongo from '../../../database/Connect'

export default async function handler(req, res) {
  connectMongo().catch(() => res.status(405).json({error: "Error in the connection"}))

  // type of request
  const {method} = req;

  switch(method){
    case 'GET':
        getUsers(req, res)
        break;
    case 'POST':
        postUser(req, res)
        break;
    default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${method} not allowed`)
        break;
  }
}
