"use strict";
const saveBtn = document.getElementById("save");
const selectArea = document.getElementById("area");
const selectLvl = document.getElementById("lvl");
const nameInput = document.getElementById("name");
const subnameInput = document.getElementById("subname");
const ageInput = document.getElementById("age");
const orgInput = document.getElementById("org");
const skillsInput = document.getElementById("skills");
const selectExp = document.getElementById("exp");
const selectFloor = document.getElementById("floor");
const salaryInput = document.getElementById("salary");
const child = document.getElementById("children");
const newTable = document.getElementById("new-table");

const objectData = [];

class WebProgrammer {
  constructor(name, surname, age, organization, floor) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.organization = organization;
    this.floor = floor;
  }
}

class FrontEndDev extends WebProgrammer {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl,
    skills = [],
    salary,
    experience,
    child
  ) {
    super(name, surname, age, organization, floor);
    this.skills = skills;
    this.lvl = lvl;
    this.salary = salary;
    this.experience = experience;
    this.child = child;
  }

  pushSkills() {
    let newSkills = skillsInput.value.split(",");
    newSkills.forEach((item) => {
      this.skills.push(item);
    });
  }

  addNewRow() {
    newTable.innerHTML = "";
    let programmer = JSON.parse(localStorage.getItem("programmer"));
    programmer.forEach((item) => {
      const tr = document.createElement("tr");
      tr.classList.add("new-row");
      tr.innerHTML =
        `<td class="column">${item.name}</td>` +
        `<td class="column">${item.surname}</td>` +
        `<td class="column">${item.age}</td>` +
        `<td class="column">${item.organization}</td>` +
        `<td class="column">${item.skills}</td>` +
        `<td class="column">${item.floor}</td>` +
        `<td class="column">${item.child}</td>` +
        `<td class="column">${item.lvl}</td>` +
        `<td class="column">${item.experience}</td>` +
        `<td class="column">${item.salary}</td>` +
        `<td class="column"><button class="delete-button">Удалить</button></td>`;
      newTable.append(tr);
    });
  }

  deleteRow() {
    const alldelBtn = document.querySelectorAll(".delete-button");
    const alladdrow = document.querySelectorAll(".new-row");
    let programmers = JSON.parse(localStorage.getItem("programmer"));

    for (let i = 0; i <= alldelBtn.length - 1; i++) {
      alldelBtn[i].addEventListener("click", () => {
        for (let j = 0; j <= alladdrow.length - 1; j++) {
          if (i === j) {
            alladdrow[j].remove();
          }
        }
      });
    }
  }

  getValue() {
    this.name = nameInput.value;
    this.surname = subnameInput.value;
    this.age = ageInput.value;
    this.organization = orgInput.value;

    if (selectFloor.value === "male") {
      this.floor = "мужской";
    } else if (selectFloor.value === "female") {
      this.floor = "женский";
    }

    if (selectLvl.value === "jun") {
      this.lvl = "junior";
    } else if (selectLvl.value === "middle") {
      this.lvl = "middle";
    } else if (selectLvl.value === "senior") {
      this.lvl = "senior";
    }

    this.salary = salaryInput.value;

    if (selectExp.value === "1 year") {
      this.experience = "1 год";
    } else if (selectExp.value === "3 years") {
      this.experience = "3 года";
    } else if (selectExp.value === "6 years ") {
      this.experience = "6 лет";
    }

    if (child.checked) {
      this.child = "есть";
    } else {
      this.child = "нет";
    }
  }

  pushObjectData() {
    const NewObjectData = {
      name: this.name,
      surname: this.surname,
      age: this.age,
      organization: this.organization,
      floor: this.floor,
      lvl: this.lvl,
      skills: this.skills,
      salary: this.salary,
      experience: this.experience,
      child: this.child,
    };

    objectData.push(NewObjectData);
  }

  addInLocalStorage() {
    localStorage.setItem("programmer", JSON.stringify(objectData));
  }

  clearInput() {
    saveBtn.value = "";
    nameInput.value = "";
    subnameInput.value = "";
    ageInput.value = "";
    orgInput.value = "";
    skillsInput.value = "";
    salaryInput.value = "";
    child.value = "";
  }
}

