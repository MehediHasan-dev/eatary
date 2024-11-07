// src/assets.js

// Import all the images
import logo from './logo.png';
import FooteLogo from './footer-logo.png';
import heroBanner from './hero-banner.png';
import aboutPageBanner from './about-page-banner.png';
import aboutBannerLg1 from './about-banner-lg-1.png'
import aboutBannerLg2 from './about-banner-lg-2.png'
import aboutBannerMd1 from './about-banner-md-1.png'
import aboutBannerMd2 from './about-banner-md-2.png'
import menuImg1 from './menu-img-1.png'
import menuImg2 from './menu-img-2.png'
import menuImg3 from './menu-img-3.png'
import menuImg4 from './menu-img-4.png'
import menuImg5 from './menu-img-5.png'
import menuImg6 from './menu-img-6.png'
import menuImg7 from './menu-img-7.png'
import menuImg8 from './menu-img-8.png'
import menuImg9 from './menu-img-9.png'
import menuImg10 from './menu-img-10.png'
import menuImg11 from './menu-img-11.png'
import menuImg12 from './menu-img-12.png'
import menuImg13 from './menu-img-13.png'
import menuImg14 from './menu-img-14.png'
import menuImg15 from './menu-img-15.png'
import reservationsBanner from './reservation-banner.png'
import aboutServiceImage from './about-service-img.png'
import clientAvatar1 from './client-avatar-img-1.png'
import clientAvatar2 from './client-avatar-img-2.png'
import clientAvatar3 from './client-avatar-img-3.png'
import BlogImg1 from './blog-img-1.png'
import BlogImg2 from './blog-img-2.png'
import BlogImg3 from './blog-img-3.png'
import BlogImg4 from './blog-img-4.png'
import BlogImg5 from './blog-img-5.png'
import BlogImg6 from './blog-img-6.png'
import achievementsBanner from './achievements-banner.png'
import aboutStoryImg from './about-story-img.png'
import chefImg1 from './chef-img-1.png'
import chefImg2 from './chef-img-2.png'
import chefImg3 from './chef-img-3.png'
import chefImg4 from './chef-img-4.png'
import chefImg5 from './chef-img-5.png'
import chefImg6 from './chef-img-6.png'

// Create an object containing the images
const assets = {
    logo,
    FooteLogo,
    heroBanner,
    aboutPageBanner,
    aboutBannerLg1,
    aboutBannerLg2,
    aboutBannerMd1,
    aboutBannerMd2,
    menuImg1,
    menuImg2,
    menuImg3,
    menuImg4,
    menuImg5,
    menuImg6,
    menuImg7,
    menuImg8,
    menuImg9,
    menuImg10,
    menuImg11,
    menuImg12,
    menuImg13,
    menuImg14,
    menuImg15,
    reservationsBanner,
    aboutServiceImage,
    clientAvatar1,
    clientAvatar2,
    clientAvatar3,
    BlogImg1,
    BlogImg2,
    BlogImg3,
    BlogImg4,
    BlogImg5,
    BlogImg6,
    achievementsBanner,
    aboutStoryImg,
    chefImg1,
    chefImg2,
    chefImg3,
    chefImg4,
    chefImg5,
    chefImg6

};

/**
 * Create and export an Array containing the all menu items
 */

export const menus = [
    {
        _id: "1",
        name: "Crispy Calamari",
        description: "This is menu Dish des demo",
        price: 12.99,
        image: [menuImg1],
        category: "",
        date: 1716634345448
    }, {
        _id: "2",
        name: "Classic Caesar Salad",
        description: "This is menu Dish des demo",
        price: 11.99,
        image: [menuImg2],
        category: "",
        date: 1716634345448
    }, {
        _id: "3",
        name: "Grilled Salmon",
        description: "This is menu Dish des demo",
        price: 24.99,
        image: [menuImg3],
        category: "",
        date: 1716634345448
    }, {
        _id: "4",
        name: "Tiramisu",
        description: "This is menu Dish des demo",
        price: 10.99,
        image: [menuImg4],
        category: "",
        date: 1716634345448
    }, {
        _id: "5",
        name: "Crème Brûlée",
        description: "This is menu Dish des demo",
        price: 8.89,
        image: [menuImg5],
        category: "",
        date: 1716634345448
    }, {
        _id: "6",
        name: "Grilled Asparagus",
        description: "This is menu Dish des demo",
        price: 7.89,
        image: [menuImg6],
        category: "",
        date: 1716634345448
    }, {
        _id: "7",
        name: "Grilled Chicken Bites",
        description: "This is menu Dish des demo",
        price: 8.99,
        image: [menuImg7],
        category: "",
        date: 1716634345448
    }, {
        _id: "8",
        name: "Spicy Shrimp Pasta",
        description: "This is menu Dish des demo",
        price: 15.95,
        image: [menuImg8],
        category: "",
        date: 1716634345448
    }, {
        _id: "9",
        name: "Veggie Delight Wrap",
        description: "This is menu Dish des demo",
        price: 6.49,
        image: [menuImg9],
        category: "",
        date: 1716634345448
    }, {
        _id: "10",
        name: "Classic Cheeseburger",
        description: "This is menu Dish des demo",
        price: 10.99,
        image: [menuImg10],
        category: "",
        date: 1716634345448
    }, {
        _id: "11",
        name: "Pan-Seared Salmon",
        description: "This is menu Dish des demo",
        price: 18.95,
        image: [menuImg11],
        category: "",
        date: 1716634345448
    }, {
        _id: "12",
        name: "Chicken Fajita Tacos",
        description: "This is menu Dish des demo",
        price: 12.99,
        image: [menuImg12],
        category: "",
        date: 1716634345448
    }, {
        _id: "13",
        name: "Italian Stallion Sub",
        description: "This is menu Dish des demo",
        price: 9.95,
        image: [menuImg13],
        category: "",
        date: 1716634345448
    }, {
        _id: "14",
        name: "Margherita Pizza",
        description: "This is menu Dish des demo",
        price: 11.95,
        image: [menuImg14],
        category: "",
        date: 1716634345448
    }, {
        _id: "15",
        name: "Crispy Fried Chicken",
        description: "This is menu Dish des demo",
        price: 7.99,
        image: [menuImg15],
        category: "",
        date: 1716634345448
    }
]





