document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("submit");
  button.addEventListener("click", routeData);

  function routeData() {
    let fullName = document.querySelector("#fullName").value;
    let tagline = document.querySelector("#tagline").value;
    let college = document.querySelector("#college").value;
    let degree = document.querySelector("#degree").value;
    let graduationYear = document.querySelector("#graduationYear").value;
    let skills = document.querySelector("#skills").value;
    let projects = document.querySelector("#projects").value;
    let achievements = document.querySelector("#achievements").value;
    let certifications = document.querySelector("#certifications").value;
    let contactEmail = document.querySelector("#contactEmail").value;
    let socialMedia = document.querySelector("#socialMedia").value;
    // console.log(fullName, degree, socialMedia, certifications, skills, college);

    const newURL = `prt.html?fullname=${encodeURIComponent(
      fullName
    )}&tagline=${encodeURIComponent(tagline)}&college=${encodeURIComponent(
      college
    )}&degree=${encodeURIComponent(degree)}&graduationYear=${encodeURIComponent(
      graduationYear
    )}&skills=${encodeURIComponent(skills)}&projects=${encodeURIComponent(
      projects
    )}&achievements=${encodeURIComponent(
      achievements
    )}&certifications=${encodeURIComponent(
      certifications
    )}&contactEmail=${encodeURIComponent(
      contactEmail
    )}&socialMedia=${encodeURIComponent(socialMedia)}`;

    window.location.href = newURL;
  }
});
