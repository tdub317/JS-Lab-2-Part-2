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
    // this.contacts.push(info);
    this.contacts = [...this.contacts, { ...info }];
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
    // const index = this.contacts.findIndex(info => info.name === name);
    // !!!!!!!if using slice it'll delete everything after index WHY??
    // this.contacts = [...this.contacts.slice(0, index), ...this.contacts.slice(index + 1)];
  }
  // print() {
  //   for (let i = 0; i < this.contacts.length; i++) {
  //     console.log(`Index: ${i}, Name: ${this.contacts[i].name}, Email: ${this.contacts[i].email}, Phone: ${this.contacts[i].phone}, Relation: ${this.contacts[i].relation}`);
  //   }
  // }
  display() {
    const contacts = document.querySelector("section.contact_container");
    contacts.innerHTML = "";
    for (let index in this.contacts) {
      // const contacts = document.querySelector("section.contact_container");
      const el = document.createElement("div");
      el.className = "contact_cards"
      el.innerHTML = `
        <p>Name: ${this.contacts[index].name}</p>
        <p>Email: ${this.contacts[index].email} </p>
        <p>Phone: ${this.contacts[index].phone}</p>
        <p>Relation: ${this.contacts[index].relation}</p>
        <i i=${index} class="delete_btn material-icons">delete</i>
      `;
      contacts.append(el);
    }
  }
}

const book = new AddressBook();

book.display();

const main = document.querySelector("main");

main.addEventListener("click", function (event) {
  // stops the default button submit (don't need type=button)
  event.preventDefault();
  if (event.target.classList.contains("add_btn")) {
    // console.log(event.target.attributes);
    // console.log(event.target.attributes[0].ownerElement.parentNode[0].value);
    // console.log(event.target.attributes[0].ownerElement.parentNode[1].value);
    // console.log(event.target.attributes[0].ownerElement.parentNode[2].value);
    // console.log(event.target.attributes[0].ownerElement.parentNode[3].value);
    // add classes to inputs and use query selector
    // const info_input = document.querySelectorAll(".info_input");
    const inputElements = document.querySelectorAll("input");
    // console.log(info_input);
    // book.add(new Contact(event.target.attributes[0].ownerElement.parentNode[0].value, event.target.attributes[0].ownerElement.parentNode[1].value, event.target.attributes[0].ownerElement.parentNode[2].value, event.target.attributes[0].ownerElement.parentNode[3].value));
    // book.add(new Contact(info_input[0].value, info_input[1].value, info_input[2].value, info_input[3].value));
    book.add(new Contact(inputElements[0].value, inputElements[1].value, inputElements[2].value, inputElements[3].value));
    // clears values in the input after submitting
    // BONUS make sure last input is not targeted
    for (let input of inputElements) {
      input.value = "";
      input.blur();
    }
    // console.log(document.querySelector("section.contact_container"));
    // console.log(event.target.attributes[1].ownerElement.offsetParent.firstElementChild.childNodes[3].childNodes[0], event.target.attributes[1].ownerElement.offsetParent.firstElementChild.childNodes[3].childNodes[1]);
    book.display();
  } else if (event.target.classList.contains("delete_btn")) {
    // console.log(event.target.attributes);
    // the delete button has an index attached to the parent node to find and delete specific contact
    book.deleteAt(event.target.attributes[0].value);
    event.target.parentNode.remove();
    // if display function isn't called again the deleteAt argument wont reindex
    book.display();
    // console.log(event.target.attributes[0].value); // comment out
    // console.log(book.contacts); // comment out
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