/**
 * Create and export an Array containing the all client reviews 
 */

export const ClientReviews = [
    {
        _id: "aaaa",
        name: "Jessica",
        title: "Marketing Manager",
        description: "“Eatery offers a perfect blend of delicious cuisine and warm hospitality; it’s my favorite spot for any occasion!”",
        price: 12.99,
        image: [clientAvatar1],
        date: 1716634345448
    }, {
        _id: "bbbb",
        name: "David Lee",
        title: "Teacher",
        description: "“Whether it's a date night or a family gathering, Eatery provides an unforgettable experience every time.”",
        price: 12.99,
        image: [clientAvatar2],
        date: 1716634345448
    }, {
        _id: "cccc",
        name: "Sarah Taylor",
        title: "Chef",
        description: "“Eatery is my go-to for gourmet meals; it’s a place where passion for food truly shines through.”",
        price: 12.99,
        image: [clientAvatar3],
        date: 1716634345448
    }, {
        _id: "bbbb",
        name: "David Lee",
        title: "Teacher",
        description: "“Whether it's a date night or a family gathering, Eatery provides an unforgettable experience every time.”",
        price: 12.99,
        image: [clientAvatar2],
        date: 1716634345448
    }, {
        _id: "bbbb",
        name: "David Lee",
        title: "Teacher",
        description: "“Whether it's a date night or a family gathering, Eatery provides an unforgettable experience every time.”",
        price: 12.99,
        image: [clientAvatar2],
        date: 1716634345448
    }
]



/**
 * Create and export an Array containing the all Blog items
 */
export const BlogData = [
    {
        _id: "1",
        title: "The History of Fine Dining: From Ancient Feasts to Modern Gastronomy",
        description: "empty",
        image: BlogImg1, // no need for array brackets
        date: "Feb 29, 2024"
    },
    {
        _id: "2",
        title: "Exploring Culinary Delights: A Journey Through Mediterranean Cuisine",
        description: "empty",
        image: BlogImg2,
        date: "3 FEBRUARY 2024"
    },
    {
        _id: "3",
        title: "The Art of Pairing: Elevating Your Dining Experience with Wine & Cuisine",
        description: "empty",
        image: BlogImg3,
        date: "12 JANUARY 2024"
    },
    {
        _id: "4",
        title: "The Story Behind Our Signature Dish: Chef Marco's Pasta",
        description: "empty",
        image: BlogImg4,
        date: "March 22, 2023"
    },
    {
        _id: "5",
        title: "5 Reasons Why Brunch is the Best Meal of the Day",
        description: "empty",
        image: BlogImg5,
        date: "August 10, 2022"
    },
    {
        _id: "6",
        title: "Sustainable Dining: Eatery's Commitment to the Environment",
        description: "empty",
        image: BlogImg6,
        date: "November 15, 2021"
    }
];



export const ChefData = [
    {
        id: 'aaa',
        name: 'Chef Marco',
        image: chefImg1,
        email: 'mailto:hasanmehedidev@gmail.com',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        id: 'aaa',
        name: 'Chef Ava',
        image: chefImg2,
        email: 'mailto:hasanmehedidev@gmail.com',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        id: 'aaa',
        name: 'Chef Lena',
        image: chefImg3,
        email: 'mailto:hasanmehedidev@gmail.com',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        id: 'aaa',
        name: 'Chef Kai',
        image: chefImg4,
        email: 'mailto:hasanmehedidev@gmail.com',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        id: 'aaa',
        name: 'Chef Rio',
        image: chefImg5,
        email: 'mailto:hasanmehedidev@gmail.com',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
    },
    {
        id: 'aaa',
        name: 'Chef Harpal',
        image: chefImg6,
        email: 'mailto:hasanmehedidev@gmail.com',
        twitter: 'https://x.com/',
        linkedin: 'https://www.linkedin.com/'
    }
]



// Export the assets object
export default assets;

