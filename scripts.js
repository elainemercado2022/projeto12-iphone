function trocaCor(cor){
    let circle = document.querySelector('.circle') /* document é o HTML */
    console.log(circle);
    circle.style.background = cor
}

function trocaImage(image){
    let imgIphone = document.querySelector('.iphone')
    imgIphone.src = image
}

const list = document.getElementById("list")
    list.style.maxHeight = "0px";

    function showMenu() {
        if (list.style.maxHeight == "0px") {
            list.style.maxHeight = "160px";
        } else {
            list.style.maxHeight = "0px";
        }
    }