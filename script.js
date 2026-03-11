
let jobs = [];

function postJob() {
    const title = document.getElementById('jobTitle').value;
    const location = document.getElementById('jobLocation').value;
    const description = document.getElementById('jobDescription').value;

    if (title && location && description) {
        const job = { title, location, description };
        jobs.push(job);
        displayJobs(jobs);
        document.getElementById('jobTitle').value = '';
        document.getElementById('jobLocation').value = '';
        document.getElementById('jobDescription').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

function displayJobs(jobList) {
    const jobListDiv = document.getElementById('jobList');
    jobListDiv.innerHTML = '';
    jobList.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Location:</strong> ${job.location}</p>
            <p>${job.description}</p>
        `;
        jobListDiv.appendChild(jobCard);
    });
}
