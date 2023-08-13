export const Page = (() => {

const navBar = document.createElement('ul');
    
    navBar.classList.add('navbar');

const navItems = ['menu','home','contact']; 

    navItems.forEach((item) => {
            let li = document.createElement('li');
                li.textContent = item;
                li.classList.add(item);
                li.classList.add('not-selected');
            
                navBar.appendChild(li);
        });            

const body = document.createElement('div');
    body.classList.add('body');

    let bodyItems = [];

    const heading = document.createElement('div');
        heading.innerHTML = '<p>Rufus\' Steakhouse</p>';
        heading.className = 'heading';

    return {
        body,
        bodyItems,
        heading,
        navItems,
        navBar
    };

})();