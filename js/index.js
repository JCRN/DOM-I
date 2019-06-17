// initial 
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
    "address" : "123 Way 456 Street \nSomewhere, USA",
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

// *** NAV MENU ***

  // links node list
  const navLinks = document.querySelectorAll('nav a')

  // links text
  navLinks.forEach((link, idx) => {
    let str = `nav-item-${idx+1}`
    link.textContent = siteContent.nav[str]
  })

  // links color
  navLinks.forEach(link => {
    link.style.color = 'green'
  })

  // create 2 new items
  const navFirst = document.createElement('p')
    navFirst.style.color = 'blue'
    navFirst.textContent = 'Greatness' 
     
  const navLast = document.createElement('p')
    navLast.style.color = 'blue'
    navLast.textContent = 'Awaits'

  // append new items to nav
  const nav = document.querySelector('nav')
  nav.prepend(navFirst)
  nav.appendChild(navLast)

  
// *** CALL TO ACTION ***

  // h1
  const h1 = document.querySelector('.cta-text h1')
  h1.style.whiteSpace = 'pre'
  h1.textContent = siteContent.cta['h1'].split(' ').join('\n')

  // button text
  document.querySelector('.cta-text > button').textContent = siteContent.cta['button']

  // code snippet image
  document.querySelector('#cta-img').src = siteContent.cta['img-src']


// *** MAIN CONTENT ***

  // top-content

    // features
    document.querySelector('.top-content > .text-content > h4').textContent = siteContent['main-content']['features-h4']
    document.querySelector('.top-content > .text-content > p').textContent = siteContent['main-content']['features-content']

    // about
    document.querySelector('.top-content > .text-content ~ .text-content > h4').textContent = siteContent['main-content']['about-h4']
    document.querySelector('.top-content > .text-content ~ .text-content > p').textContent = siteContent['main-content']['about-content']


  // middle image
  document.querySelector('.middle-img').src = siteContent['main-content']['middle-img-src']

  // bottom content

    // services
    document.querySelector('.bottom-content > .text-content > h4').textContent = siteContent['main-content']['services-h4']
    document.querySelector('.bottom-content > .text-content > p').textContent = siteContent['main-content']['services-content']

    // product
    document.querySelector('.bottom-content > .text-content ~ .text-content > h4').textContent = siteContent['main-content']['product-h4']
    document.querySelector('.bottom-content > .text-content ~ .text-content > p').textContent = siteContent['main-content']['product-content']

    // vision
    document.querySelector('.bottom-content > .text-content ~ .text-content ~ .text-content > h4').textContent = siteContent['main-content']['vision-h4']
    document.querySelector('.bottom-content > .text-content ~ .text-content ~ .text-content > p').textContent = siteContent['main-content']['vision-content']


// *** CONTACT INFORMATION ***

  // header
  document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4']

  // address
  const address = document.querySelector('.contact > p')
  address.style.whiteSpace = 'pre'
  address.textContent = siteContent.contact['address']

  // phone number
  const phone = document.querySelector('.contact > p ~ p')
  phone.textContent = siteContent.contact['phone']

  // email
  const email = document.querySelector('.contact > p ~ p ~ p')
  email.textContent = siteContent.contact['email']


// *** FOOTER ***

  // copyright 
  const copyright = document.querySelector('footer p')
  copyright.textContent = siteContent.footer['copyright']