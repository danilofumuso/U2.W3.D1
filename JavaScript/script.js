//esercizio 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compare(otherUser) {
    if (this.age > otherUser.age) {
      return console.log(this.firstName + " è più grande di " + otherUser.firstName);
    } else if (otherUser.age > this.age) {
      return console.log(otherUser.firstName + " è più grande di " + this.firstName);
    } else {
      console.log(this.firstName + " e " + otherUser.firstName + " hanno la stessa età!");
    }
  }
}

const userX = new User("Mario", "Marioni", 26, "Pisa");
console.log(userX);

const userY = new User("Giovanni", "Giovannoni", 26, "Milano");
console.log(userY);

userX.compare(userY);

//esercizio 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const submit = document.getElementById("submitButton");
submit.addEventListener(submit, function (e) {
  e.preventDefault();
  const animalName = getElementById("petName");
  const animalNamevalue = animalName.value;
});
