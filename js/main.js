class fighters {

    constructor(name, life, force) {
        this.name = name;
        this.life = life;
        this.force = force;
    };
    attaquer(cible) {
        if (this.life > 0 && cible.life > 0) {
            if (cible.life > 0) {
                console.log(this.name + " attaque " + cible.name + " et lui fait " + this.force + " points de dégâts");
                cible.life = cible.life - this.force;
                console.log(cible.name + " a encore " + cible.life + " points de vie");
            }
            if (cible.life <= 0) {
                console.log(this.name + " a tué " + adversaire.name);
            }
        }
    }
    Heal() {
        if (this.life > 0) {
            if (this.magic >= 20) {
                if (this.life < 120) {
                    console.log(this.name + " se heal. Il gagne " + this.heal + " hp.");
                    this.magic = this.magic - 20;
                    this.life = this.life + this.heal;
                    console.log("Il lui reste " + this.life + " hp.");
                }
            } else {
                console.log(this.name + " ne peut pas se heal, il n'as plus assez de magie.");
            }
        }
    }
};

class magic extends fighters {
    constructor(name, life, force, heal, magic) {
        super(name, life, force);
        this.heal = heal;
        this.magic = magic;
    }
}

let joueur1 = new fighters("Guerrier Joueur", 150, 25);
let joueur2 = new fighters("Guerrier Allier", 130, 30);
var Adversaire = new magic("Magicien", 120, 50, 10, 100);

joueur1.attaquer(Adversaire);
joueur2.attaquer(Adversaire);
Adversaire.Heal();
Adversaire.attaquer(joueur1);