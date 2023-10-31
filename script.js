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
    const table = document.querySelector(".table");

    const newRow = document.createElement("tr");
    newRow.classList.add("addrow");
    table.appendChild(newRow);

    for (let i = 0; i <= 10; i++) {
      const newTd = document.createElement("td");
      newTd.classList.add("column");
      newTd.id = i;
      newRow.appendChild(newTd);
      if (newTd.id === "0") {
        this.name = nameInput.value;
        newTd.innerHTML = `<p>${this.name}</p>`;
      } else if (newTd.id === "1") {
        this.surname = subnameInput.value;
        newTd.innerHTML = `<p>${this.surname}</p>`;
      } else if (newTd.id === "2") {
        this.age = ageInput.value;
        newTd.innerHTML = `<p>${this.age}</p>`;
      } else if (newTd.id === "3") {
        this.organization = orgInput.value;
        newTd.innerHTML = `<p>${this.organization}</p>`;
      } else if (newTd.id === "4") {
        newTd.innerHTML = `<p>${this.skills}</p>`;
      } else if (newTd.id === "5" && selectFloor.value === "male") {
        this.floor = "мужской";
        newTd.innerHTML = `<p>${this.floor}</p>`;
      } else if (newTd.id === "5" && selectFloor.value === "female") {
        this.floor = "женский";
        newTd.innerHTML = `<p>${this.floor}</p>`;
      } else if (newTd.id === "6" && child.checked) {
        this.child = "есть";
        newTd.innerHTML = `<p>${this.child}</p>`;
      } else if (newTd.id === "6" && !child.checked) {
        this.child = "нет";
        newTd.innerHTML = `<p>${this.child}</p>`;
      } else if (newTd.id === "7") {
        this.lvl = selectLvl.value;
        newTd.innerHTML = `<p>${this.lvl}</p>`;
      } else if (newTd.id === "8") {
        this.experience = selectExp.value;
        newTd.innerHTML = `<p>${this.experience}</p>`;
      } else if (newTd.id === "9") {
        this.salary = salaryInput.value;
        newTd.innerHTML = `<p>${this.salary}</p>`;
      } else if (newTd.id === "10") {
        const delBtn = document.createElement("button");
        delBtn.classList.add("delete-button");
        delBtn.textContent = "Удалить";
        newTd.appendChild(delBtn);
      }
    }
    this.deleteRow();
    this.pushObjectData();
  }

  deleteRow() {
    const alldelBtn = document.querySelectorAll(".delete-button");
    const alladdrow = document.querySelectorAll(".addrow");

    console.log(alldelBtn);

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
    console.log(objectData);
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
    const table = document.querySelector(".table");

    const newRow = document.createElement("tr");
    newRow.classList.add("addrow");
    table.appendChild(newRow);

    for (let i = 0; i <= 10; i++) {
      const newTd = document.createElement("td");
      newTd.classList.add("column");
      newTd.id = i;
      newRow.appendChild(newTd);
      if (newTd.id === "0") {
        this.name = nameInput.value;
        newTd.innerHTML = `<p>${this.name}</p>`;
      } else if (newTd.id === "1") {
        this.surname = subnameInput.value;
        newTd.innerHTML = `<p>${this.surname}</p>`;
      } else if (newTd.id === "2") {
        this.age = ageInput.value;
        newTd.innerHTML = `<p>${this.age}</p>`;
      } else if (newTd.id === "3") {
        this.organization = orgInput.value;
        newTd.innerHTML = `<p>${this.organization}</p>`;
      } else if (newTd.id === "4") {
        newTd.innerHTML = `<p>${this.skills}</p>`;
      } else if (newTd.id === "5" && selectFloor.value === "male") {
        this.floor = "мужской";
        newTd.innerHTML = `<p>${this.floor}</p>`;
      } else if (newTd.id === "5" && selectFloor.value === "female") {
        this.floor = "женский";
        newTd.innerHTML = `<p>${this.floor}</p>`;
      } else if (newTd.id === "6" && child.checked) {
        this.child = "есть";
        newTd.innerHTML = `<p>${this.child}</p>`;
      } else if (newTd.id === "6" && !child.checked) {
        this.child = "нет";
        newTd.innerHTML = `<p>${this.child}</p>`;
      } else if (newTd.id === "7") {
        this.lvl = selectLvl.value;
        newTd.innerHTML = `<p>${this.lvl}</p>`;
      } else if (newTd.id === "8") {
        this.experience = selectExp.value;
        newTd.innerHTML = `<p>${this.experience}</p>`;
      } else if (newTd.id === "9") {
        this.salary = salaryInput.value;
        newTd.innerHTML = `<p>${this.salary}</p>`;
      } else if (newTd.id === "10") {
        const delBtn = document.createElement("button");
        delBtn.classList.add("delete-button");
        delBtn.textContent = "Удалить";
        newTd.appendChild(delBtn);
      }
    }
    this.pushObjectData();
    this.deleteRow();
  }

  deleteRow() {
    const alldelBtn = document.querySelectorAll(".delete-button");
    const alladdrow = document.querySelectorAll(".addrow");

    console.log(alldelBtn);

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
    console.log(objectData);
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

const addNewElem = function () {
  if (selectArea.value === "front") {
    const frontElem = new FrontEndDev();
    frontElem.pushSkills();
    frontElem.addNewRow();
    console.log(frontElem);
  } else if (selectArea.value === "back") {
    const backElem = new BackEndDev();
    backElem.pushSkills();
    backElem.addNewRow();
    console.log(backElem);
  }
};

ifEmpty();
