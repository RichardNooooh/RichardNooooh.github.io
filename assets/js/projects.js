document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('expanded');
        
        const gallery = this.querySelector('.project-gallery');
        
        if (this.classList.contains('expanded')) {
        if (gallery) {
            gallery.classList.remove('hidden');
        }
        } else {
        if (gallery) {
            gallery.classList.add('hidden');
        }
        }
    });
});
