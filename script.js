const project = document.querySelector(".project");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openProject = () => {
  console.log("Project is Open");
  project.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeProject = () => {
  project.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

const modal = document.querySelector(".modal");
const overcover = document.querySelector(".overcover");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overcover.classList.add("overcoveractive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overcover.classList.remove("overcoveractive");
};