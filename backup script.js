console.log("test");

class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }

  attacked(damage) {
    if (this.canFly) {
      // verifica daca eroul poate sa zboare
      let chance = Math.random();

      if (chance > 0.5) {
        //daca are 50% sanse sa zboare, damage-ul este 0
        console.log(this.name + " flew away.");
        damage = 0;
      }

      // dverificam daca eroul are scut
      if (this.shield) {
        conolse.log(this.name + " defended with a shield");
        damage = damage * 0.8; // isi ia damage cu 20% mai putin
      }

      this.hp = this.hp - damage;
      console.log(
        this.name +
          " has been attacked. HP reduced by " +
          damage +
          ". HP remaining: " +
          this.hp +
          "."
      );
    }
  }
}

class Dwarf extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 10;
    console.log(this.name + " attacked with damaged: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Sprite extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }

  attack(otherHero) {
    let damage = 15;
    console.log(this.name + " attacked with damaged: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Dragon extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }

  attack(otherHero) {
    let damage = 5;
    console.log(this.name + " attacked with damaged: " + damage + ".");
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2) {
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0;
  }

  performAttack() {
    if (this.turn === 0) {
      this.hero1.attack(this.hero2);
    } else {
      this.hero2.attack(this.hero1);
    }
  }

  changeTurn() {
    this.turn = 1 - this.turn; // se schimba tura din 0 in 1 si invers
  }

  findWinner() {
    let findWinner = "";
    if (this.hero1.hp > 0) {
      findWinner = this.hero1.name + " win with " + this.hero1.hp + ".";
      console.log(findWinner);
    } else if (this.hero2.hp > 0) {
      findWinner = this.hero2.name + " won with " + this.hero2.hp + ".";
      console.log(findWinner);
    } else {
      findWinner = "No heroes left alive.";
      console.log(findWinner);
    }
  }

  go() {
    do {
      this.performAttack();
      this.changeTurn();
    } while (this.hero1.hp > 0 && this.hero2.hp > 0);
    this.findWinner();
  }
}

let dwarf = new Dwarf("Daisy", 10);
let sprite = new Sprite("Maia", 20);
let dragon = new Dragon("Son Goku", 100);

let fight = new Fight(dwarf, sprite);
fight.go();
