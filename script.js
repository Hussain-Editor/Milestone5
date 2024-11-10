// DOM Elements
var form = document.getElementById('Resumeform');
var resumeOutput = document.getElementById('resumeOutput');
var shareableLink = document.getElementById('shareable-link');
var profilePictureInput = document.getElementById('profilepicture');
var resumeUrlInput = document.getElementById('username');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var experienceInput = document.getElementById('experience');
var skillsInput = document.getElementById('skills');
var profilePictureUrl = ''; // To store the uploaded profile picture URL
// Handle profile picture preview
profilePictureInput.addEventListener('change', function (e) {
    var _a;
    var file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePictureUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get user data from the form
    var resumeData = {
        resumeUrl: resumeUrlInput.value,
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        profilePicture: profilePictureUrl,
        experience: experienceInput.value,
        skills: skillsInput.value
    };
    // Generate resume
    generateResume(resumeData);
    // Generate a shareable resume link
    generateShareableLink(resumeData.resumeUrl);
});
// Function to generate resume output
function generateResume(data) {
    var output = "\n        <h2>Generated Resume</h2>\n        <img src=\"".concat(data.profilePicture, "\" alt=\"Profile Picture\" id=\"resume-img\">\n        <p><strong>Name:</strong> ").concat(data.name, "</p>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n    ");
    resumeOutput.innerHTML = output;
    resumeOutput.style.display = 'block';
}
// Function to generate a shareable resume link
function generateShareableLink(resumeUrl) {
    var link = "<a href=\"".concat(resumeUrl, "\" target=\"_blank\">Click here to view your resume</a>");
    shareableLink.innerHTML = link;
    shareableLink.style.display = 'block';
}
