export default function fetchBitcoin(url, target) {
  async function pegarBitcoin() {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const valorLimpo = 100 / bitcoinJSON.BRL.buy;
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = valorLimpo.toFixed(4);
    } catch (error) {
      console.log(error);
    }
  }
  return pegarBitcoin();
}
