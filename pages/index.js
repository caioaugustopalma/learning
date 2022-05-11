
function Page( { data } ) {
  return <div>

    <h1>Projeto GARNET.IO</h1>

    <h2>
    Sistema de chat (local) empresarial
    baseado em grupos de comunicação.
    </h2>

    <h3>Requisitos:</h3>
    <ul>
      <li>Sistema de autenticação;</li>
      <li>Grupos de 1 a n usuários;</li>
      <li>Grupo principal para comunicação global;</li>
      <li>Logs auditáveis das conversas;</li>
      <li>Interface simples e amigável;</li>
      <li>Possibilita anexo de arquivos e imagens;</li>
      <li>Comunicação por voz similar ao Discord;</li>
    </ul>
    {JSON.stringify(data)}
  </div>
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/foo`)
  const data = await res.json();
  return { props: { data } }
}

export default Page
