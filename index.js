const wrapper = document.querySelector(".wrapper");
const seats = document.querySelectorAll(".wrap_seat .seat:not(.occupied)");
const movie = document.getElementById("movie");
const count = document.querySelector(".footer_count");
const total = document.querySelector(".footer_total");

movie.addEventListener("change", onChangeMovie);
wrapper.addEventListener("click", onClickSeats);

let priceTicket = +movie.value;

getSelectedSeats();

function updateCount() {
  const selectedSeats = document.querySelectorAll(".wrap_seat .seat.selected");

  const indexSeats = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(indexSeats));

  const countSelectedSeats = selectedSeats.length;

  count.innerText = countSelectedSeats;
  total.innerText = countSelectedSeats * priceTicket;
}

function getSelectedSeats() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("indexMovie");

  if (selectedMovieIndex !== null) {
    movie.selectedIndex = selectedMovieIndex;
  }

  updateCount();
}

function saveDataMovie(indexMovie, priceMovie) {
  localStorage.setItem("indexMovie", indexMovie);
  localStorage.setItem("priceMovie", priceMovie);
}

function onChangeMovie(evt) {
  priceTicket = +evt.target.value;

  saveDataMovie(evt.target.selectedIndex, evt.target.value);

  updateCount();
}

function onClickSeats(evt) {
  if (
    evt.target.classList.contains("seat") &&
    !evt.target.classList.contains("occupied")
  ) {
    evt.target.classList.toggle("selected");

    updateCount();
  }
}

updateCount();
