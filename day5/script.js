let formData = {
  name: "",
  email: "",
  age: "",
  address: ""
};

let users = [];

const form = document.getElementById("profileForm");
const userList = document.getElementById("userList");

// 🔁 Arrow function + Destructuring + Spread
const handleInput = (e) => {
  const { name, value } = e.target;
  formData = { ...formData, [name]: value };
};

form.addEventListener("input", handleInput);

// 🚀 Arrow + Spread + Rest + Destructuring
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { name, email, age, address } = formData;

  if (!validateFields(name, email, age)) {
    alert("Please fill all required fields!");
    return;
  }

  const { address: _, ...userWithoutAddress } = formData;

  users = [...users, userWithoutAddress]; // Add user immutably
  renderUsers(users);
  form.reset();
  formData = { name: "", email: "", age: "", address: "" }; // Reset
});

// ⚙️ Arrow + Rest
const validateFields = (...fields) => {
  return fields.every(field => field.trim() !== "");
};

// 🧩 map() + Destructuring
const renderUsers = (users) => {
  userList.innerHTML = users.map(({ name, email, age }, index) => `
    <div class="user-card">
      <strong>User #${index + 1}</strong><br/>
      Name: ${name}<br/>
      Email: ${email}<br/>
      Age: ${age}
    </div>
  `).join("");
};
