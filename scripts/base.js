
function switchProject() {
    alert('project selected');
}

function switchContact() {
    alert('contact selected')
}

function addMenuListeners()
{
    let projectsButton = document.getElementById('projects-button');
    projectsButton.addEventListener('mousedown', switchProject);
    
    let contactButton = document.getElementById('contact-button');
    contactButton.addEventListener('mousedown', switchContact);
}

addMenuListeners()
