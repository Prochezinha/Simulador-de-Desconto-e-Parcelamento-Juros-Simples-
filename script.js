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
   return parseFloat()