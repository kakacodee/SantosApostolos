
   function abrir() {
    const item = document.getElementById('itens');
    if (item.style.display === 'none' || item.style.display === '') {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
}
function copiarTexto() {
    const texto = document.getElementById("texto").innerText;
  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado!");
  }).catch(err => {
    alert("Erro ao copiar: " + err);
  });
}
