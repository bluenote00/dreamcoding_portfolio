'user strict';


// navbar
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`); // navbar height = 84가 뜨는걸 알 수 있다!
    
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// navbar 메뉴 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }

    //console.log(event.target.dataset.link);
    //const scrollTo = document.querySelector(link);
    //scrollTo.scrollIntoView({ behavior: 'smooth' });

    scrollIntoView(link);
});

// Contact me 메뉴 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    //const scrollTo = document.querySelector('#contact');
    //scrollTo.scrollIntoView({ behavior: 'smooth' });
    scrollIntoView('#contact');
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}


// Make home Transparent
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Show "arrow up" when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

// Handle click
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

// project selected
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
    workBtnContainer.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        // 필터에 값이 없으면 parent.node에 있는 값을 쓰겠다는 뜻
        if(filter == null) {
            return;
        }
        projectContainer.classList.add('anim-out');

        setTimeout(() => {
            projects.forEach((project) => {
                console.log(project.dataset.type);
                if(filter === '*' || filter === project.dataset.type) {
                    project.classList.remove('invisible');
                } else {
                    project.classList.add('invisible');
                }
            });
            projectContainer.classList.remove('anim-out');
        }, 300);

        /*
        console.log(`------`);
        for (let project of projects) {
            console.log(project);
        }

        console.log(`------`);
        let project;
        for(let i =0; i < projects.length ; i++) {
            project = projects[i];
            console.log(project);
        } 
        */    
});