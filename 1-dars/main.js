let login = document.querySelector(".login");
let passwordID = document.querySelector(".password");
let submitButton = document.querySelector("#submitButton");
let errorMessage = document.querySelector("#error-message");
let toggleModeButton = document.createElement("button");
toggleModeButton.textContent = "Dark Mode";
toggleModeButton.id = "toggleMode";
document.body.prepend(toggleModeButton);

console.log(login);
console.log(passwordID);

errorMessage.style.display = "none";
submitButton.disabled = false;

toggleModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleModeButton.textContent = "Light Mode";
  } else {
    toggleModeButton.textContent = "Dark Mode";
  }
});

submitButton.addEventListener("click", () => {
  const students = [
    {
      id: 12345,
      name: "Sobirjon",
      surname: "Fayziyev",
      coin: 366,
      login: 12345,
      password: 54321,
      teacher: "Ertan Emirhan",
      daraja: "⭐⭐⭐⭐",
      gurux: "F2-2002",
    },
    {
      id: 23456,
      name: "Yahiyo",
      surname: "Komilov",
      coin: 678,
      login: 23456,
      password: 65432,
      teacher: "Ertan Emirhan",
      daraja: "⭐",
      gurux: "F2-2002",
    },
    {
      id: 34567,
      name: "Otabeni rangi",
      surname: "G'ayratov",
      coin: 678,
      login: 34567,
      password: 76543,
      teacher: "Ertan Emirhan",
      daraja: "⭐⭐⭐⭐",
      gurux: "F2-2002",
    },
    {
      id: 45678,
      name: "Anvar",
      surname: "Tashkentov",
      coin: 123,
      login: 45678,
      password: 87654,
      teacher: "Ertan Emirhan",
      daraja: "⭐⭐",
      gurux: "F2-2002",
    },
    {
      id: 56789,
      name: "Alisher",
      surname: "Navoi",
      coin: 900,
      login: 56789,
      password: 98765,
      teacher: "Ertan Emirhan",
      daraja: "⭐⭐⭐⭐",
      gurux: "F2-2002",
    },
    {
      id: 67890,
      name: "Jamshid",
      surname: "O'tganov",
      coin: 321,
      login: 67890,
      password: 12345,
      teacher: "Ertan Emirhan",
      daraja: "⭐⭐⭐",
      gurux: "F2-2002",
    },
  ];

  let newLogin = login.value;
  let newPasswordID = passwordID.value;

  let studentFound = students.find(
    (student) =>
      Number(newLogin) === student.login &&
      Number(newPasswordID) === student.password
  );

  if (studentFound) {
    localStorage.setItem("user", JSON.stringify(studentFound));
    console.log(studentFound);
    window.location.href = "./next.html";
  } else {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Вы ввели неправильный ID или пароль";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 3000);
  }

  login.value = "";
  passwordID.value = "";
});
