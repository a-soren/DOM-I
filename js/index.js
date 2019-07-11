const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// update img src for header
let headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src','img/header-img.png')


//update img src for middle img
let midImg=document.getElementById("middle-img");
midImg.src='img/mid-page-accent.jpg'

//update Dom is Awesome
const domISAwesome=document.createElement('h1');
domISAwesome.textContent='DOM is Awesome!';
domISAwesome.style.fontSize='4 rem';
domISAwesome.style.alignItems='center';

let domSection= document.querySelector('.cta div');
domSection.prepend(domISAwesome);

// DOM button
let domBtn=document.querySelector('.cta div button');
domBtn.textContent='Get Started';
domBtn.style.color='black';

// contact
const contacth4=document.querySelector('.contact h4');
contacth4.textContent='Contact';
contacth4.style.color='black';
contacth4.style.justifyContent='right';
contacth4.style.fontSize='1.5 rem';

//footer
const crFooter=document.querySelector(' footer p');
crFooter.textContent='Copyright Great Idea! 2018';
crFooter.style.color='black';
crFooter.style.justifyContent='center';

// main content top

// features
const mainTextHeader=document.querySelector('.main-content h4');
mainTextHeader.textContent='Features';

const mainTextP=document.querySelector('.main-content p')
mainTextP.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ipsum est, lacinia sit amet consectetur at, hendrerit tempus urna. Suspendisse scelerisque nunc neque, vitae aliquet nisi vulputate nec. Sed luctus porta nulla ac ullamcorper. Vestibulum eget est scelerisque urna fringilla feugiat. Etiam justo lorem, rhoncus sit amet lectus vehicula, interdum dignissim nunc. Nunc enim ante, tincidunt et suscipit non, gravida vel velit. Mauris eu sem condimentum, elementum purus eget, dignissim libero. Proin tortor ex, sodales porttitor orci quis, pulvinar mattis augue. Curabitur porttitor justo non est vulputate imperdiet.';


// About

const mainAboutHeader=document.querySelector('.main-content h4:last-of-class');
mainAboutHeader.textContent='About';

// services
const bottomServicesHeader=document.querySelector('.bottom-content h4');
bottomServicesHeader.textContent='Services';

// Product

// Vision

