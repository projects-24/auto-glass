
// let test, team 

// test = [
//     {
//         'main': 'HAEMATOLOGY',
//         'sub_tests': []
//     },
//     {
//         'main': 'HAEMATOLOGY',
//         'sub_tests': []
//     }
// ]

// team = [
//     {
//         'name': 'Adamu Yussam',
//         'position': 'Lab Manager',
//         'profile': `/assets/images/team/male.png`
//     }
//     ,
//     {
//         'name': 'Nafisa Sidiki',
//         'position': 'Quality Assurance Quality',
//         'profile': `/assets/images/team/female.png`
//     }
//     ,
//     {
//         'name': 'Adamu Yussam',
//         'position': 'Lab Manager',
//         'profile': `/assets/images/team/male.png`
//     }
//     ,
//     {
//         'name': 'Afunya Kofi Daniel',
//         'position': 'Group Marketing Manager',
//         'profile': `/assets/images/team/male.png`
//     }
//     ,
//     {
//         'name': 'Felix',
//         'position': 'Logistics Manager',
//         'profile': `/assets/images/team/male.png`
//     },
//     {
//         'name': 'Ida',
//         'position': 'IT Manager',
//         'profile': `/assets/images/team/female.png`
//     }
//     ,
//     {
//         'name': 'Salim Ahmed Adam',
//         'position': 'IT Consultant',
//         'profile': `/assets/images/team/female.png`
//     }
// ]


// team.map(doc => {
//     let team_container = document.querySelector('#team');
//     let div = document.createElement('div');
//     div.className = "col sm-6 md-4 lg-4 padding margin-top-30";
//     div.innerHTML = `
//         <div>
//             <img src="${doc.profile}" alt="team member image" class='width-80'>
//         </div>
//         <div class="team-member-info">
//             <div class='h6 text-bold uppercase'>${doc.name}</div>
//             <div class='text-dark400'>${doc.position}</div>
//         </div>
//     `;
//     team_container.appendChild(div);
// })




let products = [
    {
        'name': 'SOLID BLOCK LINE' ,
        'image': '/assets/images/products/a.png',
        'description': `Our 5- and 6-inches solid blocks are expertly crafted using high-quality raw material to ensure strength and durability. Perfect for load-bearing walls and foundations, these blocks provide a secure and stable structure for your projects.
Nowhere else but here, in Danko Block Factory (DBF BLOCKS) you will get the best deals for solid blocks. We never see our clients as a source of income, but as partners to build and complete your dream projects together.
`
    },
    {
        'name': 'B.	HOLLOW BLOCKS LINE DBF ' ,
        'image': '/assets/images/products/b.png',
        'description': `We offer 4- and 5-inches hollow blocks, designed to reduce weight without compromising on strength. Ideal for non-load-bearing walls, these blocks provide excellent insulation and help maintain a comfortable environment
DBF BLOCKS produces highly durable hollow blocks that are ideal for building stable structural walls and help to enhance all types of architectural features. These blocks are resilient to pressures of up to 15 MPA; the result of a well-balanced, scientifically studied concrete/aggregate ratio mixture of the highest caliber. 
The concrete hollow blocks are available in various sizes and shapes. Concrete hollow is used for their durability, low cost, speed of construction, and eco-friendliness.
`
    }
    ,
    {
        'name': 'PAVERS' ,
        'image': '/assets/images/products/c.png',
        'description': `Choose from our diverse range of pavers in different sizes and designs (S Paver 225×112.5×60mm & H Paver 200×160× 60mm) to add a touch of elegance to your outdoor spaces. Whether it's a driveway, patio, or walkway, our pavers withstand heavy traffic and enhance the aesthetics of your project.
DBF pavers are manufactured to the highest quality and standards, they will rarely crack if installed correctly, and any crack that do appear are easily rectified. With our range of pavers options available, we can help you achieve your desired style and looks of your project space.
`
    }
    ,
    {
        'name': 'DECORATIVE BLOCKS' ,
        'image': '/assets/images/products/d.png',
        'description': `Elevate the visual appeal of your construction with our decorative blocks available in various shapes and sizes. These blocks are perfect for creating eye-catching features such as accent walls, garden borders, and facades.
DBF has a variety of beautifully designed decorative concrete blocks for several purposes:
•	Provide light and security without installing windows or shutter
•	Provide permanent ventilation and 
•	Give an attractive appearance
`
    }
   
]

products.map(doc => {
    let team_container = document.querySelector('#products');
    let div = document.createElement('div');
    div.className = "col sm-12 md-12 lg-6 padding margin-top-30";
    div.innerHTML = `
       <div data-aos="">
        <div class='product-image hover-up pointer'>
            <img src="${doc.image}" alt='${doc.name}' class='fit'>
        </div>
        <div class="margin-top-20">
            <div class='h6 uppercase text-bold important text-dark'>${doc.name}</div>
        </div>
        <div class="margin-top-10 article text-dark300">
       ${doc.description}
        </div>
       </div>
    `;
    team_container.appendChild(div);
})
