class Forca {
  constructor(palavracerta) {
    this.vidas = 6;
    this.estado = "aguardando chute";
    this.letrasChutadas = [];
    this.palavra = [];
    this.palavracerta = palavracerta;
  }
  chutar(letra) {
    if (letra.length > 1) {
      return this.buscarDadosDoJogo();
    }
    if (!this.palavracerta.includes(letra)) {
      if (this.letrasChutadas.includes(letra)) {
        console.log("Esta letra ja foi chutada");
        return this.buscarDadosDoJogo();
      }
      this.vidas--;
    }
    this.letrasChutadas.push(letra);

    if (this.palavracerta.includes(letra)) {
      const palavraforcaInArray = Array.from(this.palavracerta);
      for (var i = 0, n = this.palavracerta.length; i < n; i++) {
        if (palavraforcaInArray[i] == letra) {
          if (this.palavra[i] != letra) {
            this.palavra[i] = letra;
          }
        } else if (this.palavra[i] == undefined) {
          this.palavra[i] = "_";
        }
      }
    }

    if (this.vidas == 0) {
      this.estado = "perdeu";
    }
    if (this.vidas > 0 && this.palavra.join("") == this.palavracerta) {
      this.estado = "ganhou";
    }
  }

  buscarEstado() {
    return this.estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
