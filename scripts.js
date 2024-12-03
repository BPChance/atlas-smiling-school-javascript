// dynamic loading quotes section
document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://smileschool-api.hbtn.info/quotes";
    const carouselInner = document.querySelector(".carousel-inner");

    const loader = document.querySelector(".loader");

    fetch(apiURL)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failure to fetch quotes");
            }
            return response.json();
        })
        .then((quotes) => {
            loader.remove();

            quotes.forEach((quote, index) => {
                const carouselItem = document.createElement("div");
                carouselItem.className = `carousel-item ${index === 0 ? "active" : ""}`;

                carouselItem.innerHTML = `
                    <div class="row mx-auto align-items-center">
            <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
              <img
                src="${quote.pic_url}"
                class="d-block align-self-center rounded-circle"
                alt="Profile picture of ${quote.name}"
              />
            </div>
            <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
              <div class="quote-text">
                <p class="text-white">
                  « ${quote.text}
                </p>
                <h4 class="text-white font-weight-bold">${quote.name}</h4>
                <span class="text-white">${quote.title}</span>
              </div>
            </div>
          </div>
            `;

            carouselInner.appendChild(carouselItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching quotes:", error);
            loader.textContent = "Failure to load quotes";
        });
});

// dynamic loading popular tutorials section
document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://smileschool-api.hbtn.info/popular-tutorials";
    const carouselInner = document.querySelector("#carouselExampleControls2 .carousel-inner");
    const loader = document.querySelector(".loader");

    fetch(apiURL)
        .then((response) => response.json())
        .then((tutorials) => {
            loader.remove();

            tutorials.forEach((tutorial, index) => {
                const cardHTML = `
                    <div class="carousel-item ${index === 0 ? "active" : ""}">
                        <div class="card">
                            <img src="${tutorial.thumb_url}" class="card-img-top" alt="${tutorial.title} thumbnail" />
                            <div class="card-img-overlay text-center">
                                <img src="images/play.png" alt="Play" width="64px" height="64px" class="play-overlay mx-auto" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${tutorial.title}</h5>
                                <p class="card-text text-muted">${tutorial["sub-title"]}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${tutorial.author_pic_url}" alt="${tutorial.author}'s profile" width="30px" class="rounded-circle" />
                                    <h6 class="pl-3 m-0 main-color">${tutorial.author}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <div class="rating">${generateStars(tutorial.star)}</div>
                                    <span class="main-color">${tutorial.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                carouselInner.innerHTML += cardHTML;
            });

            $('#carouselExampleControls2 .carousel-inner').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '.popular-left',
                nextArrow: '.popular-right',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
        })

        .catch((error) => {
            console.error("Error loading tutorials:", error);
            loader.textContent = "Failed to load";
        });

        function generateStars(starCount) {
            let stars = '<div class="d-flex align-items-center">';
            for (let i = 0; i < 5; i++) {
                if (i < starCount) {
                    stars += '<img src="images/star_on.png" alt="star on" width="15px" />';
                } else {
                    stars += '<img src="images/star_off.png" alt="star off" width="15px" />';
                }
            }
            stars += '</div>';
            return stars;
        }
});

// latest videos section
document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://smileschool-api.hbtn.info/latest-videos";
    const carouselInner = document.querySelector("#carouselExampleControls3 .carousel-inner");
    const loader = document.querySelector(".loader");

    fetch(apiURL)
        .then((response) => response.json())
        .then((tutorials) => {
            loader.remove();

            tutorials.forEach((tutorial, index) => {
                const cardHTML = `
                    <div class="carousel-item ${index === 0 ? "active" : ""}">
                        <div class="card">
                            <img src="${tutorial.thumb_url}" class="card-img-top" alt="${tutorial.title} thumbnail" />
                            <div class="card-img-overlay text-center">
                                <img src="images/play.png" alt="Play" width="64px" height="64px" class="play-overlay mx-auto" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${tutorial.title}</h5>
                                <p class="card-text text-muted">${tutorial["sub-title"]}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${tutorial.author_pic_url}" alt="${tutorial.author}'s profile" width="30px" class="rounded-circle" />
                                    <h6 class="pl-3 m-0 main-color">${tutorial.author}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <div class="rating">${generateStars(tutorial.star)}</div>
                                    <span class="main-color">${tutorial.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                console.log("Card HTML:", cardHTML);
                carouselInner.innerHTML += cardHTML;
            });

            $('#carouselExampleControls3 .carousel-inner').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                prevArrow: '.latest-left',
                nextArrow: '.latest-right',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                        },
                    },
                ],
            });
            console.log("Slick carousel initialized for latest section");
        })

        .catch((error) => {
            console.error("Error loading tutorials:", error);
            loader.textContent = "Failed to load";
        });

        function generateStars(starCount) {
            let stars = '<div class="d-flex align-items-center">';
            for (let i = 0; i < 5; i++) {
                if (i < starCount) {
                    stars += '<img src="images/star_on.png" alt="star on" width="15px" />';
                } else {
                    stars += '<img src="images/star_off.png" alt="star off" width="15px" />';
                }
            }
            stars += '</div>';
            return stars;
        }
});

// pricing - quotes section
$(document).ready(function() {
    $.get('https://smileschool-api.hbtn.info/quotes', function(data) {
      $('.loader').hide();
      let quotesHtml = '';

      data.forEach(quote, index => {
        quotesHtml += `
          <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <div class="row">
              <div class="col-sm-3 text-center">
                <img class="rounded-circle" src="${quote.pic_url}" width="150" height="150" alt="${quote.name}">
              </div>
              <div class="col-sm-8 ml-3">
                <p>${quote.text}</p>
                <p><span class="font-weight-bold">${quote.name}</span><br>
                <span class="font-italic">${quote.title}</span></p>
              </div>
            </div>
          </div>`;
      });

      $('.carousel-inner').html(quotesHtml)
    });
  });
