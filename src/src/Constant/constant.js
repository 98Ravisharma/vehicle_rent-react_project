let WEBSITE = {
    web_title: "Rent Your Vehicle",
    tagline:{
        mainL:"Find ",
        highlight:"Perfect Vehicle",
        mainR:"To Enjoy Your Journey",
        desc:"Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr."
    },
    nav_items: [
        {
            name: "home",
            sub_item: null,
            selected: true,
        },
        {
            name: "about",
            sub_item: null,
            selected: false,
        },
        {
            name: "vehicles",
            sub_item: ["vehicle types", "vehicle list"],
            selected: false,
        },
        {
            name: "bookings",
            sub_item: null,
            selected: false,
        },
        {
            name: "contact",
            sub_item: null,
            selected: false,
        },
    ],
    property_type_desc:"Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
    property_types: [
        { name: "Mini Car - 4 Seater", img: "https://imgd-ct.aeplcdn.com/1056x660/n/6gouesa_1463328.jpg?q=75", available: 24 },
        { name: "Medium Car - 5 Seater", img: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?q=75", available: 22 },
        
        
        { name: "Large Car - 7 Seater", img: "https://prog-ace-cdn.azureedge.net/-/media/project/mahindra/dotcom/mahindra/dark-theme-mahindra-images/xuv700optimizedimages/mahindra-xuv700.png?rev=975a1e4402e048a3b9d1ccef504ff1b4", available: 40 },

        { name: "Bike", img: "https://images.carandbike.com/bike-images/colors/bajaj/ct-100/bajaj-ct-100-gloss-ebony-black-with-blue-decals.png?v=1587971749", available: 23 },
        { name: "Cycle", img: "https://m.media-amazon.com/images/I/81R6AaKoL8L._SL1500_.jpg", available: 72 },
        { name: "Electric Car", img: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=75", available: 12 },
        { name: "Electric Bike", img: "https://5.imimg.com/data5/DT/NN/MV/SELLER-87912492/amro-electric-bike-500x500.jpg", available: 23 },
        { name: "Electric Cycle", img: "https://m.media-amazon.com/images/I/8169sLzD-jL._SL1500_.jpg", available: 10 },
    ],
    about:{
        title:"#1 Place To Find The Perfect Vehicle For Rent",
        desc:"Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet",
        points:[
            "Tempor erat elitr rebum at clita",
            "Aliqu diam amet diam et eos",
            "Clita duo justo magna dolore erat amet"
        ]
    },
    property_listing:{
        category:["Featured","Mini Car - 4 Seater","Medium Car - 5 Seater","Large Car - 7 Seater","Bike","Cycle","Electric Car","Electric Bike","Electric Cycle"], 
        //put data here
        details:[
            {
                img:"https://imgd-ct.aeplcdn.com/1056x660/n/6gouesa_1463328.jpg?q=75",
                category:"Mini Car - 4 Seater",
                property_type:"Mini Family Car",
                price:"₹150 / Per Day ",
                title:"Mini Car - For Mountains Trips",
                address:"Dharamshala",
                area:"4 Seater",
                bed:"Diesel",
                bath:"90Km/Litre"
            },
            {
                img:"https://imgd.aeplcdn.com/1200x900/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=75",
                category:"Electric Car",
                property_type:"Family Car",
                price:"₹100 / Per Day ",
                title:"Electric Car - For Clean Environment",
                address:"Gurugram",
                area:"5 Seater",
                bed:"Electric",
                bath:"300Km/Charge"
            },
            {
                img:"https://imgd.aeplcdn.com/1200x900/n/cw/ec/42611/tata-nexon-ev-right-front-three-quarter6.jpeg?q=75",
                category:"Electric Car",
                property_type:"Family Car",
                price:"₹100 / Per Day ",
                title:"Electric Car - For Clean Environment",
                address:"Gurugram",
                area:"5 Seater",
                bed:"Electric",
                bath:"300Km/Charge"
            },
            
        ]
    },
    action:{
        img:"img/call-to-action.jpg",
        title:"Contact Us for any help !",
        desc:"Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo."
    },
    property_agents:{
        desc:"Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.",
        agents:[
            {
                img:"img/team-1.jpg",
                name:"Full Name",
                designation:"Designation",
                facebook:"#",
                twitter:"#",
                instagram:"#"
            },
            {
                img:"img/team-2.jpg",
                name:"Full Name",
                designation:"Designation",
                facebook:"#",
                twitter:"#",
                instagram:"#"
            },
            {
                img:"img/team-3.jpg",
                name:"Full Name",
                designation:"Designation",
                facebook:"#",
                twitter:"#",
                instagram:"#"
            },
            {
                img:"img/team-4.jpg",
                name:"Full Name",
                designation:"Designation",
                facebook:"#",
                twitter:"#",
                instagram:"#"
            }
        ]
    },
    address:"123 Street, New York, USA",
    phone:"+012 909 909",
    email:"ravi@gmail.com",
    facebook:"#",
    twitter:"#",
    
};

export default WEBSITE;
