import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/style.css';

/*Image src  */
const airPodsImgSrc = "../src/img/airpods/airpods6.png";
const airPodsImgSrc2 = "../src/img/airpods/airpods4.png";

const appleWatchImgSrc = "../src/img/watch/apple-watch3.png";
const appleWatchImgSrc2 = "../src/img/watch/apple-watch1.png";

const applePhoneImgSrc = "../src/img/phone/phone3.png";
const applePhoneImgSrc2 = "../src/img/phone/phone2.png";;

const appleIpadImgSrc = "../src/img/apple-ipad/ipad2.png";
const appleIpadImgSrc2 = "../src/img/apple-ipad/ipad1.png";

/*Input Id Section*/
const appleIpad1 = document.querySelector("#apple-ipad1");
const appleIpad2 = document.querySelector("#apple-ipad2");

const airpods1 = document.querySelector("#airpods-1");
const airpods2 = document.querySelector("#airpods-2");

const appleWatch1 = document.querySelector("#apple-watch1");
const appleWatch2 = document.querySelector("#apple-watch2");

const applePhone1 = document.querySelector("#apple-phone1");
const applePhone2 = document.querySelector("#apple-phone2");

/** Watch Section*/
appleIpad1.addEventListener('click', () => {
    document.querySelector("#apple-ipad-src").src = appleIpadImgSrc;
})
appleIpad2.addEventListener('click', () => {
    document.querySelector("#apple-ipad-src").src = appleIpadImgSrc2;
})

/**Airpods Section  */
airpods1.addEventListener('click', () => {
    document.querySelector("#airpodsImg").src = airPodsImgSrc;
})
airpods2.addEventListener('click', () => {
    document.querySelector("#airpodsImg").src = airPodsImgSrc2;
})
/** Watch Section*/
appleWatch1.addEventListener('click', () => {
    document.querySelector("#apple-watch-src").src = appleWatchImgSrc;
})
appleWatch2.addEventListener('click', () => {
    document.querySelector("#apple-watch-src").src = appleWatchImgSrc2;
})
/** Watch Section*/
applePhone1.addEventListener('click', () => {
    document.querySelector("#apple-phone-src").src = applePhoneImgSrc;
})
applePhone2.addEventListener('click', () => {
    document.querySelector("#apple-phone-src").src = applePhoneImgSrc2;
})