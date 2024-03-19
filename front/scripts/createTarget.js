const createTarget = ({
  title,
  poster,
  year,
  director,
  duration,
  genre,
  rate,
}) => {
  const target = document.createElement("div");
  target.classList.add("targ", "carousel-inner");

  target.innerHTML = `
  <img src="${poster}" class="d-block w-100" alt="${title}">
  <div class="carousel-caption d-none d-md-block info">
  <h5>${title}</h5>
  <p>Year: ${year}</p>
  <p>Director: ${director}</p>
  <p>Duration: ${duration}</p>
  <p>Genre: ${genre}</p>
  <p>Rate: ${rate}</p>
  </div>
  `;
  return target;
};

module.exports = createTarget;
