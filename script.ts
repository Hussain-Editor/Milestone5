// DOM Elements
const form = document.getElementById('Resumeform') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLDivElement;
const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;
const resumeUrlInput = document.getElementById('username') as HTMLInputElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const skillsInput = document.getElementById('skills') as HTMLTextAreaElement;

let profilePictureUrl: string = ''; // To store the uploaded profile picture URL

// Handle profile picture preview
profilePictureInput.addEventListener('change', (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e: ProgressEvent<FileReader>) {
            profilePictureUrl = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
});

// Handle form submission
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    // Get user data from the form
    const resumeData = {
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
function generateResume(data: any) {
    const output = `
        <h2>Generated Resume</h2>
        <img src="${data.profilePicture}" alt="Profile Picture" id="resume-img">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
    `;
    resumeOutput.innerHTML = output;
    resumeOutput.style.display = 'block';
}

// Function to generate a shareable resume link
function generateShareableLink(resumeUrl: string) {
    const link = `<a href="${resumeUrl}" target="_blank">Click here to view your resume</a>`;
    shareableLink.innerHTML = link;
    shareableLink.style.display = 'block';
}
