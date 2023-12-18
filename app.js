let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {
    let item = document.createElement('li');
    item.innerText = inp.value;

    let dltbtns = document.createElement("button");
    dltbtns.innerHTML = "delete"
    dltbtns.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(dltbtns)

    inp.value = "";

});

ul.addEventListener("click", function (eve) {
    if (eve.target.nodeName = "BUTTON") {
        let lilist = eve.target.parentElement;
        lilist.remove();
        console.log("deleted")
    }
}

)