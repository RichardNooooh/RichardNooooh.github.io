// menu interaction
document.addEventListener('DOMContentLoaded', function() {
    const sections = {
        'home-content': document.getElementById('home-content'),
        'projects-content': document.getElementById('projects-content'),
    };

    document.getElementById('logo').addEventListener('click', () => showContent('home-content'));
    document.getElementById('projects-button').addEventListener('click', () => showContent('projects-content'));

    function showContent(sectionId) {
        Object.values(sections).forEach(section => section.style.display = 'none');
        sections[sectionId].style.display = 'block';
    }

    showContent('home-content');
});
