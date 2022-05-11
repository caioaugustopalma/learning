import { _prisma } from './prisma'

async function getAll(){
  return await _prisma.users.findMany();
}

async function create( obj ){
  return await _prisma.users.create({
    data: obj
  })
}

export { getAll, create };
