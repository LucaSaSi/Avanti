const inputBusca = document.getElementById("busca");
const buttonLupa = document.getElementById("btn-busca");

buttonLupa.addEventListener("click", () => {
  const valorBusca = inputBusca.value;
  if (valorBusca === "") {
    alert("Por favor, digite algum produto!");
    return;
  }
  alert(
    `Você buscou por: "${valorBusca}", mas no momento este produto não está disponível.`
  );
  console.log(valorBusca);
});
