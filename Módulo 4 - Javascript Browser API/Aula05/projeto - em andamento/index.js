
const alerta = document.querySelector("#alerta");
const tabelaUsuarios = document.querySelector("#tabela-usuarios")
const botaoCarregar = document.querySelector("#botao-carregar")

botaoCarregar.addEventListener('click', () => carregarDadosClickBotao())

const DADOS_USUARIOS = [
  { id: 1, name: "Amanda", email: "amanda@lovemail.com", company: { name: 'Lets Code'}},
  { id: 2, name: "Igor", email: "igor@bol.com", company: { name: 'Santander'}},
  { id: 3, name: "Mar cos", email: "marcos1234@outlook.com", company: { name: 'Microsoft'}},
  { id: 4, name: "Lucas", email: "lucasflores@hotmail.com", company: { name: 'Google'}},
];

const buscarUsuariosNoBancoDeDados = (segundos = 3) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!DADOS_USUARIOS) {
        reject('Não existem usuarios para serem exibidos.')
      } 
      resolve(DADOS_USUARIOS)
    }, segundos * 1000) 
  })
}



async function consultaUsuariosAsync(segundos) {
  try {
    alerta.textContent = "Carregando..."
    return await buscarUsuariosNoBancoDeDados(segundos)
  } catch (err) {
    console.log(err)
  }
}

consultaUsuariosAsync(segundos = 5)
  .then((resp) => console.log('primeiro', resp))
  .catch((err) => console.log(err))

consultaUsuariosAsync(segundos = 2)
  .then((resp) => console.log('segundo', resp))
  .catch((err) => console.log(err))



const novaLinha = ({id, name, email, company}) => `
  <tr id="${id}">
    <td>${name}</td>
    <td>${email}</td>
    <td>${company.name}</td>
  </tr>
`

const preencherTabela = (usuarios) => {
  if(!usuarios) {
    alerta.textContent = "Não existem registros a serem exibidos"
    return
  } else {
    const listaDeUsuariosHTML = usuarios
      .map(usuario => novaLinha(usuario))
      .join('')
    tabelaUsuarios.innerHTML = listaDeUsuariosHTML
    alerta.textContent = `Foram carregados ${usuarios.length} registros`
  }
}

const buscarUsuariosNoBancoDeDadosFetchApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(resposta => resposta)
    .catch((erro) => erro)
  
}
const test = buscarUsuariosNoBancoDeDadosFetchApi()

const carregarDadosClickBotao = () => {
  Promise.all([buscarUsuariosNoBancoDeDados(), buscarUsuariosNoBancoDeDadosFetchApi()])
    .then((values) => {
      const usuarios = [...values[0], ...values[1]]
      preencherTabela(usuarios)
    })
}





