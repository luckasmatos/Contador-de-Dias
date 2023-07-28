function somarDias() {
    const inputData = document.getElementById("inputData").value;
    const inputDias = parseInt(document.getElementById("inputDias").value);
  
    if (!inputData || isNaN(inputDias) || inputDias <= 0) {
      alert("Por favor, insira uma data válida e selecione um número de dias maior que zero.");
      return;
    }
  
    const dataSelecionada = new Date(inputData);
    dataSelecionada.setDate(dataSelecionada.getDate() + (inputDias+1));
  
    const novaDataFormatada = formatarData(dataSelecionada);
    document.getElementById("resultado").innerText = "Nova data: " + novaDataFormatada;
  }
  
  function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa em 0 (janeiro é 0)
    const ano = String(data.getFullYear()).padStart(4, "0");
    return `${dia}/${mes}/${ano}`;
  }
  