const content = [
    {
        heading: 'Solar Energy',
        body: 'Solar energy is radiant light and heat from the Sun that is harnessed using a range of technologies such as solar power to generate electricity, solar thermal energy (including solar water heating), and solar architecture.',
        img: './img/solar.jpg'
    },
    {
        heading: 'Wind Energy',
        body: 'Wind energy is one of the fastest-growing renewable energy technologies. It is mostly the use of wind turbines to generate electricity. Wind power is a popular, sustainable, renewable energy source that has a much smaller impact on the environment than burning fossil fuels. Historically, wind power has been used in sails, windmills and windpumps but today it is mostly used to generate electricity. Wind farms consist of many individual wind turbines, which are connected to the electric power transmission network.',
        img: './img/wind.jpg'
    },
    {
        heading: 'Hydro Energy',
        body: `Hydroelectricity, or hydroelectric power, is electricity produced from hydropower. In 2020 hydropower generated one sixth of the world's electricity, almost 4500 TWh, which was more than all other renewables combined and also more than nuclear power. Hydropower can supply large amounts of low-carbon electricity on demand, making it key to many secure and clean electricity grids.[3] With a dam and reservoir it is also a flexible source of electricity, since the amount produced by the station can be varied up or down in seconds or minutes to adapt to changing energy demands.`,
        img: './img/hydro.jpg'
    }
];

function preloader() {
    const imagesList = [
       "./img/solar.jpg",
       "./img/wind.jpg",
       "./img/hydro.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    

window.addEventListener("load", preloader);


function getDynamicHTML(i) {
    const html = `
        <h2>${content[i].heading}</h2>
        <img src="${content[i].img}" alt="${content[i].heading}" />
        <p>${content[i].body}</p>
    `;
    return html;
}

function changeContent(e) {
    document.querySelector('#active-button').removeAttribute('id');

    const currentBtn = e.target;
    const idx = Array.prototype.indexOf.call(currentBtn.parentNode.children, currentBtn);

    currentBtn.setAttribute('id', 'active-button');

    wrapper.innerHTML = getDynamicHTML(idx);
}

const btns = document.querySelectorAll('.controls button');
const wrapper = document.querySelector('.dynamic');

btns.forEach((btn) => {
    btn.addEventListener('click', changeContent);
});
