const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");
const indicators = document.querySelectorAll(".indicator");

let baseSliderWidth = slider.offsetWidth;
let activeIndex = 0; // the current page on the slider

let movies = [
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABRTC4_pt0x_SyY6dUeuSd_Hrg6ozq4xgA3PdrcfXKI2wfKsImcWNsk5-QpPyYHi5bBbxSYC8YvL2N8F99O0ZShBBdod9NCwZe5w.webp?r=777",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABbwNNQuUYas3tj5qqMF1Pd7bZ7zJpzjnTVoT9iWBziYNVJAwVe0AMvZXyImX0BpVy8jOEAN9QOJTKnxZabeaOAFGilCJJF6xJsPhVZSPTySrwudDSudov6tNKHMy_-ttWyACHZLbSotL59kCuxEuHWF-2fRKR5LJpnaiwVdgZOv_ZHBVjQNDrOYgT_kZIXos1SJhqrJdJDfqJgsZHAO13z3tzOh8jXjDgP-d2BohxbQjipd-7h8MJm_UDq0Tid0-aSPTXjzr0hOW_ZwSXTA-aMbimnfsfTuZdMrIvyWZnFhBI48hlhWSHgEG7v-tlNdXM0Mt8z8jKYbWjavMTgH2uSE.webp?r=d5c",
  },

  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABWzCbeVGWFb87KwsdZHSeXJKgy9w09K7O0gz1mimJNeauwLs8p4wZt5WBQceTCpHn5JFsLNd61mm_FdZ3jVPfjXBCWth4JK0DCg.webp?r=5bc",
  },

  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABaWGF2rksFNGvioPbNoo5BCIhQtBDqYgSgVEJz4EhbKOQx8_DW3hu3dXinLq1k7E51yXEb4XuUlaF52U4fk-nsDo-KYmnG4Ip7OKntFoyTof99z61h2VIpy_Y0-T_P1nRFm2rOQESuewF70rVBy1BqCP39Pj3ANkZJitoaxw8TR-7u01zvoOjRtOCTKwxNKGwRzhxRnvdv69tFuMYTirhAY5FF6ojbFpQkWTV0gHLY0PY3lJHG1aelt4Q9V1GxwxENMKM6bv2bmF5sgforKeuhg_VTCrCsDaKka9JZgOpYx7gmR8coECP0LrlXOK47eOSf4kGcaIND7-0fna7xSrCmY.webp?r=c5e",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABU5kaQzASSEM3PWzbWkt6gqPE_OTkuV5b0vg6yFq9Oae4-zC19RnSsL6nZx4OliYEO-LVw-oWmS0YZKTQVoH82AMsnJ7u_2Jki4.webp?r=627",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABVmqEkpV8KZalRghNVKCtxguR7XRXUq45Z8I5fDmrKp9Fd8JOkFB6CslGIDaeuXERD-krzho-yZj2zcjJa-f-Fpiwf1bmi259LU.webp?r=4e4",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABetgRgrsWx-jg6UqL0F0-BTjA9F7DZtHdT6vpbHjXkv7PDCLWiJfsYonh3QICLZpjXzNoKiPLEy5Z0RgxnBRgXVGyWarZYHj5ZA.webp?r=961",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABTXrr8QX-hsANpaICVWCqc9fpTvYvJGKVtyAJxXG8uSui4kDDCVJvHik1XTUE8D9GcYKl9Ty47NupfEhrbnR3O8AHm0dzAE5k4U.webp?r=77d",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABaUVDQ0xvXbb0EgP8P5Gv3YMgzVwfQ0K74IaYrMKlrb2cQ2rdsRfrOAMzE-wV733_TeTcw8MVqU5BDQswgqiI-i0ZIHeqFwCbbI.webp?r=742",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABcFDagt2Im9XDdMi-cBoGGFCRlpXMCwQETSNHnZlEupOMxvZo00jz7SMosG3F2rMfUKoTvvphwZf5MqaPY7jV7DInLS_shVIgfHoi4cxi4AIrOrAGqXtMkm_SJAECen4_7xc.jpg?r=37e",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABSqO8GIxJdmWmFmpEbxvSt0zDKn_fqvgIS-cLQ9OwUdPjSaiDhwOv8TveKzLrRU3B9DZWjPuNugbhH667DEjCx_wg2D6xCN76qk.webp?r=e26",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABaWGF2rksFNGvioPbNoo5BCIhQtBDqYgSgVEJz4EhbKOQx8_DW3hu3dXinLq1k7E51yXEb4XuUlaF52U4fk-nsDo-KYmnG4Ip7OKntFoyTof99z61h2VIpy_Y0-T_P1nRFm2rOQESuewF70rVBy1BqCP39Pj3ANkZJitoaxw8TR-7u01zvoOjRtOCTKwxNKGwRzhxRnvdv69tFuMYTirhAY5FF6ojbFpQkWTV0gHLY0PY3lJHG1aelt4Q9V1GxwxENMKM6bv2bmF5sgforKeuhg_VTCrCsDaKka9JZgOpYx7gmR8coECP0LrlXOK47eOSf4kGcaIND7-0fna7xSrCmY.webp?r=c5e",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABYnXKkKacQwbEaB_7Hpd7fufuF9RfRd_uDj0sOXJyZ5COdSLANjoW39YPh-SoV9Tzg_s0pGuuJo-oxJQPom_Wc98KjudBe9AFXuljATNROWk7Wn_d__CdrExM0KjN4SX8kZu5Hdd-mwJOPqcP9gASKpjE2rO34pCJzU.webp?r=0d3",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABXQDy-uTdjAt7RXdELs1cLIYw36IwD7Lhkxg25iDARsPiiwRUTcHnJ93Sy20NvxAfAw_HMm-2pDstvydAfuLrPWNzWSTMe0J_p0.webp?r=190",
  },

  {
    src:"https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABUjxb3Y5c7-RIL2GciWS5-y1YJs33_cTyA-vk9hcQEpv8cO9t0FCk0ddOgXvoxl3e9EZi2fSlobcFBPN6xeePchptce5y-HplI0.webp?r=b13",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABQi1HmRutYwqLI2UqeFGhnRr0oJHvuvnouSDxezxvgsqo8ZHGPT1T7yb3B7aElI3X-azKnUvaqJfH9TTkLf3BtuEb1nQ-D208kc.webp?r=0bc",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABblzWBS5jjLvnsQDXzqMaKCRjtsysJJU3YiL3ew5HI4iOftdpqkog58wXZnRM5Wlc9WCTurarvwP5Ads0yE7dSSP1B5XY7tAmE0.webp?r=313",
  },
  {
    src:
      "https://occ-0-4610-3647.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABV1Om02JQsmzyvyIbPk-Ccad_RIFxdjhEPbS6rkOPteuPDt1BtQOvXj81eoIfB0TtLR1ADs_x7H2-eVuTq0E2j9wXzRS2wskbNk.webp?r=67e",
  },
];

