// Sample materials data (Add as many as you want)
const materials = [
  // 2nd Year - IT
  {
    year: "2nd Year",
    branch: "IT",
    subject: "Artificial Intelligence",
    title: "Unit-1",
    faculty: "Dr. Rajeev Kumar",
    link: "https://drive.google.com/file/d/1kqheALi7w7v10fnG39yqC1hHVAn_dXEl/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "Artificial Intelligence",
    title: "Unit-2",
    faculty: "Roshni Prasad",
    link: "https://drive.google.com/file/d/1MclKwdqaw8y6Y8dUIOcp6vPlwFO4nLBs/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "AICE",
    title: "Unit-1",
    faculty: "Ms. Kumari Kajal Kishore",
    link: "https://drive.google.com/file/d/14hmSP69f74lurfInC2DgFBVFR9-1aNSl/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "AICE",
    title: "Unit-2",
    faculty: "Ms. Kumari Kajal Kishore",
    link: "https://drive.google.com/file/d/1n5-91FGAxE1kC5GFQrcXmzHp2Fb_k6-9/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "CAPP",
    title: "Unit-1",
    faculty: "Ankur Kumar Varshney",
    link: "https://drive.google.com/file/d/1HlLy-tSUxSo0Gn5uWfrvFaY-Hygi89P_/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "CAPP",
    title: "Unit-2",
    faculty: "Dr. Ankita Rani",
    link: "https://drive.google.com/file/d/10CRoHIkT_OekP2qmvr3erXLtpnDtQNJz/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "DSA",
    title: "Unit-1",
    faculty: "VIKRANT MALIK",
    link: "https://drive.google.com/file/d/1fr4xOYNQWO0RchjobO2Pbnk4ZWku_GYM/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "DSA",
    title: "Unit-2",
    faculty: "Dr. Megha Gupta ",
    link: "https://drive.google.com/file/d/1SlCTbZXPBMySZ-iJLCYo6M5uoRI669Bp/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "Operating System",
    title: "Unit-1",
    faculty: "Mr. Atul Garg",
    link: "https://drive.google.com/file/d/1lsD19I_X9UlsdaiT19e5E-ulGoHnVFWA/view?usp=sharing"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "Technical Communication",
    title: "Unit-1",
    faculty: "Not Available",
    link: "https://drive.google.com/file/d/1VFCGqmEVDKvcbLWyjuJDM4At6puxwdXB/view?usp=drive_link"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "Technical Communication",
    title: "Unit-2",
    faculty: "Not Available",
    link: "https://drive.google.com/file/d/1K5UOi_wOaNVuzL67JbU6BR1Iuc4vOhtD/view?usp=drive_link"
  },
  {
    year: "2nd Year",
    branch: "IT",
    subject: "Technical Communication",
    title: "Unit-3",
    faculty: "Not Available",
    link: "https://drive.google.com/file/d/1p9TVlJUq0a4TWhDM1eWOWhnyOE7jh779/view?usp=drive_link"
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

  const filtered = materials.filter(
    (item) => item.year === year && item.branch === branch && item.subject === subject
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
      <p><strong>Subject:</strong> ${material.subject}</p>
      <p><strong>Faculty:</strong> ${material.faculty}</p>
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
