// function somarDias() {
//     const inputData = document.getElementById("inputData").value;
//     const inputDias = parseInt(document.getElementById("inputDias").value);
  
//     if (!inputData || isNaN(inputDias) || inputDias <= 0) {
//       alert("Por favor, insira uma data válida e selecione um número de dias maior que zero.");
//       return;
//     }
  
//     const dataSelecionada = new Date(inputData);
//     dataSelecionada.setDate(dataSelecionada.getDate() + (inputDias+1));
  
//     const novaDataFormatada = formatarData(dataSelecionada);
//     document.getElementById("resultado").innerText = "Nova data: " + novaDataFormatada;
//   }
  
//   function formatarData(data) {
//     const dia = String(data.getDate()).padStart(2, "0");
//     const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa em 0 (janeiro é 0)
//     const ano = String(data.getFullYear()).padStart(4, "0");
//     return `${dia}/${mes}/${ano}`;
//   }
  
function somarDias() {
  const inputData = document.getElementById("inputData").value;
  const inputDias = parseInt(document.getElementById("inputDias").value);
  const selectTipoDias = document.getElementById("selectTipoDias").value;

  if (!inputData || isNaN(inputDias) || inputDias <= 0) {
    alert("Insira uma data válida e selecione um número de dias maior que zero.");
    return;
  }

  const dataSelecionada = new Date(inputData);
  let diasASomar = inputDias;

  // Verifica se foram selecionados "Dias Úteis" e ajusta a quantidade de dias a serem somados
  if (selectTipoDias === "uteis") {
    let diasContados = 0;
    while (diasContados < inputDias) {
      dataSelecionada.setDate(dataSelecionada.getDate() + 1);
      const diaDaSemana = dataSelecionada.getDay();
      if (diaDaSemana !== 0 && diaDaSemana !== 6) { // 0 representa Domingo e 6 representa Sábado
        diasContados++;
      }
    }
  } else {
    dataSelecionada.setDate(dataSelecionada.getDate() + inputDias + 1);
  }

  const novaDataFormatada = formatarData(dataSelecionada);
  document.getElementById("resultado").innerText = "Nova data: " + novaDataFormatada;
}

function formatarData(data) {
  const dia = String(data.getDate()).padStart(2, "0");
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // Mês começa em 0 (janeiro é 0)
  const ano = String(data.getFullYear()).padStart(4, "0");
  return `${dia}/${mes}/${ano}`;
}
