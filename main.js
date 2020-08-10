const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// function#1

function getMyTaxes(salary) {
  myTaxes = (this.tax * salary).toFixed(2);
  return console.log(`My taxes:`, myTaxes);
}
getMyTaxes.call(latvia, 1000);

// function#2

function getMiddleTaxes() {
  middleTaxes = (this.tax * this.middleSalary).toFixed(2);
  return console.log(`Middle taxes:`, middleTaxes);
}
getMiddleTaxes.call(litva);

// function#3

function getTotalTaxes() {
  totalTaxes = this.tax * this.middleSalary * this.vacancies;
  return console.log(`Total taxes:`, totalTaxes);
}
getTotalTaxes.call(ukraine);

// function#4

function getMySalary() {
  salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
  taxes = +(this.tax * salary).toFixed(2);
  profit = salary - taxes;
  return console.log({
    salary: salary,
    taxes: taxes,
    profit: profit,
  });
}
getMySalary.call(ukraine);
