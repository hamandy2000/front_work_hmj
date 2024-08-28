let count = 0;
let start_x, end_x;
const contents = document.querySelectorAll(".review-item");
const slickTrack = document.querySelector("div.slick-track");
const contentsWidth = 430.39;
const slickDots = document.querySelectorAll("ul.slick-dots");

contents.forEach((content) => {
    content.addEventListener("touchstart", (e) => {
        start_x = e.touches[0].pageX;
    });
    content.addEventListener("touchend", (e) => {
        end_x = e.changedTouches[0].pageX;
        // console.log(contentsWidth);

        if (start_x > end_x) {
            count++;
            // slickDots[2].toggle
            // console.log(count);
            if (count > 1) {
                count = 1;
            }
        } else {
            count--;
        }
        slickTrack.style.transform = `translateX(-${contentsWidth * count}px)`;
    });
});

slickDots.forEach((slickDot) => {
    slickDot.addEventListener("click", (e) => {
        console.log(slickDots);
    });
});
