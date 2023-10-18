// const wrapper = document.querySelector(".wrapper");
// const seats = document.querySelectorAll(".wrap_row .seat:not(.occupied)");
// const movie = document.getElementById("movie");
// // const selectedSeats = document.querySelectorAll(".wrap_seat .seat.selected");
// const count = document.querySelector(".footer_count");
// const total = document.querySelector(".footer_total");
// movie.addEventListener("change", onChangeMovie);
// wrapper.addEventListener("click", onClickSeats);
// let priceTicket = +movie.value;
// let selectedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
// console.log(selectedSeats);
// console.log(priceTicket);
// populateUI();
// updateCount();
// function saveDataMovie(movieIndex, moviePrice) {
//   localStorage.setItem("movieIndex", movieIndex);
//   localStorage.setItem("moviePrice", moviePrice);
// }
// function updateCount() {
//   const indexSeats = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
//   console.log(indexSeats);
//   console.log(selectedSeats);
//   localStorage.setItem("selectedSeats", JSON.stringify(indexSeats));
//   const selectedSeatsCount = selectedSeats.length;
//   count.innerText = selectedSeatsCount;
//   total.innerText = selectedSeatsCount * priceTicket;
// }
// function populateUI() {
//   const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
//   if (selectedSeats !== null && selectedSeats.length > 0) {
//     seats.forEach((seat, index) => {
//       if (selectedSeats.indexOf(index) > -1) {
//         seat.classlist.add("selected");
//       }
//     });
//   }
//   const selectedMovieIndex = localStorage.getItem("movieIndex");
//   console.log(selectedMovieIndex);
//   if (selectedMovieIndex !== null) {
//     movie.selectedIndex = selectedMovieIndex;
//   }
//   updateCount();
// }
// function onChangeMovie(evt) {
//   priceTicket = +evt.target.value;
//   saveDataMovie(evt.target.selectedIndex, evt.target.value);
//   updateCount();
// }
// function onClickSeats(evt) {
//   console.log(evt.target);
//   if (
//     evt.target.classList.contains("seat") &&
//     !evt.target.classList.contains("occupied")
//   ) {
//     evt.target.classList.toggle("selected");
//     updateCount();
//   }
//   if (evt.target.classList.contains("selected")) {
//     console.log("yes");
//     selectedSeats.push(evt.target);
//     console.log(selectedSeats);
//   }
// }
// updateCount();
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
populateUI();
let ticketPrice = +movieSelect.value;
// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}
// update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const seatsIndex = [
        ...selectedSeats
    ].map((seat)=>[
            ...seats
        ].indexOf(seat));
    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
    //copy selected seats into arr
    // map through array
    //return new array of indexes
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    if (selectedSeats !== null && selectedSeats.length > 0) seats.forEach((seat, index)=>{
        if (selectedSeats.indexOf(index) > -1) seat.classList.add("selected");
    });
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
    if (selectedMovieIndex !== null) movieSelect.selectedIndex = selectedMovieIndex;
}
// Movie select event
movieSelect.addEventListener("change", (e)=>{
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
});
// Seat click event
container.addEventListener("click", (e)=>{
    if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});
updateSelectedCount();

//# sourceMappingURL=index.c36f364e.js.map
