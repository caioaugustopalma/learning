
// async function save(obj){
//   return await fetch('/api/foo', {
//     method: 'POST',
//     body: JSON.stringify(obj)
//   }).json();
// }


import { getAll, create } from '../../@warehouse/generic.js'

async function test(request, response){
  let usr = await getAll("User");
  const y = await create("Group", {name:"Dev-"})
  let ans = await getAll("Group");
  //let ans = new Date().getSeconds()
  response.json(ans)
  
}

export default test