class BackEndDev extends WebProgrammer {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl,
    skills = [],
    salary,
    experience,
    child
  ) {
    super(name, surname, age, organization, floor);
    this.skills = skills;
    this.lvl = lvl;
    this.salary = salary;
    this.experience = experience;
    this.child = child;
  }

  pushSkills() {
    let newSkills = skillsInput.value.split(",");
    newSkills.forEach((item) => {
      this.skills.push(item);
    });
  }

  addNewRow() {
    newTable.innerHTML = "";
    let programmer = JSON.parse(localStorage.getItem("programmer"));
    programmer.forEach((item) => {
      const tr = document.createElement("tr");
      tr.classList.add("new-row");
      tr.innerHTML =
        `<td class="column">${item.name}</td>` +
        `<td class="column">${item.surname}</td>` +
        `<td class="column">${item.age}</td>` +
        `<td class="column">${item.organization}</td>` +
        `<td class="column">${item.skills}</td>` +
        `<td class="column">${item.floor}</td>` +
        `<td class="column">${item.child}</td>` +
        `<td class="column">${item.lvl}</td>` +
        `<td class="column">${item.experience}</td>` +
        `<td class="column">${item.salary}</td>` +
        `<td class="column"><button class="delete-button">Удалить</button></td>`;
      newTable.append(tr);
    });
  }

  deleteRow() {
    const alldelBtn = document.querySelectorAll(".delete-button");
    const alladdrow = document.querySelectorAll(".row");

    console.log(alldelBtn);

    for (let i = 0; i <= alldelBtn.length - 1; i++) {
      alldelBtn[i].addEventListener("click", () => {
        for (let j = 0; j <= alladdrow.length - 1; j++) {
          if (i === j) {
            alladdrow[j].remove();
            localStorage.clear();
          }
        }
      });
    }
  }

  getValue() {
    this.name = nameInput.value;
    this.surname = subnameInput.value;
    this.age = ageInput.value;
    this.organization = orgInput.value;

    if (selectFloor.value === "male") {
      this.floor = "мужской";
    } else if (selectFloor.value === "female") {
      this.floor = "женский";
    }

    if (selectLvl.value === "jun") {
      this.lvl = "junior";
    } else if (selectLvl.value === "middle") {
      this.lvl = "middle";
    } else if (selectLvl.value === "senior") {
      this.lvl = "senior";
    }

    this.salary = salaryInput.value;

    if (selectExp.value === "1 year") {
      this.experience = "1 год";
    } else if (selectExp.value === "3 years") {
      this.experience = "3 года";
    } else if (selectExp.value === "6 years ") {
      this.experience = "6 лет";
    }

    if (child.checked) {
      this.child = "есть";
    } else {
      this.child = "нет";
    }
  }

  pushObjectData() {
    const NewObjectData = {
      name: this.name,
      surname: this.surname,
      age: this.age,
      organization: this.organization,
      floor: this.floor,
      lvl: this.lvl,
      skills: this.skills,
      salary: this.salary,
      experience: this.experience,
      child: this.child,
    };

    objectData.push(NewObjectData);
  }

  addInLocalStorage() {
    localStorage.setItem("programmer", JSON.stringify(objectData));
  }

  clearInput() {
    saveBtn.value = "";
    nameInput.value = "";
    subnameInput.value = "";
    ageInput.value = "";
    orgInput.value = "";
    skillsInput.value = "";
    salaryInput.value = "";
    child.value = "";
  }
}

const addOptions = function () {
  const addOptions = document.getElementById("add-options");
  const areaSelect = document.getElementById("area");

  areaSelect.onchange = function () {
    addOptions.style.cssText = "display: block";
  };
};

const ifEmpty = function () {
  const AllInputs = document.querySelectorAll("input[type=text]");
  let count;

  saveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    AllInputs.forEach((item) => {
      if (item.value !== "") {
        count = 0;
      } else if (item.value === "") {
        count = 1;
      }
    });

    if (count === 0) {
      addNewElem();
    } else if (count === 1) {
      alert("Заполните поля!");
    }
  });
};

const render = function () {
  if (localStorage.getItem("programmer")) {
    newTable.innerHTML = "";
    let programmer = JSON.parse(localStorage.getItem("programmer"));
    programmer.forEach((item) => {
      const tr = document.createElement("tr");
      tr.classList.add("new-row");
      tr.innerHTML =
        `<td class="column">${item.name}</td>` +
        `<td class="column">${item.surname}</td>` +
        `<td class="column">${item.age}</td>` +
        `<td class="column">${item.organization}</td>` +
        `<td class="column">${item.skills}</td>` +
        `<td class="column">${item.floor}</td>` +
        `<td class="column">${item.child}</td>` +
        `<td class="column">${item.lvl}</td>` +
        `<td class="column">${item.experience}</td>` +
        `<td class="column">${item.salary}</td>` +
        `<td class="column"><button class="delete-button">Удалить</button></td>`;
      newTable.append(tr);
    });
  }
};

const addNewElem = function () {
  if (selectArea.value === "front") {
    const frontElem = new FrontEndDev();
    frontElem.pushSkills();
    frontElem.getValue();
    frontElem.pushObjectData();
    frontElem.addInLocalStorage();
    frontElem.addNewRow();
    frontElem.deleteRow();
    // frontElem.clearInput();
  } else if (selectArea.value === "back") {
    const backElem = new BackEndDev();
    backElem.pushSkills();
    backElem.getValue();
    backElem.pushObjectData();
    backElem.addInLocalStorage();
    backElem.addNewRow();
    backElem.deleteRow();
    // backElem.clearInput();
  }
};

render();
ifEmpty();
