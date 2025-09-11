document.addEventlistener('DOMcontentLoaded'), function () { 
 // Utilitário para formatar moeda (R$)
 function moedaBR (valor) {
    return new Intl.NumberFormat('pt-BR',{ style: 'currency', currency:
    'BRL' }). format(valor);
    }
 
 // normaliza entrada (troca vírgula por ponto e converte para número )
 function toNumber(vaL) {
   if (typeof vaL === 'number') return vaL;
   if (!vaL && vaL !== 0) return NaN;
   return parseFloat(String(vaL).trim().replace(',','.'));
 }
 const form = document.getElementById('form');
 const erro = document.getElementById('erro');
 const resultados = document.getElementById('resultados');
 const tabelaSecao = document.getElementById('tabelaSecao');

 const outPrecoComDesconto =-
  document.getElementById('precoComDesconto');
 const outValorParcela = docuemnt.getElementById('valorParcela');
 const outTotalPagar = document.getElementById('TotalPagar');
 const outEconomia = document.getElementById('economia');

 if (!form) {
