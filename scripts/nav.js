function setupMenu()
{
    const pages = {
        'main': 
        {
            'button': document.getElementById('main-button'), 
            'page': document.getElementById('main-content')
        },
        'projects': 
        {
            'button': document.getElementById('projects-button'), 
            'page': document.getElementById('projects-content')
        },
        'blog': 
        {
            'button': document.getElementById('blog-button'), 
            'page': document.getElementById('blog-content')
        },
    };

    function setActivePage(activePage) {
        Object.keys(pages).forEach((pageKey) => {
            pages[pageKey]['button'].classList.remove(['active'])
            pages[pageKey]['page'].style.display = 'none';
        });

        pages[activePage]['button'].classList.add(['active'])
        pages[activePage]['page'].style.display = 'block';
    }

    document.getElementById('logo').addEventListener('click', () => setActivePage('main'));
    Object.keys(pages).forEach((pageKey) => {
        pages[pageKey]['button'].addEventListener('click', () => setActivePage(pageKey));
    });

    setActivePage('main');
}