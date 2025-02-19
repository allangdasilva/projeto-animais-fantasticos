export default function initFetchBitcoin() {
  async function pegarBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJSON = await bitcoinResponse.json();
      const valorLimpo = 100 / bitcoinJSON.BRL.buy;
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = valorLimpo.toFixed(4);
    } catch (error) {
      console.log(error);
    }
  }
  pegarBitcoin("https://blockchain.info/ticker");
}
