"use strict";
class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

class AddressBook {
  constructor() {
    this.contacts = [
      new Contact("Snoopy", "snoopy@cooldog.com", "111-222-3333", "my dog"),
      new Contact("Porkchop", "porkchop@doug.com", "333-555-9999", "a cool friend")
    ];
  }
  add(info) {
    this.contacts.push(info);
    // this.contacts = [...this.contacts, { ...info }];
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
    // const index = this.contacts.findIndex(info => info.name === name);
    // this.contacts = [...this.contacts.slice(0, index), ...this.contacts.slice(index + 1)];
  }
  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
    }
  }
  display() {
    for (let index in this.contacts) {
      const contacts = document.querySelector("section.contact_container");
      const el = document.createElement("div");
      el.className = "contact_cards"
      el.innerHTML = `
        <p>Name: ${this.contacts[index].name}</p>
        <p>Email: ${this.contacts[index].email} </p>
        <p>Phone: ${this.contacts[index].phone}</p>
        <p>Relation: ${this.contacts[index].relation}</p>
      `;
      contacts.append(el);
    }
  }
}

const book = new AddressBook();

book.display();

const button = document.querySelector("button.add_btn");

button.addEventListener("click", function (event) {
  if (event.target.classList.contains("add_btn")) {
    console.log(event.target.attributes);
    // add(event.target);
  }
});


// while (true) {
//   let choice = prompt("Add, Delete, Print, or Quit?");
//   if (choice === "Quit") {
//     console.log("Goodbye.");
//     break;
//   } else if (choice === "Print") {
//     book.print();
//   } else if (choice === "Delete") {
//     let deleteChoice = prompt("Delete by index or by name?");
//     if (deleteChoice === "Name") {
//       book.deleteByName(prompt("Enter a name."));
//     } else if (deleteChoice === "Index") {
//       book.deleteAt(prompt("Index to delete?"));
//     }
//   } else if (choice === "Add") {
//     book.add(new Contact(
//       prompt("Enter a name."),
//       prompt("Enter an email."),
//       prompt("Enter a phone number."),
//       prompt("Enter a relation.")
//     ));
//   }
// }