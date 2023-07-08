const prevBtn = document.querySelector(".review-prev");
const nextBtn = document.querySelector(".review-next");
const randomBtn = document.querySelector(".review-random");

const username = document.querySelector(".review__username");
const prof = document.querySelector(".review__prof");
const text = document.querySelector(".review__text");

const fetchData = async () => {
  try {
    const data = await (await fetch("./reviewers.json")).json();
    return data;
  } catch (error) {
    return error;
  }
};

(async () => {
  let revKey = 0;
  const reviews = await fetchData();

  const changeCard = (key, arr) => {
    username.textContent = arr[key].name;
    prof.textContent = arr[key].job;
    text.textContent = arr[key].text;

    if (key === 0) {
      prevBtn.disabled = true;
      nextBtn.disabled = false;
    } else if (key === arr.length - 1) {
      prevBtn.disabled = false;
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false
      prevBtn.disabled = false;
    }
  };

  changeCard(revKey, reviews);
  document.addEventListener('click', (e) => {
    const eClicked = e.target.classList;
    if (eClicked.contains('review-prev')) {
      revKey--;
    } else if (eClicked.contains('review-next')) {
      revKey++;
    } else if (eClicked.contains('review-random')) {
      let prevRev = revKey;
      do {
        revKey = Math.abs(Math.ceil((Math.random() * 4) - 1))
      } while (revKey === prevRev);
    }

    changeCard(revKey, reviews);
  })



})();