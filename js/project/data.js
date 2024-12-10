let prjectsDB = [
  {
    id:1,
    name: "E-Learning",
    img: 'pato1.PNG',
    imgs: ['pato1.PNG'],
    tools:['React js','Django','Json Server','TailwindCSS','Axios','Validation'],
    desc: `The Alrowad Educational Platform is an online learning hub offering a range of courses and educational resources aimed at enhancing skills and achieving academic goals. It provides diverse programs designed for students and learners looking to develop their knowledge in various fields. For more details, you can visit their website.`,
    gith: 'https://github.com/Nada2023/E-learning',
    live: "https://alrowadedu.com/",
    filter:"react"
  },
  {
    id:2,
    name: "Booking Clone",
    img: 'booking1.png',
    imgs: ['booking1.PNG','booking2.PNG','booking3.PNG'],
    tools:['reactsj','Json Server','TailwindCSS','Axios','Validation','Node'],
    desc: `The Booking Clone is a fully-functional, responsive web application that provides an intuitive platform for users to explore and book travel accommodations, flights, or other related services. It is built with modern web development technologies to ensure seamless user experience and efficient performance.`,
    gith: 'https://github.com/Nada2023/BookingProject',
    // video: "5",
    filter:"react"
  },
  {
    id:3,
    name: "عقارات",
    img: 'last1.PNG',
    imgs: ['last1.PNG','last2.PNG','last3.PNG','last4.PNG','last5.PNG','last6.PNG'],
    tools:["React.JS",  "Bootstrap","Api - Sanity.IO","html",  "css"],
    desc:"An example  for using some features in  React.js like <br> 1- Add To favorites  Using Redux-Toolkit <br> 2- language switcher using react.i8next <br> 3- Save Mood Light Or Dark - redux persist <br> 4- Search In Products With Search Query URL <br> 5 - Api - Sanity.IO Api Groq Lang Like Graphql as Backend",
    gith: 'https://github.com/Nada2023/Real-Estate',
    video: "last",
    filter:"react"
  },
  {
    id:4,
    name: "OnlineShop",
    img: 'OnlineShop11.png',
    imgs: ['OnlineShop11.png','OnlineShop2.png','OnlineShop3.png','OnlineShop4.png','OnlineShop5.png','OnlineShop6.png'],
    tools:["React.JS",  "Bootstrap","FackApi",'Axios',"html",  "css"],
    desc:"An example for use Fake API with vueJs",
    gith: 'https://github.com/Nada2023/onlineShop',
    video: "OnlineShop",
    filter:"react"
  },
  
  {
    id:5,
    name: "ALrowad IT",
    img: 'ultra1.jpg',
    imgs: ['ultra1.jpg'],
    tools:["React.JS",  "Bootstrap","Json server","html",  "css"],
    desc:"Website Company",
    gith: 'https://github.com/Nada2023/alrowaditt',
    live: "https://alrowadit.com/",
    filter:"react"
  },
  {
    id:6,
    name: "Admin Dashboard",
    img: 'Dashboard.jpg',
    imgs: ['Dashboard.jpg'],
    tools:["angular",  "tailwind css","Trivia API",'Axios',"html",  "css"],
    desc:"The admin dashboard for a booking clone is designed to provide a seamless and intuitive interface for managing the platform's operations. It includes features for handling bookings, user management, and analytics, ensuring that administrators can maintain smooth functionality and provide excellent service.",
    gith: 'https://github.com/Nada2023/admin_dashboard',
    live: "https://admindashboard-green.vercel.app/login",
    filter:"angular"
  },

  {
    id:7,
    name: "Gigts",
    img: 'profile.png',
    imgs: ['profile.png'],
    tools:["Next js",  "tailwind css"],
    desc:"The website Mug API Full Stack App appears to be part of a full-stack application, likely used to showcase user-related functionalities. Based on the URL structure, it suggests an API-centric design that integrates front-end and back-end operations",
        // gith: 'https://github.com/Nada2023/admin_dashboard',
    live: "https://mug-api-full-stack-app-brown.vercel.app/user",
    filter:"Next"
  },
 
  {
    id: 8,
    name: "Ecomerce with js",
    img: 'app81.PNG',
    imgs: ['app81.PNG','app82.PNG','app83.PNG','app84.PNG','app85.PNG','app86.PNG'],
    tools:[  "HTMl","Css","JS","localstorage"],
    desc:"E-commerce website using JS and local storage as an alternative to Backand and contains pages such as <br> 1- home page <br> 2- Signup <br> 3- Login <br> 4-Profile <br> 5-Cart <br> 6-Favourites <br> 7-Create New Product <br> 8-Update Product <br>9-My Products",
    gith: 'https://github.com/Nada2023/E-commerce-JS',
    live: 'https://e-commerce-js-hs2f.vercel.app/',
    filter:"js"
  },
  {
    id: 9,
    name: "Candy Cruch",
    img: 'candy1.png',
    imgs: ['candy.webp','candy1.png'],
    tools:["JS",  "HTMl","Css"],
    desc:"Simple app on  JS",
    gith: 'https://github.com/Nada2023/CandyCruch',
    live: "https://nada2023.github.io/CandyCruch/",
    filter:"js"
  },
  {
    id: 10,
    name: "X & O",
    img: 'X O.png',
    imgs: ['X O.png'],
    tools:[  "HTMl","Css","JS","bootstrap"],
    desc:"Simple game on  JS",
    gith: 'https://github.com/Nada2023/X-O-GAME',
    live: 'https://nada2023.github.io/X-O-GAME/',
    filter:"js"
  },
  {
    id: 11,
    name: "Amazon clone",
    img: 'amazon.png',
    imgs: ['amazon.png','amazon1.png'],
    tools:[  "HTMl","Css","JS","bootstrap"],
    desc:"An actual implementation of JavaScript and Bootstrap",
    gith: 'https://github.com/Nada2023/ANAA-Shopping',
    live: 'https://nada2023.github.io/ANAA-Shopping/',
    filter:"js"
  },  
  
 
  {
    id: 17,
    name: "Medical Care",
    img: 'medic1.png',
    imgs: ['medic1.png','medic2.png','medic3.png','medic4.png','medic5.png'],
    tools:["html",  "css","bootstrap"],
    desc:"Medical application on HTML, CSS and responsive ",
    gith: "https://github.com/Nada2023/Medic-Care",
    live: 'https://nada2023.github.io/Medic-Care/',
    filter:"others"
  },
  
  
  {
    id: 18,
    name: "Coffe Shop",
    img: 'shop1.png',
    imgs: ['shop1.png','shop2.png','shop3.png'],
    tools:["html",  "css","bootstrap",'js'],
    desc:"Shop application on flex and grid CSS",
    gith: 'https://github.com/Nada2023/CoffeShop',
    live: "https://nada2023.github.io/CoffeShop/",
    filter:"others"
  },
 
  
  
]
