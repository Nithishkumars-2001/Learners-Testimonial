
//select learners images
let learners_images = document.querySelector(".learners-images")

//select previous btn & forward btn
let previous_btn = document.querySelector(".previous-btn")
let forward_btn = document.querySelector(".forward-btn")

learners_images.addEventListener("wheel",(event) => {
    event.preventDefault();
    learners_images.scrollLeft += event.deltaY;
    learners_images.style.scrollBehavior = "auto"
})

forward_btn.addEventListener("click", ()=> {
    learners_images.style.scrollBehavior = "smooth"
    learners_images.scrollLeft += 1145;
})

previous_btn.addEventListener("click", ()=> {
    learners_images.style.scrollBehavior = "smooth"
    learners_images.scrollLeft -= 1145;
})

var student_1 = document.querySelector(".student-1")
var student_2 = document.querySelector(".student-2")
var student_3 = document.querySelector(".student-3")
var student_4 = document.querySelector(".student-4")
var student_5 = document.querySelector(".student-5")
var student_6 = document.querySelector(".student-6")
var student_7 = document.querySelector(".student-7")
var student_8 = document.querySelector(".student-8")
var student_9 = document.querySelector(".student-9")

var learners_testimonial = document.querySelector(".learners-testimonial")
var learners_testimonial_text_p = document.querySelector(".learners-testimonial-text p")
var learners_testimonial_text_h3 = document.querySelector(".learners-testimonial-text h3")
var learners_testimonial_text_h4 = document.querySelector(".learners-testimonial-text h4")

student_1.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"Gowthamraj Networks provided an exceptional full stack development course that equipped me with the skills and confidence to tackle complex projects. Highly recommended!"+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "full stack development, chennai."
    learners_testimonial.style.backgroundColor = "tomato"
})

student_2.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"Thanks to Gowthamraj Networks, I gained a comprehensive understanding of both front-end and back-end development, empowering me to build dynamic and efficient applications."+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "Web development, Chennai."
    learners_testimonial.style.backgroundColor = "orange"
})

student_3.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"The hands-on approach and expert guidance at Gowthamraj Networks made learning Data Analyst an engaging and rewarding experience. My technical skills have significantly improved!."+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "Data Analyst, Chennai."
    learners_testimonial.style.backgroundColor = "green"
})

student_4.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"Gowthamraj Networks' UI/UX Designer exceeded my expectations with its in-depth curriculum and real-world projects. I'm now well-prepared for a successful career in tech."+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "UI/UX Designer, Chennai."
    learners_testimonial.style.backgroundColor = "yellowgreen"
})

student_5.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"The Data Science training at Gowthamraj Networks was transformative. The blend of theory and practical application gave me a strong foundation and real-world skills."+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "Data Science, Chennai."
    learners_testimonial.style.backgroundColor = "rgb(229, 22, 57)"
})

student_6.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"Gowthamraj Networks provided an exceptional full stack development course that equipped me with the skills and confidence to tackle complex projects. Highly recommended!."+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "front-end development, Chennai."
    learners_testimonial.style.backgroundColor = "rgb(0, 255, 166)"
})

student_7.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"Thanks to Gowthamraj Network, I gained a comprehensive understanding of both front-end and back-end development, empowering me to build dynamic and efficient applications."+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "Full stack Development, Chennai."
    learners_testimonial.style.backgroundColor = "rgb(0, 179, 255)"
})

student_8.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"The hands-on approach and expert guidance at Gowthamraj Networks made learning Software Testing an engaging and rewarding experience. My technical skills have significantly improved!."+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "Software Testing, Chennai."
    learners_testimonial.style.backgroundColor = " rgb(255, 204, 0)"
})

student_9.addEventListener("click", ()=> {
    learners_testimonial_text_p.textContent = "❝ "+"Thanks to Gowthamraj Network, I gained a comprehensive understanding of both front-end and back-end development, empowering me to build dynamic and efficient applications."+" ❞"
    learners_testimonial_text_h3.textContent = "Name"
    learners_testimonial_text_h4.textContent = "Front-end Development, Chennai."
    learners_testimonial.style.backgroundColor = "rgb(220, 12, 238)"
})

 //select sidenavbar
 var sidenavbar = document.querySelector(".side-navbar")

 function shownavbar()
 {
    sidenavbar.style.left = "0"
 }
 function closenavbar()
 {
    sidenavbar.style.left = "-70%"
 }