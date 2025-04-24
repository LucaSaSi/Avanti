// Seleção de elementos
const butaoTC = document.getElementById("btn-todCats");
const butaoDP = document.getElementById("dep");
const divDepartamentos = document.getElementsByClassName("departamentos");
const divDepCat = document.getElementsByClassName("tabela-dep-cat");

// Função genérica para alterar o estilo de exibição de elementos
function alterarDisplay(elementos, display) {
  Array.from(elementos).forEach((elemento) => {
    elemento.style.display = display;
  });
}

// Funções para mostrar e ocultar elementos
function mostraDivDepCat() {
  alterarDisplay(divDepartamentos, "flex");
  alterarDisplay(divDepCat, "flex");
}

function ocultaDivDepCat() {
  alterarDisplay(divDepartamentos, "none");
  alterarDisplay(divDepCat, "none");
}

function mostraDiv() {
  alterarDisplay(divDepartamentos, "flex");
}

function ocultaDiv() {
  alterarDisplay(divDepartamentos, "none");
}

// Adiciona eventos aos botões
butaoTC.addEventListener("mouseover", () => {
  mostraDivDepCat();

  butaoTC.addEventListener("mouseout", ocultaDivDepCat);
});

butaoDP.addEventListener("mouseover", () => {
  mostraDivDepCat();
  ocultaDiv();

  butaoDP.addEventListener("mouseout", ocultaDivDepCat);
});
