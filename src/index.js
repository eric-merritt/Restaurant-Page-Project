import _ from 'lodash';
import './style.css';
import ChefPhoto from './img1.jpg';


import { Page } from './makePage.js';

import { Menu } from './menu.js';

window.addEventListener('DOMContentLoaded', homePage, {once: true});

function homePage() {

    const container = document.getElementById('container');
        
        const navList = Page.navBar;

            const navItems = navList.children;

                navItems[1].classList.add('selected');
                navItems[1].classList.remove('not-selected');
                navItems[0].addEventListener('click',menuPage);
                    navItems[0].classList.remove('selected');
                    navItems[0].classList.add('not-selected');
                navItems[2].addEventListener('click',contactPage);
                    navItems[2].classList.remove('selected');
                    navItems[2].classList.add('not-selected');

        const bodyDiv = Page.body;

            const header = Page.heading;
                header.textContent = 'Rufus\' Steakhouse';

            bodyDiv.replaceChildren(header);

        let content = Page.bodyItems;

        content = [
            'about-us',
            'image-div'
        ]

        content.forEach((item) => {
            let bodyItem = document.createElement('div');
                bodyItem.className = item;


                bodyDiv.appendChild(bodyItem);
        })

        

        const aboutUs = document.createElement('p');
            aboutUs.innerText = 'Welcome to our website! At Rufus\', our chefs are world class trained and globally renowned. Rufus\' is the perfect place for your next large event.*' + '\n\n*Custom menus available for parties of 20 or more.'

        const homeImage = new Image();
            homeImage.src = ChefPhoto;

        const bodyContent = bodyDiv.children;
            bodyContent[1].appendChild(aboutUs);
            bodyContent[2].appendChild(homeImage);

        container.replaceChildren(navList,bodyDiv);

        document.body.appendChild(container);
    }

    const menuPage = () => {
    
        const bodyDiv = Page.body;
            
        const header = Page.heading;
            header.textContent = 'Menu';
    
        const navLinks = Page.navBar.children;

                        
              navLinks[0].classList.add('selected');
              navLinks[0].classList.remove('not-selected');

            console.log(navLinks[0].classList);
            
              navLinks[1].classList.remove('selected');
              navLinks[1].classList.add('not-selected');
              navLinks[1].addEventListener('click',homePage);

              navLinks[2].classList.remove('selected');
              navLinks[2].classList.add('not-selected');
              navLinks[2].addEventListener('click',contactPage);

            const contact = navLinks[2];

            
            
            
            contact.classList.remove('selected');

        const menuDiv = document.createElement('div');
            menuDiv.className = 'menu-div';
        
        
        for (const [key,value] of Object.entries(Menu)){

            
            let menuSection = document.createElement('div');
            let menuHeading = document.createElement('p');
                menuHeading.className = key;
                menuHeading.textContent = key;

                menuSection.appendChild(menuHeading);

            if (key == 'entrees'){

            let dishes = Menu.entrees;

                for (const [key,value] of Object.entries(dishes)){

                let dish = document.createElement('h4');
                    dish.textContent = key;
                let details = document.createElement('h6');
                    details.textContent = value;

                    menuSection.appendChild(dish);
                    menuSection.appendChild(details);
                }                     

            } else if (key == 'beverages') {

                let dishes = Menu.beverages;

                for (const [key,value] of Object.entries(dishes)){

                let dish = document.createElement('h4');
                    dish.textContent = key;
                let details = document.createElement('h6');
                    details.textContent = value;

                    menuSection.appendChild(dish);
                    menuSection.appendChild(details);
                }  


            } else {
                let menuItem = document.createElement('h6');
                    menuItem.textContent = value;
                    menuSection.appendChild(menuItem);
            } 
                    menuDiv.appendChild(menuSection);
                    bodyDiv.replaceChildren(header, menuDiv);
            }         
                    
                   
    

        
       const container = document.getElementById('container');
        container.appendChild(bodyDiv);
   
        }

        const contactPage = () => {

            const container = document.getElementById('container');

            const bodyDiv = Page.body;

            const header = Page.heading;
                header.textContent = 'Contact';

            const navLinks = Page.navBar.children;

                navLinks[2].classList.add('selected');
                navLinks[2].classList.add('not-selected');

                navLinks[0].classList.remove('selected');
                navLinks[0].classList.add('not-selected');
                    navLinks[0].addEventListener('click',menuPage);

                    navLinks[1].classList.remove('selected');
                    navLinks[1].classList.add('not-selected');
                        navLinks[1].addEventListener('click',homePage);

            const contactDiv = document.createElement('div');
                contactDiv.className = 'contact-div';
            
                const contactInfo = document.createElement('ul');

                const contactPhone = document.createElement('li');
                    contactPhone.textContent = 'Phone: (555) 555-5555';
                    contactPhone.className = 'contactItems';
                const contactEmail = document.createElement('li');
                    contactEmail.textContent = 'Email: info@rufus-steakhouse.com';
                    contactEmail.className = 'contactItems';
                const contactTwitter = document.createElement('li');
                    contactTwitter.textContent = 'Twitter: @RufusSteakhouseCO';
                    contactTwitter.className = 'contactItems';
                const contactInsta = document.createElement('li');
                    contactInsta.textContent = 'Instagram: @RufusSteakhouseCO';
                    contactInsta.className = 'contactItems';   

                    contactInfo.appendChild(contactPhone);
                    contactInfo.appendChild(contactEmail);

                    contactInfo.appendChild(contactTwitter);
                    contactInfo.appendChild(contactInsta);

                    contactDiv.appendChild(contactInfo);

                bodyDiv.replaceChildren(header,contactDiv);
        }


    

        

        



