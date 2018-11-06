var Personnage = {
    // Initialize the character
    initPerso: function (name, live, force) {
        this.name = name;
        this.live = live;
        this.force = force;
    },
    // Attack a target character
    attaquer: function (cible) {
        if (this.live > 0) {
            var degats = this.force;
            alert(this.name + " attaque " + cible.name + " et lui fait " + degats + " points de dégâts");
            cible.live = cible.live - degats;
            if (cible.live > 0) {
                alert(cible.name + " a encore " + cible.live + " points de vie");
            } else {
                cible.live = 0;
                alert(cible.name + " est mort !");
            }
        } else {
            alert(this.name + " ne peut pas attaquer : il est mort...");
        }
    }
};

var Joueur = Object.create(Personnage);
// Initializes the player
Joueur.initJoueur = function (name, live, force) {
    this.initPerso(name, live, force);
};
// Returns the player description
Joueur.decrire = function () {
    var description = this.name + " a " + this.live + " points de vie, " +
        this.force + " en force, ";
    return description;
};
// Fights an opponent
Joueur.combattre = function (adversaire) {
    this.attaquer(adversaire);
    if (adversaire.live === 0) {
        alert(this.name + " a tué " + adversaire.name  );
    }
};

var Adversaire = Object.create(Personnage);
// Initialize the opponent's properties
Adversaire.initAdversaire = function (name, live, force, race, valeur) {
    this.initPerso(name, live, force);
    this.race = race;
    this.valeur = valeur;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("player1", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("player2", 130, 30);

alert("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
alert(joueur1.decrire());
alert(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("magic", 40, 20, 10);

alert("Un affreux monstre arrive : c'est un " + monstre.race + " namemé " + monstre.name);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

alert(joueur1.decrire());
alert(joueur2.decrire());