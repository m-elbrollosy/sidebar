const barsIcon = document.querySelector("#open-sidebar");
const sideBar = document.querySelector(".sidebar");
const userText = document.querySelector(".text");
const userIcon = document.querySelector(".user i");
const AllSpanText = document.querySelectorAll("li span");


function addActive (even) {
    // console.log(this);
    this.classList.toggle("activate");
    //
    if (barsIcon.classList.contains('activate')){
        // console.log("opened");
        sideBar.style.width = "250px";
        barsIcon.style.left = "250px";
        // sideBar.style.marginLeft = "0";
        userText.style.display = "block";
        userIcon.style.display = "block";
        AllSpanText.forEach((singleSpan)=>{
            singleSpan.style.display = "inline-block";
        });
        
        
    } else {
        // console.log("closed");
        sideBar.style.width = "75px";
        barsIcon.style.left = "75px";
        // sideBar.style.marginLeft = "-75px";
        userText.style.display = "none";
        userIcon.style.display = "none";
        AllSpanText.forEach((singleSpan)=>{
            singleSpan.style.display = "none";
        });
        
    }
}
barsIcon.addEventListener('click', addActive);



