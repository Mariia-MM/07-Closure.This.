const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// function#1

function getMyTaxes(salary) {
  return (this.tax * salary).toFixed(2);
}
console.log(`My taxes:`, getMyTaxes.call(latvia, 1000));

// function#2

function getMiddleTaxes() {
  return (this.tax * this.middleSalary).toFixed(2);
}

[ukraine, latvia, litva].forEach((country) =>
  console.log(`Middle taxes:`, getMiddleTaxes.call(country))
);

// function#3

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
[ukraine, latvia, litva].forEach((country) =>
  console.log(`Total taxes :`, getTotalTaxes.call(country))
);

// function#4

function getMySalary() {
  setInterval(() => {
    salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    taxes = +(this.tax * salary).toFixed(2);
    profit = +(salary - taxes).toFixed(2);
    let salaryInfo = {
      salary: salary,
      taxes: taxes,
      profit: profit,
    };
    return console.log(salaryInfo);
  }, 10000);
}
getMySalary.call(ukraine);
