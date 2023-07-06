// Variáveis globais
var carros = [];
var idAtual = 1;

// Função para exibir o menu inicial
function exibirMenu() {
  var opcao = prompt(`Bem-vindo ao sistema de CRUD de veículos:

    No momento, o sistema tem ${carros.length} carros cadastrados.

    Escolha uma das opções para interagir com o sistema:
    1 - Cadastrar veículo
    2 - Listar todos os veículos
    3 - Filtrar veículos por marca
    4 - Atualizar veículo
    5 - Remover veículo
    6 - Sair do sistema`);

  switch (opcao) {
    case "1":
      cadastrarVeiculo();
      break;
    case "2":
      listarVeiculos();
      break;
    case "3":
      filtrarVeiculosPorMarca();
      break;
    case "4":
      atualizarVeiculo();
      break;
    case "5":
      removerVeiculo();
      break;
    case "6":
      alert("Saindo do sistema...");
      break;
    default:
      alert("Opção inválida. Por favor, escolha uma opção válida.");
      exibirMenu();
      break;
  }
}

// Função para cadastrar um novo veículo
function cadastrarVeiculo() {
  var modelo = prompt("Digite o modelo do veículo:");
  var marca = prompt("Digite a marca do veículo:");
  var ano = prompt("Digite o ano do veículo:");
  var cor = prompt("Digite a cor do veículo:");
  var preco = prompt("Digite o preço do veículo:");

  var veiculo = {
    id: idAtual,
    modelo: modelo,
    marca: marca,
    ano: ano,
    cor: cor,
    preco: preco,
  };

  carros.push(veiculo);
  idAtual++;

  alert("Veículo cadastrado com sucesso!");
  exibirMenu();
}

// Função para listar todos os veículos
function listarVeiculos() {
  if (carros.length === 0) {
    alert("Não há veículos cadastrados.");
  } else {
    alert("Lista de veículos:");
    carros.forEach(function (veiculo) {
      alert(
        `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Marca: ${veiculo.marca} | Ano: ${veiculo.ano} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}`
      );
    });
  }

  exibirMenu();
}

// Função para filtrar veículos por marca
function filtrarVeiculosPorMarca() {
  var marcaFiltro = prompt("Digite a marca para filtrar:");

  var veiculosFiltrados = carros.filter(function (veiculo) {
    return veiculo.marca.toLowerCase() === marcaFiltro.toLowerCase();
  });

  veiculosFiltrados.sort(function (a, b) {
    return parseFloat(a.preco) - parseFloat(b.preco);
  });

  if (veiculosFiltrados.length === 0) {
    alert(`Não há veículos da marca ${marcaFiltro}.`);
  } else {
    alert(`Veículos da marca ${marcaFiltro}:`);
    veiculosFiltrados.forEach(function (veiculo) {
      alert(
        `ID: ${veiculo.id} | Modelo: ${veiculo.modelo} | Cor: ${veiculo.cor} | Preço: R$${veiculo.preco}`
      );
    });
  }

  exibirMenu();
}

// Função para atualizar um veículo
function atualizarVeiculo() {
  var idAtualizar = prompt("Digite o ID do veículo que deseja atualizar:");

  var veiculoEncontrado = carros.find(function (veiculo) {
    return veiculo.id == idAtualizar;
  });

  if (veiculoEncontrado === undefined) {
    alert("Veículo não encontrado. Retornando ao menu inicial.");
  } else {
    var novaCor = prompt("Digite a nova cor do veículo:");
    var novoPreco = prompt("Digite o novo preço do veículo:");

    veiculoEncontrado.cor = novaCor;
    veiculoEncontrado.preco = novoPreco;

    alert("Veículo atualizado com sucesso!");
  }

  exibirMenu();
}

// Função para remover um veículo
function removerVeiculo() {
  var idRemover = prompt("Digite o ID do veículo que deseja remover:");

  var index = carros.findIndex(function (veiculo) {
    return veiculo.id == idRemover;
  });

  if (index === -1) {
    alert("Veículo não encontrado. Retornando ao menu inicial.");
  } else {
    carros.splice(index, 1);
    alert("Veículo removido com sucesso!");
  }

  exibirMenu();
}

// Iniciar o sistema
exibirMenu();
