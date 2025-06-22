// Sample student data
const students = [
  { id: 1, name: "Ananya", department: "CSE" },
  { id: 2, name: "Rahul", department: "ECE" },
  { id: 3, name: "Bhavya", department: "CSE" },
  { id: 4, name: "Karan", department: "ME" },
  { id: 5, name: "Priya", department: "ECE" }
];

// Get the output container
const outputDiv = document.getElementById("output");

/**
 * Display a list of students using map and destructuring.
 */
const displayStudents = (list) => {
  outputDiv.innerHTML = ""; // Clear old content

  if (list.length === 0) {
    outputDiv.innerHTML = "<p>No students found.</p>";
    return;
  }

  // Use .map() and destructuring to create cards
  list.map(({ name, department }) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<strong>${name}</strong> — ${department}`;
    outputDiv.appendChild(card);
  });
};

// Show all students by default
displayStudents(students);

/**
 * Find a student by name using .find() and arrow functions
 */
const findStudent = () => {
  const nameInput = document.getElementById("searchName").value.trim().toLowerCase();

  // Use .find() with destructuring
  const found = students.find(({ name }) => name.toLowerCase() === nameInput);

  // Display result or show not found message
  found
    ? displayStudents([found])
    : (outputDiv.innerHTML = "<p>No student found with that name.</p>");
};

/**
 * Filter students by department using .filter()
 */
const filterByDepartment = () => {
  const dept = document.getElementById("departmentFilter").value;

  // If no department selected, show all
  if (dept === "") {
    displayStudents(students);
    return;
  }

  // Filter using arrow + destructuring
  const filtered = students.filter(({ department }) => department === dept);
  displayStudents(filtered);
};
