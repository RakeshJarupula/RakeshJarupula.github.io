AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Advanced Computer Vision with TensorFlow",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/W4ERCUMX9HLU",
  },
  {
    title: "AWS S3 Basics",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/TR2KTT2H4WDQ",
  },
  {
    title: "Convex Optimization",
    cardImage: "assets/images/education-page/edx.svg",
    moocLink: "https://learning.edx.org/course/course-v1:StanfordOnline+SOE-YCVX0001+1T2020/home",
  },
  {
    title: "Custom Models, Layers, and Loss Functions with TensorFlow",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/BDA5UKHGB2QV",
  },
  {
    title: "Custom and Distributed Training with TensorFlow",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/6T7QL6LMP928",
  },
  {
    title: "5th Summer School on Artificial Intelligence",
    cardImage: "assets/images/education-page/iiith.jpg",
    moocLink: "https://drive.google.com/file/d/1UCyZAJNdFShtuv7q-WRSRQ7H6JK-a9R0/view?usp=sharing",
  },
  {
    title: "11th Lisbon Machine Learning Summer School",
    cardImage: "assets/images/education-page/lxmls.jpg",
    moocLink: "https://drive.google.com/file/d/15WHwjxtpMErtB4S2Uu5sRdMgCk0RxBKV/view?usp=sharing",
  },
  {
    title: "Neural Networks and Deep Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/Z27Z5FZDBGZC",
  },
  {
    title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/6XKXADVW8V9H",
  },
  {
    title: "Structuring Machine Learning Projects",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/UZ9CKKPCNBG4",
  },
  {
    title: "Convolutional Neural Networks",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/HPKNYRXPBQXU",
  },
  {
    title: "Sequence Models",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/VQZG3XVGFEVZ",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera2.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/892PUC9W8M8U",
  },
];

const experience = [
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Applied Data Science I: Scientific Computing & Python (with honors)",
    image: "assets/images/education-page/ds1.png",
    description: "Earned Dec 08, 2020",
  }, 
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

    if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
  	
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }

  sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		  easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });


}); 