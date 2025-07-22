// Lista de atendimentos
const listaAtend = []

// Serviços
const servicos = {
  "corte-tradicional": "Corte Tradicional - R$ 35,00",
  "barba-maquina": "Barba Máquina - R$ 40,00",
  "corte-infantil": "Corte Infantil - R$ 25,00",
  "pezinho-cabelo": "Pezinho Cabelo - R$ 20,00",
  "barboterapia": "Barboterapia - R$ 50,00",
  "pezinho-barba": "Pezinho Barba - R$ 20,00",
  "outro": "Outro Serviço",
}

// Função para cadastrar atendimento
function cadastrarAtend() {
  // Pega os dados do formulário
  const nome = document.getElementById("nome").value
  const telefone = document.getElementById("telefone").value
  const horario = document.getElementById("horario").value
  const endereco = document.getElementById("endereco").value
  const servicoEscolhido = document.getElementById("servico").value

  // Condicionais
if (nome === "") {
    alert("Digite seu nome!")
    return
  } else {
    console.log("Nome válido:", nome)
  }


  if (telefone === "") {
    alert("Digite seu telefone!")
    return
  }

  if (servicoEscolhido === "") {
    alert("Escolha um serviço!")
    return
  } else {
    console.log("Serviço escolhido:", servicos[servicoEscolhido])
  }


  // Cria o objeto atendimento
  const novoAtend = {
    nome: nome,
    telefone: telefone,
    horario: horario,
    endereco: endereco,
    servico: servicoEscolhido,
    dataCadastro: new Date(),
  }

  // Adiciona na lista
  listaAtend.push(novoAtend)

  // Mostra no console
  console.log("=== NOVO ATENDIMENTO ===")
  console.log("Nome:", novoAtend.nome)
  console.log("Telefone:", novoAtend.telefone)
  console.log("Horario:", novoAtend.horario)
  console.log("Serviço:", servicos[novoAtend.servico])

  // Limpa o formulário
  document.getElementById("formularioCadastro").reset()

  // Mensagem de sucesso
  alert("Atendimento registrado!")

  // Mostra os registros
  mostrarAtend()
}

// Função para mostrar atendimentos
function mostrarAtend() {
  console.log("=== TODOS OS REGISTROS ===")

  if (listaAtend.length === 0) {
    console.log("Nenhum atendimento registrado.")
    return
  }

  // Laço for para mostrar cada atendimento
  for (let i = 0; i < listaAtend.length; i++) {
    const atendimentos = listaAtend[i]

    console.log("Atendimentos", i + 1 + ":")
    console.log("Nome:", atendimentos.nome)
    console.log("Telefone:", atendimentos.telefone)
    console.log("Horario:", atendimentos.horario)
    console.log("Serviço:", servicos[atendimentos.servico])
    console.log("---")
  }

  console.log("Total:", listaAtend.length, "atendimentos")
}

// Evento do formulário
document.getElementById("formularioCadastro").addEventListener("submit", (evento) => {
  evento.preventDefault()
  cadastrarAtend()
})

// Mensagem inicial
console.log("=== BARBEARIA DO MATHEUS ===")
console.log("Sistema iniciado!")