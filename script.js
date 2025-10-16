// Завдання 1
const bankAccount = {
  ownerName: "Іван Петренко",
  accountNumber: "UA123456789",
  balance: 1000,

  deposit() {
    const add = Number(prompt("Введіть суму для поповнення рахунку:"));
    if (!Number.isNaN(add) && add > 0) {
      this.balance += add;
      alert(`Рахунок поповнено на ${add} грн. Поточний баланс: ${this.balance} грн`);
    } else {
      alert("Невірна сума!");
    }
  },

  withdraw() {
    const withdraw = Number(prompt("Введіть суму для зняття готівки:"));
    if (!Number.isNaN(withdraw) && withdraw > 0) {
      if (withdraw <= this.balance) {
        this.balance -= withdraw;
        alert(`Ви зняли ${withdraw} грн. Залишок на рахунку: ${this.balance} грн`);
      } else {
        alert("Недостатньо коштів на рахунку!");
      }
    } else {
      alert("Невірна сума!");
    }
  },
};




// Завдання 2

const weather = {
  temperature: 0,
  humidity: 50,
  windSpeed: 10,

  checkTemperature() {
    this.temperature = Number(prompt("Введіть температуру (°C):"));
    if (this.temperature < 0) {
      alert("Температура нижче 0 градусів Цельсія");
      return true;
    } else {
      alert("Температура 0 або вище");
      return false;
    }
  },
};




// Завдання 3

const user = {
  name: "admin",
  email: "admin@gmail.com",
  password: "12345",

  login() {
    const enteredEmail = prompt("Введіть email:");
    const enteredPassword = prompt("Введіть пароль:");
    if (enteredEmail === this.email && enteredPassword === this.password) {
      alert("Вхід успішний ✅");
    } else {
      alert("Невірний email або пароль ❌");
    }
  },
};



// Завдання 4

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 9,

  checkRating() {
    if (this.rating > 8) {
      return true;
    } else {
      return false;
    }
  },
};

// виведення властивостей у консоль
console.log("Назва:", movie.title);
console.log("Режисер:", movie.director);
console.log("Рік:", movie.year);
console.log("Рейтинг:", movie.rating);
console.log("Рейтинг вище 8:", movie.checkRating());
