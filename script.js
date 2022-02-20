const poga = document.getElementById("poga");
const container = document.getElementById("container");

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("container").innerHTML = text;

poga.addEventListener("click", () => {
  cars.push(document.getElementById("skolens").value);
  let text = "";
  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }

  document.getElementById("container").innerHTML = text;
});

// Arrays. Darbu saraksts
