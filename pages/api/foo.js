import {PrismaClient, Prisma, People} from '@prisma/client';

const _prisma = new PrismaClient();

function read(table){
  return _prisma[table].findMany();
}

async function create(table, obj){
  return await _prisma[table].create({
    data: obj
  })
}

async function update(table, obj){
  return await _prisma[table].update({
    where: {
      id: obj.id
    },
    data: obj
  })
}

async function remove(table, obj){
  return await _prisma[table].delete({
    where: {
      id: obj.id
    }
  })
}


// async function save(obj){
//   return await fetch('/api/foo', {
//     method: 'POST',
//     body: JSON.stringify(obj)
//   }).json();
// }

async function test(request, response){
  //const x = await remove("people", p[0]);
  //const ans = await read("people");
  let ans = new Date().getSeconds()
  response.json(ans)
}

export default test

//Ways of declaring functions
const fy = y => y**2;
function fx (x) { return {y: x**2} }
function fz(x) { return {y: x?.tit + x?.ed} }
function fw(arr){
  let str = "";
  arr.forEach( x => { str += x } );
  return {y: str}
}
