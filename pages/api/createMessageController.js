import { _prisma } from '../../@warehouse/prisma.js'

export default async function handler(request, response){
  if (request.method === 'GET' ){
    const {user_name, group_name, message_content} = request.body
    //const { user_name, group_name, message_content } = request.body;
    console.log({user_name, group_name, message_content})
    let ans = {y:10}
    response.json(ans)
  }
}
