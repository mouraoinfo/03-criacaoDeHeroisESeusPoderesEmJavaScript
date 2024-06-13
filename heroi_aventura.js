class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'mago':
                ataque = 'magia';
                break;
            case 'arqueiro':
                ataque = 'arco';
                break;
            
            case 'monge':
                ataque = 'artes marciais';
                break;

            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'estratégia descohecida';
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}!`);
    }


}


// Criando instâncias da classe Heroi

let guerreiro = new Heroi('Goku', 25, 'guerreiro');
let mago = new Heroi('Merlin', 100, 'mago');
let arqueiro = new Heroi('Legolas', 500, 'arqueiro');
let monge = new Heroi('Bruce Lee', 30, 'monge');

// Chamando o método atacar de cada instância
guerreiro.atacar();
mago.atacar();
arqueiro.atacar();
monge.atacar();