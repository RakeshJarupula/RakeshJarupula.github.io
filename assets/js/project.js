AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "[Trustii] Allergen Chip Challenge - 3rd Rank",
    cardImage: "assets/images/project-page/allergen.png",
    description: "Detect allergens and their severity",
    Previewlink: "",
  },
  {
    title: "[Zindi] Fault Impact Analysis: Towards Service-Oriented Network Operation & Maintenance by ITU",
    cardImage: "assets/images/project-page/5g_faults.png",
    description: "Predicting an NE’s average data rate change when a fault occurs",
    Previewlink: "",
  },
  {
    title: "[Zindi] UmojaHack India: Income Prediction Challenge",
    cardImage: "assets/images/project-page/umoj.png",
    description: "Predict if an individual earns above or below an income threshold",
    Previewlink: "",
  },
  {
    title: "[Kaggle] Optiver Realized Volatility Prediction",
    cardImage: "assets/images/project-page/optiver.gif",
    description: "Apply your data science skills to make financial markets better",
    Previewlink: "",
  },
  {
    title: "[Kaggle] Google Brain - Ventilator Pressure Prediction",
    cardImage: "assets/images/project-page/google_vpp.jpg",
    description: "Simulate a ventilator connected to a sedated patient's lung ",
    Previewlink: "https://www.kaggle.com/jarupula/google-vpp-lstm?scriptVersionId=77885951",
  },
  {
    title: "[Kaggle] 30 Days of ML",
    cardImage: "assets/images/project-page/30days.png",
    description: "Apply what you've learned! Predict values in a regression task",
    Previewlink: "https://www.kaggle.com/jarupula/30days-ml-dae-model-inference?scriptVersionId=73628535",
  },
  {
    title: "CCPP-Regression",
    cardImage: "assets/images/project-page/ccpp.jpg",
    description: "Analyzing Combined cycle power plant data set",
    Previewlink: "",
    Githublink: "https://github.com/RakeshJarupula/CCPP-Regression"
  },
  {
    title: "[Kaggle] SIIM-FISABIO-RSNA COVID-19 Detection",
    cardImage: "assets/images/project-page/siim.png",
    description: "Identify and localize COVID-19 abnormalities on chest radiographs",
    Previewlink: "https://www.kaggle.com/jarupula/siim-effnetv2-l-cascadercnn-mmdetection-infer?scriptVersionId=69415036",
  },
  {
    title: "[Kaggle] CommonLit Readability Prize",
    cardImage: "assets/images/project-page/commonlit.jpg",
    description: "Rate the complexity of literary passages for grades 3-12 classroom use",
    Previewlink: "https://www.kaggle.com/jarupula/clr-roberta?scriptVersionId=69446410",
  },
  {
    title: "[Kaggle] Coleridge Initiative - Show US the Data",
    cardImage: "assets/images/project-page/coleridge.jpg",
    description: "Discover how data is used for the public good",
    Previewlink: "https://www.kaggle.com/jarupula/colaridge-bert?scriptVersionId=62005761",
  },
  {
    title: "Sentiment Classification Webapp",
    cardImage: "assets/images/project-page/sentiment.jpg",
    description: "This is beginner project on sentiment classification. The machine learning model is trained on IMDB dataset. This web application is deployed to Heroku platform.",
    Previewlink: "",
    Githublink: "https://github.com/RakeshJarupula/Sentiment-classifier-webapp"
  },
  {
    title: "[Kaggle] Bristol-Myers Squibb – Molecular Translation",
    cardImage: "assets/images/project-page/BMS.jpg",
    description: "Can you translate chemical images to text?",
    Previewlink: "https://www.kaggle.com/jarupula/bms-molecular-translation-model?scriptVersionId=61818429",
  },
  {
    title: "[Kaggle] Jane Street Market Prediction",
    cardImage: "assets/images/project-page/jane_street.png",
    description: "Identify the type of disease present on a Cassava Leaf image",
    Previewlink: "https://www.kaggle.com/jarupula/jane-street-market-prediction?scriptVersionId=51527967",
  },
  {
    title: "[Kaggle] Riiid Answer Correctness Prediction",
    cardImage: "assets/images/project-page/riiid.png",
    description: "Track knowledge states of 1M+ students in the wild",
    Previewlink: "https://www.kaggle.com/jarupula/riiid-answer-prediction-beginner-base-model?scriptVersionId=51328087",
  },
  {
    title: "[Kaggle] Severstal: Steel Defect Detection",
    cardImage: "assets/images/project-page/severstal.png",
    description: "Can you detect and classify defects in steel?",
    Previewlink: "https://www.kaggle.com/jarupula/heng-s-model-inference-kernel?scriptVersionId=21933453",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}