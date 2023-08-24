AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Competitive Data Scientist - Freelance🏆",
    cardImage: "assets/images/experience-page/kaggle.jpg",
    place: "Kaggle",
    time: "(Jan, 2019 - Present)",
    desp: "<li>🚀 Participated in Tabular, CV, NLP, Time Series competitions. Published public code.</li><li>🚀 Kaggle Notebooks Expert (Highest Rank: 1128/221K).</li><li>🚀 Kaggle Discussion Expert (Highest Rank: 476/287K).</li>",
  },
  {
    title: "Data Science Intern👩‍💻",
    cardImage: "assets/images/experience-page/betterplace.jpg",
    place: "BetterPlace",
    time: "(Oct, 2021 - Jan, 2022)",
    desp: "<li>🚀 Experimented with AWS Rekognition to decrease the duplicates rate from 1.14% to 0.3% resulting in reduction in cost by $0.00171(per 10,000 images) and manual effort for verification. Shared the analysis with business leaders and documented the results.</li><li>🚀 Implemented and fully automated face similarity tool related to the business team using FastAPI resulting in 5x fast analysis and assisted the business team on using it.</li><li>🚀 Collaborated with team on labelling data set and training a new model which improved the performance of the system.</li>",
  },
  {
    title: "Machine Learning Intern🤖",
    cardImage: "assets/images/experience-page/CL.png",
    place: "Career Launcher",
    time: "(July, 2020 - Sep, 2020)",
    desp: "<li>🚀 Handled full-stack programming tasks for the development of the machine learning model for the stock market data with 11% improved accuracy using Scikit-Learn and XGBoost.</li><li>🚀 Used detail-oriented visualization techniques and statistical methods to draw business insights from the stock data.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Pandas library contribution",
    cardImage: "assets/images/experience-page/pandas.png",
    description:
      "Contributed to DateTime module of the pandas library.",
    },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Mathco.Thon: Predict the price of the car.🏎",
    subtitle: "Rank: 287/2419🎆",
    image: "assets/images/experience-page/mathco.jpg",
    desp: "",
    href: "https://www.kaggle.com/jarupula/cars-price-prediction-eda-rf",
  },
  {
    title: "uHack Sentiments 2.0: Decode Code Words😂😐😡",
    subtitle: "Rank: 69/1023🎇",
    image: "assets/images/experience-page/ugam.png",
    desp: "",
    href: "https://www.kaggle.com/jarupula/machine-hack-uhack-sentiment-2-0",
  },
  {
    title: "Ode To Code: Predicting Weather Using Alien Fruit Properties🍋🍊",
    subtitle: "Rank: 6/586🎉",
    image: "assets/images/experience-page/ode-to-code.jpg",
    desp: "",
    href: "https://www.kaggle.com/jarupula/mh-ode-to-code-pred-weather-6th-place-sol",
  },
  {
    title: "Wipro's Sustainability Machine Learning Challenge💡",
    subtitle: "Rank: 180/1878✨",
    image: "assets/images/experience-page/wipro.png",
    desp: "",
    href: "https://www.kaggle.com/jarupula/mh-wipro-sustainability-ml-challenge",
  },
  {
    title: "Predict accident risk score for unique postcode🚗",
    subtitle: "Rank: 64/1136",
    image: "assets/images/experience-page/swissre.png",
    desp: "",
    href: "",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);