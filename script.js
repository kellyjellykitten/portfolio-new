$(document).ready(function(){
    $(window).scroll(function(){
        //Sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        //Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        //Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        //Applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    //Toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

//Toggle hamburger menu with X
const menuBtn = document.querySelector(".menu-btn");
//Set initial state of icon
let showMenu = false;

menuBtn.addEventListener("click", toggleIcon);

function toggleIcon() {
    if (!showmenu) {
        menuBtn.classList.add("close");
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        showMenu = false;
    }
}

//AWS skills accordian
//When user clicks button, toggle b/w hiding & showing the content
const openSkills = () => {
    console.log("clicked toggle")
    document.getElementById("skillsDropdown").classList.toggle("show");
}
//Close accordian if user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Contact form submit function
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`

    Email.send({
        SecureToken: "09e22744-f49f-4543-a99c-f5e8ee956415",
        Username: "kellybackwards@gmail.com",
        To: 'kellybackwards@gmail.com',
        From: "kellybackwards@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent!",
                    icon: "success"
                });
            }
            else{
                Swal.fire({
                    title: "Error!",
                    text: "Message could not be sent",
                    icon: "error"
                })
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
})
