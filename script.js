"use strict";

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
}

const addOptions = function () {
  const addOptions = document.getElementById("add-options");
  const areaSelect = document.getElementById("area");

  areaSelect.onchange = function () {
    addOptions.style.cssText = "display: block";
    console.log(addOptions);
  };
};

addOptions();
