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
const child = document.getElementById("children");

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
    skills = ["верстка", "js"]
  ) {
    super(name, surname, age, organization, floor);
    this.skills = skills;
    this.lvl = lvl;
  }
}

class JunFrontEndDev extends FrontEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl,
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, lvl, (skills = []));
    this.salary = salary;
    this.experience = experience;
  }
  pushSkills() {
    let newSkills = skillsInput.value.split(",");
    newSkills.forEach((item) => {
      this.skills.push(item);
    });
  }
}

class MidFrontEndDev extends FrontEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl,
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, lvl, (skills = []));
    this.salary = salary;
    this.experience = experience;
  }
  pushSkills() {
    let newSkills = skillsInput.value.split(",");
    newSkills.forEach((item) => {
      this.skills.push(item);
    });
  }
}

class SenFrontEndDev extends FrontEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl,
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, lvl, (skills = []));
    this.salary = salary;
    this.experience = experience;
  }
  pushSkills() {
    let newSkills = skillsInput.value.split(",");
    newSkills.forEach((item) => {
      this.skills.push(item);
    });
  }
}

class BackEndDev extends WebProgrammer {
  constructor(name, surname, age, organization, floor, lvl, skills = []) {
    super(name, surname, age, organization, floor);
    lvl = this.skills;
    skills = this.skills;
  }
}

class JunBackEndDev extends BackEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl,
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, lvl, (skills = []));
    this.salary = salary;
    this.experience = experience;
  }
  pushSkills() {
    let newSkills = skillsInput.value.split(",");
    newSkills.forEach((item) => {
      this.skills.push(item);
    });
  }
}

class MidBackEndDev extends BackEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl,
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, lvl, (skills = []));
    this.salary = salary;
    this.experience = experience;
  }
  pushSkills() {
    let newSkills = skillsInput.value.split(",");
    newSkills.forEach((item) => {
      this.skills.push(item);
    });
    console.log(this.skills);
  }
}

class SenBackEndDev extends BackEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl,
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, lvl, (skills = []));
    this.salary = salary;
    this.experience = experience;
  }
  pushSkills() {
    let newSkills = skillsInput.value.split(",");
    newSkills.forEach((item) => {
      this.skills.push(item);
    });
    console.log(this.skills);
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

  saveBtn.addEventListener("click", () => {
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
  if (selectArea.value === "front" && selectLvl.value === "jun") {
    const newElem = new JunFrontEndDev();
    newElem.pushSkills();
    console.log(newElem);
  } else if (selectArea.value === "front" && selectLvl.value === "middle") {
    const newElem = new MidFrontEndDev();
    newElem.pushSkills();
    console.log(newElem);
  } else if (selectArea.value === "front" && selectLvl.value === "senior") {
    const newElem = new SenFrontEndDev();
    newElem.pushSkills();
    console.log(newElem);
  } else {
    console.log("ошибка");
  }
};

addOptions();
ifEmpty();
