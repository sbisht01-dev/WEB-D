// console.log(fullname);
document.addEventListener("DOMContentLoaded", function () {
  // Function to get URL parameters
  function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    // console.log(name);
    const regex = new RegExp("[?&]" + name + "( =([^&#]*)|&|#|$)");
    const results = regex.exec(window.location.href);
    // console.log(results);

    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  // Retrieve product details from URL parameters
  const fullName = getUrlParameter("fullName");
  const tagline = getUrlParameter("tagline");
  const college = getUrlParameter("college");
  const degree = getUrlParameter("degree");
  const graduationYear = getUrlParameter("graduationYear");
  const skills = getUrlParameter("skills");
  const projects = getUrlParameter("projects");
  const achievements = getUrlParameter("achievements");
  const certifications = getUrlParameter("certifications");
  const contactEmail = getUrlParameter("contactEmail");
  const socialMedia = getUrlParameter("socialMedia");
  const details = [];
  details.push(
    // fullName,
    tagline,
    college,
    degree,
    graduationYear,
    skills,
    projects,
    achievements,
    certifications,
    contactEmail,
    socialMedia
  );
  console.log(details);
  //   console.log("URL:", window.location.href);

  //   const fullName = getUrlParameter("fullname");
  //   console.log("Raw Full Name:", fullName);

  //   const decodedFullName = decodeURIComponent(fullName);
  //   console.log("Decoded Full Name:", decodedFullName);
});
