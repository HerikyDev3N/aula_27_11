class caneta{
    constructor(cor, marca){
        this.cor = cor;
        this.marca = marca;
        this.tampada = true;
    }
    escrever(texto){
        if (this.tampada){
            console.log('Erro! A caneta está tampada!')
        }else{
            console.log(`A caneta escreveu:  $(texto)na cor $(this.cor)`)
        }
    }
}