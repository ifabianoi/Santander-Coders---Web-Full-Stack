// Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

// 5% para produtos abaixo de R$ 200,00
// 10% para produtos abaixo de R$ 400,00
// 15% para produtos abaixo de R$ 2000,00
// 20% para produtos acima de R$ 2000,00

// Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

// Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.

const produtos = [
  945.93, 181.66, 1660.09, 2088.15, 1248.36, 983.52, 2170.03, 1922.27, 2004.04,
  392.188,
];

const produtosComDesconto = produtos.map((produto) => {
  if (produto < 200) {
    return produto * 0.95;
  } else if (produto < 400) {
    return produto * 0.9;
  } else if (produto < 2000) {
    return produto * 0.85;
  }

  return produto * 0.8;
});

console.log(produtosComDesconto);
