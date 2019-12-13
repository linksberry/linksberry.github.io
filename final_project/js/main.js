const boxLists = document.querySelectorAll('.boxLists');
for (let i = 0; i<boxLists.length; i++){
    boxLists[i].onclick = function () {
        this.classList.add ('boxLists-active');
    }
    boxLists[i].onclick = function () {
        this.classList.toggle('boxLists-active');
    }
    console.log(this);
}