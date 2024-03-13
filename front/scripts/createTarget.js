const createTarget = ({title, poster, year, director, duration, genre, rate}) => {
    const target = document.createElement("div");
    target.classList.add("targ", "container");

    target.innerHTML=`<h2 class="targTitle">${title}</h2>
    <div class="target">
        <img src="${poster}" alt="${title}" class="targImg">
        <div class="targInfo">
            <h3>title:${title}</h3>
            <h3>year:${year}</h3>
            <h3>director:${director}</h3>
            <h3>duration:${duration}</h3>
            <h3>genre:${genre}</h3>
            <h3>rate:${rate}</h3>
        </div>
    </div>`
    return target
}

module.exports = createTarget