// Fill the slider with all the movies in the "movies" array
function populateSlider() {
  movies.forEach((image) => {
    // Clone the initial movie thats included in the html, then replace the image with a different one
    const newMovie = document.getElementById("movie0");
    let clone = newMovie.cloneNode(true);
    let img = clone.querySelector("img");
    img.src = image.src;

    slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1]);
  });
}

populateSlider();
populateSlider();

// delete the initial movie in the html
const initialMovie = document.getElementById("movie0");
initialMovie.remove();

// Update the indicators that show which page we're currently on
function updateIndicators(index) {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  let newActiveIndicator = indicators[index];
  newActiveIndicator.classList.add("active");
}

// Scroll Left button
btnLeft.addEventListener("click", (e) => {
  let movieWidth = document.querySelector(".movie").getBoundingClientRect()
    .width;
  let scrollDistance = movieWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  slider.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: "smooth",
  });
  activeIndex = (activeIndex - 1) % 3;
  console.log(activeIndex);
  updateIndicators(activeIndex);
});

// Scroll Right button
btnRight.addEventListener("click", (e) => {
  let movieWidth = document.querySelector(".movie").getBoundingClientRect()
    .width;
  let scrollDistance = movieWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  console.log(`movieWidth = ${movieWidth}`);
  console.log(`scrolling right ${scrollDistance}`);

  // if we're on the last page
  if (activeIndex == 2) {
    // duplicate all the items in the slider (this is how we make 'looping' slider)
    populateSlider();
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = 0;
    updateIndicators(activeIndex);
  } else {
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex + 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
  }
});

// slider.addEventListener("scroll", (e) => {
//   console.log(slider.scrollLeft);
//   console.log(slider.offsetWidth);
// });
