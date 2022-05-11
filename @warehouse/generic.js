import { _prisma } from './prisma'

async function getAll(table){
  return await _prisma[table].findMany();
}

async function create( table, obj ){
  return await _prisma[table].create({
    data: obj
  })
}

export { getAll, create };
