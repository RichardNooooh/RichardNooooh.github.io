
class ProjectsList
{
    constructor(projectListID) {
        this.projectListNode = document.getElementById(projectListID)
        this.prevButton = document.getElementById('prev-button');
        this.nextButton = document.getElementById('next-button');

        this.projectsDataNodes = [];
        this.currentPage = 0;
        this.itemsPerPage = 5;

        this.initProjects();
    }

    initProjects() {
        fetch("data/projects.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.cacheAllProjects(data);
                this.renderProjectPage();

                this.updatePaginationButtons();
                this.nextButton.addEventListener("click", () => {this.showNextPage()});
                this.prevButton.addEventListener("click", () => {this.showPrevPage()});
            });
    }

    cacheAllProjects(projects) {
        projects.forEach((project) => {
            let projectElement = this.createProjectItem(project)
            this.projectsDataNodes.push(projectElement)
        })
    }

    createProjectItem(project) {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item');
    
        const thumbnail = document.createElement('img');
        thumbnail.src = project.thumbnail;
        thumbnail.classList.add('thumbnail');
    
        const title = document.createElement('h2');
        title.textContent = project.title;
    
        const previewDescription = document.createElement('p');
        previewDescription.classList.add('description');
        previewDescription.textContent = project.description.split(' ').slice(0, 15).join(' ') + '...';
    
        const fullDescription = document.createElement('p');
        fullDescription.classList.add('full-description');
        fullDescription.textContent = project.description;
        fullDescription.style.display = 'none';
    
        const gallery = document.createElement('div');
        gallery.classList.add('gallery');
        project.gallery.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            gallery.appendChild(img);
        });
    
        projectItem.appendChild(thumbnail);
        projectItem.appendChild(title);
        projectItem.appendChild(previewDescription);
        projectItem.appendChild(fullDescription);
        projectItem.appendChild(gallery);

        if (project.link) {
            const link = document.createElement('a');
            link.href = project.link;
            link.textContent = 'Link to Project';
            link.target = '_blank';
            projectItem.appendChild(link);
        }
    
        projectItem.addEventListener('click', () => {
            projectItem.classList.toggle('expanded');
            if (projectItem.classList.contains('expanded')) {
                previewDescription.style.display = 'none';
                fullDescription.style.display = 'block';
            } else {
                previewDescription.style.display = 'block';
                fullDescription.style.display = 'none';
            }
        });
    
        return projectItem;
    }

    renderProjectPage() {
        let startIndex = this.currentPage * this.itemsPerPage
        let endIndex = (this.currentPage + 1) * this.itemsPerPage

        let renderedNodes = this.projectsDataNodes.slice(startIndex, endIndex)
        this.projectListNode.replaceChildren(...renderedNodes)
    }

    updatePaginationButtons() {
        this.prevButton.disabled = this.currentPage === 0;
        this.nextButton.disabled = (this.currentPage + 1) * this.itemsPerPage > this.projectsDataNodes.length;
    }
    
    showPrevPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.renderProjectPage();
            this.updatePaginationButtons();
        }
    }
    
    showNextPage() {
        if ((this.currentPage + 1) * this.itemsPerPage <= this.projectsDataNodes.length) {
            this.currentPage++;
            this.renderProjectPage();
            this.updatePaginationButtons();
        }
    }


}



