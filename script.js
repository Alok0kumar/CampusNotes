// Sample materials data (Add as many as you want)



const materials = [
  // 1st Year - CSE
  {
    year: "1st Year",
    branch: "CSE",
    subject: "Physics",
    title: "Physics Notes - Unit 1",
    link: "https://drive.google.com/file/d/1ABCDEF123456789/view"
  },
  {
    year: "1st Year",
    branch: "CSE",
    subject: "Physics",
    title: "Physics PPT - Kinematics",
    link: "https://drive.google.com/file/d/1ZYXWVUT987654321/view"
  },

  // 2nd Year - CSE
  {
    year: "2nd Year",
    branch: "CSE",
    subject: "DBMS",
    title: "DBMS Unit 1 PPT",
    link: "https://drive.google.com/file/d/1DBMS123456789/view"
  },
  {
    year: "2nd Year",
    branch: "CSE",
    subject: "DBMS",
    title: "DBMS Assignment 1",
    link: "https://drive.google.com/file/d/1ASSIGNDBMS98765/view"
  },

  // 3rd Year - ECE
  {
    year: "3rd Year",
    branch: "ECE",
    subject: "Digital Electronics",
    title: "Digital Logic Gates Notes",
    link: "https://drive.google.com/file/d/1DIGITAL123456789/view"
  },
  {
    year: "3rd Year",
    branch: "ECE",
    subject: "Digital Electronics",
    title: "Flip-Flops PPT",
    link: "https://drive.google.com/file/d/1FLIPFLOP456789/view"
  },

  // 3rd Year - MECH
  {
    year: "3rd Year",
    branch: "MECH",
    subject: "Thermodynamics",
    title: "Thermodynamics - Unit 2",
    link: "https://drive.google.com/file/d/1THERMO123456789/view"
  },
  {
    year: "3rd Year",
    branch: "MECH",
    subject: "Thermodynamics",
    title: "Thermodynamics PPT - Laws of Thermo",
    link: "https://drive.google.com/file/d/1THERMOPPT98765/view"
  },

  // 4th Year - CIVIL
  {
    year: "4th Year",
    branch: "CIVIL",
    subject: "Structural Analysis",
    title: "Structural Analysis Notes - Beams",
    link: "https://drive.google.com/file/d/1STRUCT123456789/view"
  },
  {
    year: "4th Year",
    branch: "CIVIL",
    subject: "Structural Analysis",
    title: "Moment Distribution Method PPT",
    link: "https://drive.google.com/file/d/1STRUCTPPT98765/view"
  }
];


// Update subjects based on selected year and branch
const yearSelect = document.getElementById("yearSelect");
const branchSelect = document.getElementById("branchSelect");
const subjectSelect = document.getElementById("subjectSelect");
const materialList = document.getElementById("materialList");

function updateSubjects() {
  const year = yearSelect.value;
  const branch = branchSelect.value;

  const subjects = new Set();

  materials.forEach((item) => {
    if (item.year === year && item.branch === branch) {
      subjects.add(item.subject);
    }
  });

  subjectSelect.innerHTML = '<option value="">Select Subject</option>';
  subjects.forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });
}

// Filter materials and display them
function displayMaterials() {
  const year = yearSelect.value;
  const branch = branchSelect.value;
  const subject = subjectSelect.value;

  const filtered = materials.filter((item) =>
    item.year === year && item.branch === branch && item.subject === subject
  );

  materialList.innerHTML = '';

  if (filtered.length === 0) {
    materialList.innerHTML = '<p>No materials found.</p>';
    return;
  }

  filtered.forEach((material) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${material.title}</h3>
      <p>Subject: ${material.subject}</p>
      <a href="${material.link}" target="_blank">View Material</a>
    `;

    materialList.appendChild(card);
  });
}

// Event Listeners
yearSelect.addEventListener("change", () => {
  updateSubjects();
  materialList.innerHTML = '';
});

branchSelect.addEventListener("change", () => {
  updateSubjects();
  materialList.innerHTML = '';
});

subjectSelect.addEventListener("change", displayMaterials);

