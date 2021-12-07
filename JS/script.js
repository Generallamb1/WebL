const titles = ["Dude", "Phrog", "Isaac", "LennyFace", "Gosling",
    "Cats", "Dudes", "Stand Up", "Billy", "JohnTron",
    "Disapear", "ScaryFace", "Snack", "ae", "Jojo"];

const imageOut = document.querySelector('.image-out');

for (let key in images){

    let img = document.createElement('img');
    let divWRapper = document.createElement('div');

    divWRapper.append(img);
    
    img.setAttribute('title', key);
    img.setAttribute('width', 100);
    img.setAttribute('height', 100);
    img.src = 'photos/' + key +'.gif';
    divWRapper.classList.add("imgphoto")

    divWRapper.append(img);
    divWRapper.append(titles[key - 1]);
    imageOut.append(divWRapper);
}