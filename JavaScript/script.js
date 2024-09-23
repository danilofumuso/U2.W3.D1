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

const createPetForm = document.getElementById("createPet"); //riferimento del form
const petName = document.getElementById("petName"); //riferimenti degli input
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");

//array dove salvare i pet che poi confronteremo
const pets = [];

createPetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const pet = new Pet(petName.value, ownerName.value, species.value, breed.value);

  pets.push(pet); //pusho il pet con i valori del form nell'array pets.
  createPetForm.reset(); //resetto i campi del form.

  generateList();
});

// const generatePetList = function () {
//   // recupero il riferimento alla lista (vuota)
//   const list = document.querySelector(".list-group");
//   // svuoto la lista in modo da partire pulito ogni volta
//   list.innerHTML = "";
// ciclo pets e genero un list-item per ogni pet
//   pets.forEach((pet) => {
//     list.innerHTML += `
//             <li class="list-group-item ${
//               pets.some(
//                 // confrontiamo l'ownerName di QUESTO pet (pet) con ogni altro ownerName,
//                 // facendo attenzione a _saltare_ noi stessi (altrimenti tornerebbe sempre true)
//                 (p) => p.petName !== pet.petName && p.ownerName === pet.ownerName
//               )
//                 ? // se troviamo un match con un pet precedente, assegniamo una classe CSS
//                   // a entrambi ("same-owner") che li colorerà
//                   "same-owner"
//                 : ""
//             }">
//                 ${pet.petName} - ${pet.species} ${pet.breed} - ${pet.ownerName}
//             </li>
//         `;
//   });
// };

const generateList = function () {
  const list = document.querySelector(".list-group");
  list.innerHTML = ""; //svuota la lista così da non ricopiare gli elementi già creati!
  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerHTML = "Nome: " + pet.petName + " - Specie: " + pet.species + " - Razza: " + pet.breed + " - Proprietario: " + pet.ownerName;
    list.appendChild(listItem);
  });
};
