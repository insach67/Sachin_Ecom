import logik1 from "../images-ecommerce/logi-k1.jpg"
import z3 from "../images-ecommerce/z3.jpg"
import v3 from "../images-ecommerce/v3.jpg"
import h2 from "../images-ecommerce/h2.jpg"
import e3 from "../images-ecommerce/e3.jpg"
import r3 from "../images-ecommerce/r3.jpg"
import s1 from "../images-ecommerce/s1.jpg"
import g1 from "../images-ecommerce/g1.jpg"
import f1 from "../images-ecommerce/f1.jpg"
import c1 from "../images-ecommerce/c1.jpg"
import d1 from "../images-ecommerce/d1.jpg"
import p1 from "../images-ecommerce/p1.jpg"
import ac1 from "../images-ecommerce/ac1.jpg"
import b1 from "../images-ecommerce/b1.jpg"
import t2 from "../images-ecommerce/t2.jpg"
import z1 from "../images-ecommerce/z1.jpg"
import v1 from "../images-ecommerce/v1.jpg"
import h1 from "../images-ecommerce/h1.jpg"
import e1 from "../images-ecommerce/e1.jpg"
import r1 from "../images-ecommerce/r1.jpg"
import logik2 from "../images-ecommerce/logi-k2.jpg"
import s2 from "../images-ecommerce/s2.jpg"
import g2 from "../images-ecommerce/g2.jpg"
import f2 from "../images-ecommerce/f2.jpg"
import c2 from "../images-ecommerce/c2.jpg"
import d2 from "../images-ecommerce/d2.jpg"
import p2 from "../images-ecommerce/p2.jpg"
import b2 from "../images-ecommerce/b2.jpg"
import m1 from "../images-ecommerce/m1.jpg"
const fp=[
    {
        id:1,
        name:"Logitech MK345 Wireless Combo – Full-Sized Keyboard",
        color:"Black",
        price:24,
        brand:"Logitech",
        type:"Keyboards",
        img:logik1,
        quantity:1,
        discount:30,
    },
    {
        discount:100,
        id:16,
        quantity:1,
        name:"Seagate Backup Plus Portable 5 TB External HDD",
        color:"Black",
        price:87,
        brand:"Seagate",
        type:"Networking & Server",
        img:s1
    },
    {
        name:"2020 Apple MacBook Pro",
        color:"Grey",
        price:1129,
        brand:"Apple",
        category:"Mac",
        img:m1,
        id:180,
        quantity:1,
        discount:1400,
    },
    {
        discount:300,
        id:31,
        quantity:1,
        name:"HUION Drawing Monitor",
        color:"Black",
        price:275,
        brand:"Huion",
        type:"Display & Graphic",
        img:g1
    },
    {
        discount:10,
        id:46,
        quantity:1,
        name:"Nivia Venom Sports Gloves",
        color:"Black",
        price:8,
        brand:"Nivia",
        type:"Fitness & Sport",
        img:f1
    },
    {
        discount:50,
        id:62,
        quantity:1,
        name:"HP Deskjet 1212 Colour Printer",
        color:"White",
        price:39,
        brand:"HP",
        type:"Connected Home",
        img:c1
    },
    {
        discount:14,
        id:77,
        quantity:1,
        name:"OnePlus 10000 mAh Power Bank ",
        color:"Black",
        price:10,
        brand:"OnePlus",
        type:"Charging Devices",
        img:d1
    },
    {
        discount:225,
        id:92,
        quantity:1,
        name:"Apple AirPods Pro",
        color:"White",
        price:189,
        brand:"Apple",
        type:"AirPods & Wireless",
        img:p1
    },
    {
        discount:85,
        id:107,
        quantity:1,
        name:"WeConnect Care Accident, Liquid & Screen Damage Protection Plan for Apple iPhone 11",
        color:"Black",
        price:69,
        brand:"WeConnect",
        type:"Apple Care",
        img:ac1
    },
    {
        discount:8,
        id:109,
        quantity:1,
        name:"Tizum Laptop Bag Sleeve Case Cover",
        color:"Black",
        price:4,
        brand:"Tizum",
        type:"Bags,Shells & Sleeves",
        img:b1
    },
    {
        discount:12,
        id:118,
        quantity:1,
        name:"McAfee Antivirus - 1 User, 3 Years ",
        color:"Red",
        price:5,
        brand:"McAfee",
        type:"Business & Security",
        img:t2
    },
    {
        discount:7,
        id:124,
        quantity:1,
        name:"MASKED® USB Charging Cable",
        color:"Black",
        price:4,
        brand:"Masked",
        type:"Cables & Docks",
        img:z1
    },
    {
        discount:525,
        id:139,
        quantity:1,
        name:"Canon VIXIA HF R800 Portable Video Camera Camcorder",
        color:"Black",
        price:439,
        brand:"Canon",
        type:"Cameras & Video",
        img:v1
    },
    {
        discount:8,
        id:154,
        quantity:1,
        name:"KITGOHUT Universal Magnet Phone Car Mount Holder",
        color:"Black",
        price:5,
        brand:"Kitgohut",
        type:"Car & Travel",
        img:h1
    },
    {
        discount:4,
        id:160,
        quantity:1,
        name:"CEDO Samsung M31 / F41 / M31 Prime Back Cover ",
        color:"Black",
        price:2,
        brand:"CEDO",
        type:"Cases & Films",
        img:e1
    },
    {
        discount:12,
        id:175,
        quantity:1,
        name:"Storite 2 in 1 Screen Cleaning Kit",
        color:"White",
        price:6,
        brand:"Storite",
        type:"Device Care",
        img:r1
    },
    {
        discount:20,
        id:2,
        quantity:1,
        name:"Logitech MK215 Wireless Keyboard",
        color:"Black",
        price:17,
        brand:"Logitech",
        type:"Keyboards",
        img:logik2
    },
    {
        discount:100,
        id:17,
        quantity:1,
        name:"Seagate Backup Plus Portable 5 TB External HDD",
        color:"Red",
        price:87,
        brand:"Seagate",
        type:"Networking & Server",
        img:s2
    },
    {
        discount:350,
        id:32,
        quantity:1,
        name:"HUION Drawing Monitor",
        color:"Black",
        price:294,
        brand:"Huion",
        type:"Display & Graphic",
        img:g2
    },
    {
        discount:15,
        id:47,
        quantity:1,
        name:"Nivia Sports Space Gym Bag",
        color:"Blue",
        price:10,
        brand:"Nivia",
        type:"Fitness & Sport",
        img:f2
    },
    {
        discount:63,
        id:63,
        quantity:1,
        name:"HP Deskjet Ink Advantage 2338 Colour Printer",
        color:"White",
        price:55,
        brand:"HP",
        type:"Connected Home",
        img:c2
    },
    {
        discount:26,
        id:78,
        quantity:1,
        name:"OnePlus 10000 mAh Power Bank",
        color:"Green",
        price:19,
        brand:"OnePlus",
        type:"Charging Devices",
        img:d2
    },
    {
        discount:575,
        id:93,
        quantity:1,
        name:"Apple Watch Series 5",
        color:"Black",
        price:520,
        brand:"Apple",
        type:"AirPods & Wireless",
        img:p2
    },
    {
        discount:9,
        id:110,
        quantity:1,
        name:"AirCase Laptop Bag Sleeve Case Cover",
        color:"Black",
        price:4,
        brand:"AirCase",
        type:"Bags,Shells & Sleeves",
        img:b2
    },
    {
        discount:12,
        id:118,
        quantity:1,
        name:"McAfee Antivirus - 1 User, 3 Years ",
        color:"Red",
        price:5,
        brand:"McAfee",
        type:"Business & Security",
        img:t2
    },
    {
        discount:4,
        id:126,
        quantity:1,
        name:"AmazonBasics Double Nylon Braided Apple Certified Lightning to USB Charge and Sync Cable",
        color:"Red",
        price:2,
        brand:"AmazonBasics",
        type:"Cables & Docks",
        img:z3
    },
    {
        discount:230,
        id:141,
        quantity:1,
        name:"Sony HDRCX405 9.2MP HD Handycam Camcorder",
        color:"Black",
        price:170,
        brand:"Sony",
        type:"Cameras & Video",
        img:v3
    },
    {
        discount:7,
        id:155,
        quantity:1,
        name:"ELV Car Mount Adjustable Car Phone Holder",
        color:"Black",
        price:4,
        brand:"ELV",
        type:"Car & Travel",
        img:h2
    },
    {
        discount:7,
        id:162,
        quantity:1,
        name:"CEDO OnePlus Nord 2 Back Cover",
        color:"Black",
        price:4,
        brand:"CEDO",
        type:"Cases & Films",
        img:e3
    },
    {
        discount:13,
        id:177,
        quantity:1,
        name:"Gizga Essentials Professional Cleaning Kit",
        color:"White",
        price:7,
        brand:"Gizga",
        type:"Device Care",
        img:r3
    }
]
export default fp