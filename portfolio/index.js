const imgArray = ["../images/portfolio/page-1.png", "../images/portfolio/page-2.png", "../images/portfolio/page-3.png", "../images/portfolio/page-4.png", "../images/portfolio/page-5.png", "../images/portfolio/page-6.png", "../images/portfolio/page-7.png", "../images/portfolio/page-8.png"];
    
    let index = 0;
                
    const imghtml = document.getElementById("photo-portfolio");
    const rightArrow = document.getElementById("right-arrow");
    const leftArrow = document.getElementById("left-arrow");
    const pageNumber = document.getElementById("photo-number");
    
    imghtml.src = imgArray[index];
    pageNumber.innerHTML = (index + 1) + " di " + imgArray.length;

if(index!==0) {
   leftArrow.style.display="block";
}

function nextImage() {
    if(index < imgArray.length -1) {
        console.log("Clicked on next page");
        console.log("current index is " + index);

        index++;
    } else {
        console.log("There are no more pages available... restarting");
        console.log("current index is " + index);

        index=0;
    }                    

    if(index===0) {
        leftArrow.style.display="none";                        
    } else {
        leftArrow.style.display="block";
    }

    pageNumber.innerHTML = (index + 1) + " di " + imgArray.length;
    imghtml.src = imgArray[index];
};

function prevImage() {
    if(index > 0) {
        console.log("Clicked on next page");
        console.log("current index is " + index);

        index--;
    } else {
        console.log("There are no prev pages available");
        console.log("current index is " + index);

        index=0;
    }

    if(index===0) {
        leftArrow.style.display="none";
    } else {
        leftArrow.style.display="block";
    }

    pageNumber.innerHTML = (index + 1) + " di " + imgArray.length;
    imghtml.src = imgArray[index];
};

leftArrow.addEventListener("click", prevImage);

rightArrow.addEventListener("click", nextImage);