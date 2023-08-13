import _ from 'lodash';
import './style.css';
import ChefPhoto from './img1.jpg';


import { Page } from './makePage.js';

import { Menu } from './menu.js';

window.addEventListener('DOMContentLoaded', homePage);

function homePage() {

    const container = document.createElement('div');
      container.classList.add('container');

        const navList = Page.navBar;
            container.appendChild(navList);

            const navItems = navList.children;

                navItems[1].classList.add('selected');
                navItems[1].classList.remove('not-selected');
                navItems[0].addEventListener('click',menuPage);
                navItems[2].addEventListener('click',contactPage);

        const bodyDiv = Page.body;

            const header = Page.heading;

            bodyDiv.appendChild(header);

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

        container.appendChild(bodyDiv);

        document.body.appendChild(container);
    }

    const menuPage = () => {
    
        const bodyDiv = Page.body;
            
        const header = Page.heading;
            header.textContent = 'Menu';
    
        const navLinks = Page.navBar.children;

            const menu = navLinks[0];
            
              menu.classList.replace('not-',' ');
            console.log(menu);
            const home = navLinks[1];
              home.classList.remove('selected');
              home.classList.add('not-selected');

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
                    
                   
    

        
       const container = document.querySelector('div.container');
        container.appendChild(bodyDiv);
   
        }

        const contactPage = () => {

        }


    

        

        



