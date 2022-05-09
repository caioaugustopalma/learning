
function Page( { data } ) {
  return <div>
    <h1>Hello World!</h1>
    {JSON.stringify(data)}
  </div>
}

//import {PrismaClient, Prisma, People} from '@prisma/client';

export async function getServerSideProps(context) {
  //const _prisma = new PrismaClient();
  const res = await fetch(`http://localhost:3000/api/foo`)
  const data = await res.json();
  return { props: { data } }
}

export default Page
