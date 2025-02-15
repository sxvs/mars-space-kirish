const student = JSON.parse(localStorage.getItem("user"));
if (student) {
  document.getElementById(
    "studentName"
  ).textContent = `${student.name} ${student.surname}`;
  document.getElementById("studentGrade").textContent = student.daraja;
  document.getElementById("studentCoin").textContent = student.coin;
  document.getElementById("studentXP").textContent = student.coin;
  document.getElementById(
    "studentTeacher"
  ).textContent = `Teacher: ${student.teacher}`;
  document.getElementById(
    "studentGroup"
  ).textContent = `Group: ${student.gurux}`;
} else {
  document.body.innerHTML = "<h1>No student data found. Please log in.</h1>";
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "./index.html";
}

function deleteFromLocalStorage() {
  localStorage.removeItem("user");
  alert("Your data has been deleted from localStorage.");
  window.location.href = "./index.html";
}
