"use strict";

class WebProgrammer {
  constructor(name, surname, age, organization, floor) {
    name = this.name;
    surname = this.surname;
    age = this.age;
    organization = this.organization;
    floor = this.floor;
  }
}

class FronEndDev extends WebProgrammer {
  constructor(name, surname, age, organization, floor, lvl = [], skills = []) {
    super(name, surname, age, organization, floor);
    lvl = this.lvl;
    skills = this.skills;
  }
}

class JunFrontEndDev extends FronEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl = [],
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, (lvl = []), (skills = []));
    salary = this.salary;
    experience = this.experience;
  }
}

class MidFrontEndDev extends FronEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl = [],
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, (lvl = []), (skills = []));
    salary = this.salary;
    experience = this.experience;
  }
}

class SenFrontEndDev extends FronEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl = [],
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, (lvl = []), (skills = []));
    salary = this.salary;
    experience = this.experience;
  }
}

class BackEndDev extends WebProgrammer {
  constructor(name, surname, age, organization, floor, lvl = [], skills = []) {
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
    lvl = [],
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, (lvl = []), (skills = []));
    salary = this.salary;
    experience = this.experience;
  }
}

class MidBackEndDev extends BackEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl = [],
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, (lvl = []), (skills = []));
    salary = this.salary;
    experience = this.experience;
  }
}

class SenBackEndDev extends BackEndDev {
  constructor(
    name,
    surname,
    age,
    organization,
    floor,
    lvl = [],
    skills = [],
    salary,
    experience
  ) {
    super(name, surname, age, organization, floor, (lvl = []), (skills = []));
    salary = this.salary;
    experience = this.experience;
  }
}
