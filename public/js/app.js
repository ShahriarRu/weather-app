console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");

// msg1.textContent = "hello world";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  search.value = "";
  msg1.textContent = "loading...";
  msg2.textContent = "";
  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        msg1.textContent = data.error;
      } else {
        msg1.textContent = "Location: " + data.location;
        msg2.textContent =
          "Temperature: " + data.forecast.temperature + " degree Celcious";
        //   console.log(data.forecast.temperature);
      }
    });
  });
});
