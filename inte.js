let para = document.querySelector(".para");

let twotext = document.querySelector(".twotext");
let next = document.querySelectorAll(".next");
let timebox = document.querySelector(".timebox");
// let overlay = document.querySelector(".overlay");
let onetext=document.querySelector(".onetext");
let threetext=document.querySelector(".threetext");
let fourtext=document.querySelector(".fourtext");
let easy=document.querySelector(".easy");
let intermediate=document.querySelector(".intermediate");
let master=document.querySelector(".master");
let code=document.querySelector(".code");
let cyber=document.querySelector(".cyber");
let container=document.querySelector(".container");
let right=document.querySelector(".right");
let box=document.querySelectorAll(".box");
let timebar=document.querySelector(".timebar");
let comptyping=document.querySelector(".comptyping")
let wpmbox=document.querySelector(".wpmtext");
let accuracybox=document.querySelector(".accutext");
let inputcom=document.querySelector(".typeinput");
let compnext=document.querySelector(".compnext");
let accuracyboxcomp=document.querySelector(".accuracybox");
let wpmboxcomp=document.querySelector(".wpmboxcomp");
let compint=0;
let left=document.querySelector(".left");
let light=document.querySelector(".light");
let re=document.querySelectorAll(".re");
let threelogo=document.querySelector(".logothree");
let timer;
let  accuracycount = 0;
let lightonn=document.querySelector(".lightonn");
let nav=document.querySelector(".nav");
let text=document.querySelector(".text");
let foot=document.querySelector(".foot");
let inputmobile=document.querySelector("#typingInput");
let timewrap=document.querySelector(".timewrap");

let currentindex = 0;
let count;
let span;
  let lightcount=0;
light.addEventListener("click",()=>{
    // (lightcount/2==0)
      container.style.backgroundImage="none";
      left.style.border="";
      light.style.display="none";
      lightonn.style.display="";
      console.log("lightif");
      lightcount++;
   
    }
    
    

)
let r=0;

let pargraph = ["The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for typing practice. Regular practice helps improve typing speed and accuracy.",
    "Learning to type efficiently is a valuable skill in today's digital world. Consistent practice, proper finger placement, and maintaining accuracy can significantly increase your typing speed.",
    "Technology has transformed the way we communicate, work, and learn. Developing strong typing skills allows people to express their ideas quickly and efficiently."
]
   let  time=0;
   let  timestart=false;
   let c=0;
if(window.innerWidth <= 768){
    left.style.display="none";
    right.style.width="90vw";
    re[0].style.display="none";
    nav.style.display="flex";
    text.style.display="flex";
    // nav.style.justifyContent="center";
    
    // nav.style.alignItems="center";
    text.style.justifyContent="center";
    text.style.alignItems="center";
    para.style.height="40%";
    timewrap.style.width="98%";
 
  
     
   
    nav.innerHTML=` <div class="nav">
     <img src="mylogo.png" width="100px">
                <div class="text" >
                
               
                    <h2>TypeWeb</h2>
                    <h3>Test your typing speed and accuracy</h3>


                </div>
                <div class="moon"><svg class="moonicon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>sun-warm</title><path d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"/></svg></div>
                 <div class="moonsec" style="display:none"><?xml version="1.0" encoding="utf-8"?><svg class="moonicon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 240" style="enable-background:new 0 0 240 240" xml:space="preserve"><g><path d="M58.57,25.81c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8l9.88,17.1c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8L58.57,25.81L58.57,25.81z M120,51.17c19.01,0,36.21,7.7,48.67,20.16 C181.12,83.79,188.83,101,188.83,120c0,19.01-7.7,36.21-20.16,48.67c-12.46,12.46-29.66,20.16-48.67,20.16 c-19.01,0-36.21-7.7-48.67-20.16C58.88,156.21,51.17,139.01,51.17,120c0-19.01,7.7-36.21,20.16-48.67 C83.79,58.88,101,51.17,120,51.17L120,51.17z M158.27,81.73c-9.79-9.79-23.32-15.85-38.27-15.85c-14.95,0-28.48,6.06-38.27,15.85 c-9.79,9.79-15.85,23.32-15.85,38.27c0,14.95,6.06,28.48,15.85,38.27c9.79,9.79,23.32,15.85,38.27,15.85 c14.95,0,28.48-6.06,38.27-15.85c9.79-9.79,15.85-23.32,15.85-38.27C174.12,105.05,168.06,91.52,158.27,81.73L158.27,81.73z M113.88,7.71c0-4.26,3.45-7.71,7.71-7.71c4.26,0,7.71,3.45,7.71,7.71v19.75c0,4.26-3.45,7.71-7.71,7.71 c-4.26,0-7.71-3.45-7.71-7.71V7.71L113.88,7.71z M170.87,19.72c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48 l-9.88,17.1c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48L170.87,19.72L170.87,19.72z M214.19,58.57 c3.67-2.13,8.38-0.87,10.51,2.8c2.13,3.67,0.88,8.38-2.8,10.51l-17.1,9.88c-3.67,2.13-8.38,0.87-10.51-2.8 c-2.13-3.67-0.88-8.38,2.8-10.51L214.19,58.57L214.19,58.57z M232.29,113.88c4.26,0,7.71,3.45,7.71,7.71 c0,4.26-3.45,7.71-7.71,7.71h-19.75c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71H232.29L232.29,113.88z M220.28,170.87 c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83l-17.1-9.88c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83L220.28,170.87L220.28,170.87z M181.43,214.19c2.13,3.67,0.87,8.38-2.8,10.51 c-3.67,2.13-8.38,0.88-10.51-2.8l-9.88-17.1c-2.13-3.67-0.87-8.38,2.8-10.51c3.67-2.13,8.38-0.88,10.51,2.8L181.43,214.19 L181.43,214.19z M126.12,232.29c0,4.26-3.45,7.71-7.71,7.71c-4.26,0-7.71-3.45-7.71-7.71v-19.75c0-4.26,3.45-7.71,7.71-7.71 c4.26,0,7.71,3.45,7.71,7.71V232.29L126.12,232.29z M69.13,220.28c-2.11,3.67-6.8,4.94-10.48,2.83c-3.67-2.11-4.94-6.8-2.83-10.48 l9.88-17.1c2.11-3.67,6.8-4.94,10.48-2.83c3.67,2.11,4.94,6.8,2.83,10.48L69.13,220.28L69.13,220.28z M25.81,181.43 c-3.67,2.13-8.38,0.87-10.51-2.8c-2.13-3.67-0.88-8.38,2.8-10.51l17.1-9.88c3.67-2.13,8.38-0.87,10.51,2.8 c2.13,3.67,0.88,8.38-2.8,10.51L25.81,181.43L25.81,181.43z M7.71,126.12c-4.26,0-7.71-3.45-7.71-7.71c0-4.26,3.45-7.71,7.71-7.71 h19.75c4.26,0,7.71,3.45,7.71,7.71c0,4.26-3.45,7.71-7.71,7.71H7.71L7.71,126.12z M19.72,69.13c-3.67-2.11-4.94-6.8-2.83-10.48 c2.11-3.67,6.8-4.94,10.48-2.83l17.1,9.88c3.67,2.11,4.94,6.8,2.83,10.48c-2.11,3.67-6.8,4.94-10.48,2.83L19.72,69.13L19.72,69.13z"/></g></svg></div>`


                
               pargraph  = [
  "Learning to type efficiently requires consistent practice and patience. Many beginners focus entirely on speed, but experienced typists understand that accuracy is equally important. Developing proper finger placement and maintaining good posture can significantly improve both comfort and performance during long typing sessions. Over time, repeated practice builds muscle memory and allows users to type naturally without looking at the keyboard.",

  "Technology has transformed the way people communicate, learn, and conduct business. Computers, smartphones, and internet services have become essential tools in everyday life. As digital communication continues to expand, strong typing skills provide a significant advantage for students, professionals, and anyone who regularly works with technology.",

  "Building strong typing habits requires dedication and a willingness to practice regularly. Many learners become discouraged when they fail to see immediate improvements, but consistent effort often produces remarkable progress over time. Practicing for even twenty minutes each day can substantially increase typing speed and accuracy.",

  "The internet has revolutionized access to information and education. Students can now access online courses, research materials, and educational videos from virtually anywhere in the world. This accessibility has created new opportunities for learning and professional development across multiple disciplines.",

  "Developing keyboard proficiency involves more than memorizing key positions. Successful typists learn to coordinate finger movements efficiently while maintaining concentration and minimizing unnecessary hand movements. This combination of skill and practice allows individuals to achieve impressive typing speeds.",

  "Modern workplaces depend heavily on digital communication and documentation. Employees frequently spend several hours each day writing emails, preparing reports, analyzing data, and collaborating through online platforms. Efficient typing skills can significantly improve workplace productivity.",

  "Maintaining proper posture while typing is essential for preventing discomfort and repetitive strain injuries. Keeping the back straight, shoulders relaxed, and wrists in a neutral position helps reduce physical stress and allows for longer, more comfortable practice sessions.",

  "The development of computer technology has dramatically changed how businesses operate. Organizations now rely on digital systems for communication, accounting, project management, customer service, and data analysis. Employees with strong technical and typing skills often adapt more easily to these environments.",

  "Regular practice sessions are generally more effective than occasional lengthy sessions. Short periods of focused practice help reinforce muscle memory and improve concentration while reducing fatigue and frustration during the learning process.",

  "Students who develop strong typing skills often complete assignments more efficiently and experience greater confidence when working with computers. These skills become increasingly valuable as academic and professional environments continue to adopt digital technologies.",

  "The process of learning touch typing involves training the fingers to locate keys automatically without visual assistance. Although this approach initially feels difficult, consistent practice eventually allows typists to maintain both speed and accuracy simultaneously.",

  "Communication technologies have evolved rapidly over the past several decades. Electronic mail, instant messaging, video conferencing, and social media platforms have fundamentally transformed the way individuals interact and exchange information.",

  "Improving typing speed requires balancing multiple factors, including accuracy, concentration, finger coordination, and familiarity with the keyboard layout. Neglecting any one of these areas can limit overall performance and slow progress.",

  "Software applications continue to play an increasingly important role in education, healthcare, finance, and entertainment. Professionals across these industries rely heavily on computers and benefit greatly from efficient keyboard skills.",

  "Typing exercises that include punctuation, numbers, and special symbols help learners develop a broader range of keyboard skills. These exercises also prepare individuals for real-world typing tasks encountered in academic and professional settings.",

  "The ability to type accurately under time pressure is an important skill for many careers. Journalists, programmers, researchers, and administrative professionals frequently rely on fast and precise typing to complete their responsibilities effectively.",

  "Consistent practice not only improves typing speed but also increases confidence and reduces mental effort. Experienced typists often focus entirely on their thoughts rather than on the physical act of pressing keys.",

  "Digital literacy has become an essential component of modern education. Students are increasingly expected to use computers for research, communication, collaboration, and the completion of academic assignments.",

  "Many successful learners establish structured practice routines that include warm-up exercises, accuracy drills, and timed typing tests. This systematic approach helps track progress and maintain motivation over extended periods.",

  "The continued advancement of technology ensures that keyboard skills will remain valuable for many years. Regardless of future innovations, the ability to communicate efficiently through digital devices is likely to remain an important professional and personal asset."
];
currentindex = 0;      // reset typing position
    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);
display();
foot.style.display="flex";
foot.style.justifyContent="space-evenly";
// foot.style.alignItems="space-evenly";
foot.style.flexWrap="wrap";
foot.style.alignItems="center";
foot.style.width="90%";
foot.style.height="20vh";

// foot.style.flexDirection="column";
foot.style.margin="2vh";
threelogo.style.width="33%";
container.style.overflow="auto";
para.style.backdropFilter="blur(50px)";


let random=["easy.WebP","master.WebP","ine.WebP"]
  let moon=document.querySelector(".moon");
    let moonsec=document.querySelector(".moonsec");
    moon.addEventListener("click",()=>{
        let rand=Math.floor(Math.random()*3);
        moon.style.display="none";
        moonsec.style.display="block";
        container.style.backgroundImage=`url(${random[rand]})`;
        para.style.backgroundColor=" rgba(0, 0, 0, 0.35)";

    })
        moonsec.addEventListener("click",()=>{
            moon.style.display="";
            moonsec.style.display="none";
            container.style.backgroundColor="";
            container.style.backgroundImage="none";
            })








box.forEach(box=>{
box.style.width="40%";
box.style.height="90%";

box.style.fontSize="8px";
box.style.backgroundColor=   " rgba(0, 0, 0, 0.35)";



})
para.addEventListener("click",()=>{

    inputmobile.focus();

});

para.addEventListener("touchstart",()=>{

    inputmobile.focus();

});
// inputmobile.addEventListener("input", () => {
//     let value = inputmobile.value;

//     for (let i = 0; i < span.length; i++) {

//         span[i].classList.remove("active");

//         if (i < value.length) {

//             if (value[i] === span[i].textContent) {
//                 span[i].style.color = "white";
//             } else {
//                 span[i].style.color = "red";
//             }

//         }

//     }

//     if (value.length < span.length) {
//         span[value.length].classList.add("active");
//     }
// });
               
    
}
   










easy.addEventListener("click",()=>{
  
    light.style.display="block";
    lightonn.style.display="none";
    compint=0;
      container.style.backgroundImage='url("easy.WebP")';
       comp.style.display="none";
    right.style.display="";
      para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
      
      right.style.backgroundSize = "cover";
right.style.backgroundPosition = "center";
right.style.backgroundRepeat = "no-repeat";
      left.style.backgroundColor="transparent";
    
     right.style.border="none";
    left.style.border="none";
    timebar.style.backgroundColor="transparent";
    box.forEach(box=>{
         box.style.backgroundColor="transparent";

    })
   
     box.forEach(box=>{
         box.style.borderColor="grey";
         box.style.display="none";

    })
    c=0;
    console.log("hello");
     pargraph = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice typing every day to improve your speed.",
  "A good keyboard can make typing more comfortable.",
  "Learning to type is an important digital skill.",
  "Small improvements lead to big results over time.",
  "Accuracy is more important than speed at first.",
  "Keep your hands relaxed while typing.",
  "Regular practice builds muscle memory.",
  "Focus on each word and avoid rushing.",
  "Typing games can make practice more enjoyable."
];
currentindex = 0;      // reset typing position
    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);
display();
lightonn.addEventListener("click",()=>{
    lightonn.style.display="none";
    light.style.display="block";
        left.style.display="";
         container.style.backgroundImage='url("easy.WebP")';
              comp.style.display="none";
    right.style.display="";
      para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
      
      right.style.backgroundSize = "cover";
right.style.backgroundPosition = "center";
right.style.backgroundRepeat = "no-repeat";
      left.style.backgroundColor="transparent";
    
     right.style.border="none";
    left.style.border="none";
    timebar.style.backgroundColor="transparent";

})


});
function inter(){
    light.style.display="block";
    lightonn.style.display="none";
      container.style.backgroundImage='url("ine.WebP")';
    //    comp.style.display="none";
    right.style.display="";
    compint=0;
       para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
        left.style.backgroundColor="transparent";
        timebar.style.backgroundColor="transparent";
     right.style.border="none";
    left.style.border="none";
     box.forEach(box=>{
         box.style.borderColor="grey";
         box.style.backgroundColor="transparent";
         box.style.display="none";

    })
    c=0;
    pargraph  = [
  "Learning to type efficiently requires consistent practice and patience. Many beginners focus entirely on speed, but experienced typists understand that accuracy is equally important. Developing proper finger placement and maintaining good posture can significantly improve both comfort and performance during long typing sessions. Over time, repeated practice builds muscle memory and allows users to type naturally without looking at the keyboard.",

  "Technology has transformed the way people communicate, learn, and conduct business. Computers, smartphones, and internet services have become essential tools in everyday life. As digital communication continues to expand, strong typing skills provide a significant advantage for students, professionals, and anyone who regularly works with technology.",

  "Building strong typing habits requires dedication and a willingness to practice regularly. Many learners become discouraged when they fail to see immediate improvements, but consistent effort often produces remarkable progress over time. Practicing for even twenty minutes each day can substantially increase typing speed and accuracy.",

  "The internet has revolutionized access to information and education. Students can now access online courses, research materials, and educational videos from virtually anywhere in the world. This accessibility has created new opportunities for learning and professional development across multiple disciplines.",

  "Developing keyboard proficiency involves more than memorizing key positions. Successful typists learn to coordinate finger movements efficiently while maintaining concentration and minimizing unnecessary hand movements. This combination of skill and practice allows individuals to achieve impressive typing speeds.",

  "Modern workplaces depend heavily on digital communication and documentation. Employees frequently spend several hours each day writing emails, preparing reports, analyzing data, and collaborating through online platforms. Efficient typing skills can significantly improve workplace productivity.",

  "Maintaining proper posture while typing is essential for preventing discomfort and repetitive strain injuries. Keeping the back straight, shoulders relaxed, and wrists in a neutral position helps reduce physical stress and allows for longer, more comfortable practice sessions.",

  "The development of computer technology has dramatically changed how businesses operate. Organizations now rely on digital systems for communication, accounting, project management, customer service, and data analysis. Employees with strong technical and typing skills often adapt more easily to these environments.",

  "Regular practice sessions are generally more effective than occasional lengthy sessions. Short periods of focused practice help reinforce muscle memory and improve concentration while reducing fatigue and frustration during the learning process.",

  "Students who develop strong typing skills often complete assignments more efficiently and experience greater confidence when working with computers. These skills become increasingly valuable as academic and professional environments continue to adopt digital technologies.",

  "The process of learning touch typing involves training the fingers to locate keys automatically without visual assistance. Although this approach initially feels difficult, consistent practice eventually allows typists to maintain both speed and accuracy simultaneously.",

  "Communication technologies have evolved rapidly over the past several decades. Electronic mail, instant messaging, video conferencing, and social media platforms have fundamentally transformed the way individuals interact and exchange information.",

  "Improving typing speed requires balancing multiple factors, including accuracy, concentration, finger coordination, and familiarity with the keyboard layout. Neglecting any one of these areas can limit overall performance and slow progress.",

  "Software applications continue to play an increasingly important role in education, healthcare, finance, and entertainment. Professionals across these industries rely heavily on computers and benefit greatly from efficient keyboard skills.",

  "Typing exercises that include punctuation, numbers, and special symbols help learners develop a broader range of keyboard skills. These exercises also prepare individuals for real-world typing tasks encountered in academic and professional settings.",

  "The ability to type accurately under time pressure is an important skill for many careers. Journalists, programmers, researchers, and administrative professionals frequently rely on fast and precise typing to complete their responsibilities effectively.",

  "Consistent practice not only improves typing speed but also increases confidence and reduces mental effort. Experienced typists often focus entirely on their thoughts rather than on the physical act of pressing keys.",

  "Digital literacy has become an essential component of modern education. Students are increasingly expected to use computers for research, communication, collaboration, and the completion of academic assignments.",

  "Many successful learners establish structured practice routines that include warm-up exercises, accuracy drills, and timed typing tests. This systematic approach helps track progress and maintain motivation over extended periods.",

  "The continued advancement of technology ensures that keyboard skills will remain valuable for many years. Regardless of future innovations, the ability to communicate efficiently through digital devices is likely to remain an important professional and personal asset."
];
currentindex = 0;      // reset typing position
    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);

display();
lightonn.addEventListener("click",()=>{
    lightonn.style.display="none";
    light.style.display="block";
        left.style.display="";
         container.style.backgroundImage='url("ine.WebP")';
            //   comp.style.display="none";
    right.style.display="";
      para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
      
      right.style.backgroundSize = "cover";
right.style.backgroundPosition = "center";
right.style.backgroundRepeat = "no-repeat";
      left.style.backgroundColor="transparent";
    
     right.style.border="none";
    left.style.border="none";
    timebar.style.backgroundColor="transparent";

})
};
inter();
intermediate.addEventListener("click",()=>{
    light.style.display="block";
    lightonn.style.display="none";
      container.style.backgroundImage='url("ine.WebP")';
       comp.style.display="none";
    right.style.display="";
    compint=0;
       para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
        left.style.backgroundColor="transparent";
        timebar.style.backgroundColor="transparent";
     right.style.border="none";
    left.style.border="none";
     box.forEach(box=>{
         box.style.borderColor="grey";
         box.style.backgroundColor="transparent";
         box.style.display="none";

    })
    c=0;
    pargraph  = [
  "Learning to type efficiently requires consistent practice and patience. Many beginners focus entirely on speed, but experienced typists understand that accuracy is equally important. Developing proper finger placement and maintaining good posture can significantly improve both comfort and performance during long typing sessions. Over time, repeated practice builds muscle memory and allows users to type naturally without looking at the keyboard.",

  "Technology has transformed the way people communicate, learn, and conduct business. Computers, smartphones, and internet services have become essential tools in everyday life. As digital communication continues to expand, strong typing skills provide a significant advantage for students, professionals, and anyone who regularly works with technology.",

  "Building strong typing habits requires dedication and a willingness to practice regularly. Many learners become discouraged when they fail to see immediate improvements, but consistent effort often produces remarkable progress over time. Practicing for even twenty minutes each day can substantially increase typing speed and accuracy.",

  "The internet has revolutionized access to information and education. Students can now access online courses, research materials, and educational videos from virtually anywhere in the world. This accessibility has created new opportunities for learning and professional development across multiple disciplines.",

  "Developing keyboard proficiency involves more than memorizing key positions. Successful typists learn to coordinate finger movements efficiently while maintaining concentration and minimizing unnecessary hand movements. This combination of skill and practice allows individuals to achieve impressive typing speeds.",

  "Modern workplaces depend heavily on digital communication and documentation. Employees frequently spend several hours each day writing emails, preparing reports, analyzing data, and collaborating through online platforms. Efficient typing skills can significantly improve workplace productivity.",

  "Maintaining proper posture while typing is essential for preventing discomfort and repetitive strain injuries. Keeping the back straight, shoulders relaxed, and wrists in a neutral position helps reduce physical stress and allows for longer, more comfortable practice sessions.",

  "The development of computer technology has dramatically changed how businesses operate. Organizations now rely on digital systems for communication, accounting, project management, customer service, and data analysis. Employees with strong technical and typing skills often adapt more easily to these environments.",

  "Regular practice sessions are generally more effective than occasional lengthy sessions. Short periods of focused practice help reinforce muscle memory and improve concentration while reducing fatigue and frustration during the learning process.",

  "Students who develop strong typing skills often complete assignments more efficiently and experience greater confidence when working with computers. These skills become increasingly valuable as academic and professional environments continue to adopt digital technologies.",

  "The process of learning touch typing involves training the fingers to locate keys automatically without visual assistance. Although this approach initially feels difficult, consistent practice eventually allows typists to maintain both speed and accuracy simultaneously.",

  "Communication technologies have evolved rapidly over the past several decades. Electronic mail, instant messaging, video conferencing, and social media platforms have fundamentally transformed the way individuals interact and exchange information.",

  "Improving typing speed requires balancing multiple factors, including accuracy, concentration, finger coordination, and familiarity with the keyboard layout. Neglecting any one of these areas can limit overall performance and slow progress.",

  "Software applications continue to play an increasingly important role in education, healthcare, finance, and entertainment. Professionals across these industries rely heavily on computers and benefit greatly from efficient keyboard skills.",

  "Typing exercises that include punctuation, numbers, and special symbols help learners develop a broader range of keyboard skills. These exercises also prepare individuals for real-world typing tasks encountered in academic and professional settings.",

  "The ability to type accurately under time pressure is an important skill for many careers. Journalists, programmers, researchers, and administrative professionals frequently rely on fast and precise typing to complete their responsibilities effectively.",

  "Consistent practice not only improves typing speed but also increases confidence and reduces mental effort. Experienced typists often focus entirely on their thoughts rather than on the physical act of pressing keys.",

  "Digital literacy has become an essential component of modern education. Students are increasingly expected to use computers for research, communication, collaboration, and the completion of academic assignments.",

  "Many successful learners establish structured practice routines that include warm-up exercises, accuracy drills, and timed typing tests. This systematic approach helps track progress and maintain motivation over extended periods.",

  "The continued advancement of technology ensures that keyboard skills will remain valuable for many years. Regardless of future innovations, the ability to communicate efficiently through digital devices is likely to remain an important professional and personal asset."
];
currentindex = 0;      // reset typing position
    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);

display();
lightonn.addEventListener("click",()=>{
    lightonn.style.display="none";
    light.style.display="block";
        left.style.display="";
         container.style.backgroundImage='url("ine.WebP")';
              comp.style.display="none";
    right.style.display="";
      para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
      
      right.style.backgroundSize = "cover";
right.style.backgroundPosition = "center";
right.style.backgroundRepeat = "no-repeat";
      left.style.backgroundColor="transparent";
    
     right.style.border="none";
    left.style.border="none";
    timebar.style.backgroundColor="transparent";

})
})
master.addEventListener("click",()=>{
    light.style.display="block";
    lightonn.style.display="none";
     container.style.backgroundImage='url("master.WebP")';
     compint=0;
      comp.style.display="none";
    right.style.display="";
    para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
        left.style.backgroundColor="transparent";
        timebar.style.backgroundColor="transparent";


     

    c=0;
     right.style.border="none";
      box.forEach(box=>{
         box.style.borderColor="grey";
         box.style.backgroundColor="transparent";
         box.style.display="none";

    })
    left.style.border="none";
    pargraph  = [
  "Artificial intelligence, computational neuroscience, and quantum information theory collectively represent some of the most intellectually demanding disciplines of the twenty-first century. Researchers investigating these fields frequently encounter extraordinarily complex mathematical frameworks, interdisciplinary methodologies, and computational limitations that require exceptional analytical capabilities and persistent experimentation.",

  "The unprecedented acceleration of technological innovation has fundamentally transformed international commerce, telecommunications infrastructure, scientific research methodologies, and organizational management practices. Consequently, professionals operating within technologically intensive environments must continuously acquire specialized knowledge and adapt to increasingly sophisticated operational requirements.",

  "Cybersecurity specialists routinely investigate vulnerabilities associated with cryptographic protocols, distributed computing architectures, authentication mechanisms, and network infrastructure. Successfully mitigating sophisticated cyberattacks requires comprehensive threat analysis, strategic resource allocation, and continuous implementation of advanced defensive technologies.",

  "Astrophysicists examining gravitational interactions, stellar evolution, and cosmological phenomena frequently utilize computational simulations involving extraordinarily large datasets. These investigations contribute significantly to humanity's understanding of planetary formation, galactic dynamics, and the fundamental properties of the observable universe.",

  "Pharmaceutical researchers conducting experimental investigations must evaluate biochemical interactions, physiological responses, molecular structures, and statistical correlations. The development of effective therapeutic treatments often requires extensive laboratory experimentation, rigorous documentation procedures, and international scientific collaboration.",

  "Economic globalization has generated unprecedented opportunities for international investment, technological development, and commercial expansion. Nevertheless, policymakers must simultaneously address socioeconomic inequality, environmental sustainability, regulatory compliance, and geopolitical uncertainty.",

  "Software engineering professionals responsible for developing large-scale distributed applications frequently encounter challenges involving concurrency management, performance optimization, architectural scalability, and cybersecurity implementation. Successfully addressing these challenges requires extensive technical expertise and systematic problem-solving capabilities.",

  "Environmental scientists investigating atmospheric fluctuations, ecological degradation, and climate variability employ sophisticated analytical instruments, computational modeling techniques, and interdisciplinary research methodologies. Their findings significantly influence governmental policies and international environmental agreements.",

  "The philosophical examination of consciousness, epistemology, and metaphysical existence continues to generate substantial intellectual debate among scholars, scientists, and researchers. These discussions frequently involve abstract reasoning, theoretical interpretation, and comprehensive analytical evaluation.",

  "Advancements in aerospace engineering have facilitated remarkable achievements in propulsion systems, orbital mechanics, satellite communications, and extraterrestrial exploration. Such accomplishments require extraordinary precision, extensive scientific knowledge, and continuous technological innovation."
];
currentindex = 0;      // reset typing position
    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);
    display();
    lightonn.addEventListener("click",()=>{
    lightonn.style.display="none";
    light.style.display="block";
        left.style.display="";
         container.style.backgroundImage='url("master.WebP")';
              comp.style.display="none";
    right.style.display="";
      para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
      
      right.style.backgroundSize = "cover";
right.style.backgroundPosition = "center";
right.style.backgroundRepeat = "no-repeat";
      left.style.backgroundColor="transparent";
    
     right.style.border="none";
    left.style.border="none";
    timebar.style.backgroundColor="transparent";

})

})
function codedisplay() {

    count = 0;

    document.querySelector(".timebox").innerHTML =
        time + "sec";

    para.innerHTML = "";

    let pre = document.createElement("pre");

    let currentparaindex =
        Math.floor(Math.random() * pargraph.length);

    let chars =
        pargraph[currentparaindex].split("");

    chars.forEach(char => {

        let span =
            document.createElement("span");

        span.id = "pre";

        if (char === " ") {

            count += 1;

            span.style.minWidth = "2px";
            span.style.minHeight = "25px";

        }

        if (char === "\n") {

            span.dataset.newline = "true";

            // This keeps the newline working
            span.textContent = "\n";

            // Do not give the newline span the cursor
            span.style.display = "contents";

        }
        else {

            span.textContent = char;

        }

        pre.append(span);

    });

    para.append(pre);

    span =
        para.querySelectorAll("span");

    r = 1;

}



// function codedisplay(){
//      count = 0;
     
//         let timebox = document.querySelector(".timebox").innerHTML = time + "sec";
//     // two.style.display = "none";
//     // next.style.display="none";
//     // timebox.style.display = "none";
//     para.innerHTML = "";
//     let pre=document.createElement("pre");
//     let currentparaindex = Math.floor(Math.random() * pargraph.length);

//      let chars = pargraph[currentparaindex].split("");
//     chars.forEach(char => {
//         let span = document.createElement("span");
//         span.id="pre";
//         console.log(JSON.stringify(char));
//         if (char === " ") {
//             count += 1;
//             //   span.style.marginLeft = "0px";
//             // // span.innerHTML="&nbsp";
//              span.style.minWidth = "2px";
//              span.style.minHeight = "25px";
//         }
// //      else  if (char === "\n") {
// //     span.style.display = "inline-block";
// //     span.style.width = "4px";
// //     span.style.height = "1em";
// //      span.style.verticalAlign = "bottom";
// // }

//         span.textContent = char;
//         pre.append(span);

       
        

//     })
  
//     para.append(pre);
//       span = para.querySelectorAll("span");
//       r=1;

// }
code.addEventListener("click",()=>{
    light.style.display="block";
    lightonn.style.display="none"
    comp.style.display="none";
    right.style.display="";
    compint=0;

     container.style.backgroundImage='url("code.png")';
    para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
        left.style.backgroundColor="transparent";
        timebar.style.backgroundColor="transparent";

    c=0;
     right.style.border="none";
      box.forEach(box=>{
         box.style.borderColor="grey";
         box.style.backgroundColor="transparent";
         box.style.display="none";

    })
    left.style.border="none";
    pargraph= [
`console.log("Hello, World!");

function add(a, b) {
    return a + b;
}

let result = add(5, 10);
console.log(result);`,

`#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 10;
    cout << a + b << endl;
    return 0;
}`,

`public class Main {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;
        System.out.println(a + b);
    }
}`,

`def add(a, b):
    return a + b

result = add(5, 10)
print(result)`,

`function add(a, b) {
    return a + b;
}

const result = add(5, 10);
console.log(result);`,

`<?php
function add($a, $b) {
    return $a + $b;
}

echo add(5, 10);
?>`,

`using System;

class Program {
    static void Main() {
        int a = 5;
        int b = 10;
        Console.WriteLine(a + b);
    }
}`,

`package main

import "fmt"

func main() {
    a := 5
    b := 10
    fmt.Println(a + b)
}`,

`fn main() {
    let a = 5;
    let b = 10;
    println!("{}", a + b);
}`,

`let a = 5
let b = 10
print(a + b)`,

`a = 5
b = 10
puts a + b`,

`let a = 5
let b = 10
println(a + b)`,

`SELECT name, age
FROM users
WHERE age > 18
ORDER BY age DESC;`,

`<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>Welcome!</p>
</body>
</html>`,

`body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    justify-content: center;
}`,

`{
    "name": "Rajat",
    "age": 20,
    "skills": ["HTML", "CSS", "JavaScript"]
}`,

`<note>
    <to>User</to>
    <from>System</from>
    <message>Hello World</message>
</note>`,

`const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000);`,

`class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return \`Hello, \${this.name}\`;
    }
}

const user = new Person("Rajat");
console.log(user.greet());`
];

currentindex=0;
   accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);
   codedisplay();
   lightonn.addEventListener("click",()=>{
    lightonn.style.display="none";
    light.style.display="block";
        left.style.display="";
         container.style.backgroundImage='url("code.png")';
              comp.style.display="none";
    right.style.display="";
      para.style.backgroundColor="transparent";
      para.style.backgroundColor = "rgba(0,0,0,0.7)";
      
      right.style.backgroundSize = "cover";
right.style.backgroundPosition = "center";
right.style.backgroundRepeat = "no-repeat";
      left.style.backgroundColor="transparent";
    
     right.style.border="none";
    left.style.border="none";
    timebar.style.backgroundColor="transparent";

})




})

 




function display() {
    r=0;
     count = 0;
        let timebox = document.querySelector(".timebox").innerHTML = time + "sec";
    // two.style.display = "none";
    // next.style.display="none";
    // timebox.style.display = "none";
    para.innerHTML = "";
    let currentparaindex = Math.floor(Math.random() * pargraph.length);

    let chars = pargraph[currentparaindex].split("");
    chars.forEach(char => {
        let span = document.createElement("span");
        span.id="display";
        if (char === " ") {
            count += 1;
            span.style.marginLeft = "15px";
            // span.innerHTML="&nbsp";
            span.style.minWidth = "2px";
            span.style.minHeight = "25px";
        }


        span.textContent = char;

        para.append(span);
        

    })
      span = para.querySelectorAll("span");

}

display();
console.log(count);



let wpmcountcomp=0;


// function typing() {
   

    
//     document.addEventListener("keydown", (e) => {
      
      

//         if (!timestart) {
//             timer = setInterval(() => {
//                 let timebox = document.querySelector(".timebox").innerHTML = time + "sec";
//                 if(compint==1){
//                  let clockdisplay = document.querySelector(".clockdisplay").innerHTML = time + "sec";
//                 }
//                 time++;
//                       if(time===60 && compint==1){
//             clearInterval(timer);
//                 console.log("aa gaya");
//               let  accucomp=Math.floor(((wpmcountcomp-accuracycount)/wpmcountcomp)*100);
//                    accuracyboxcomp.style.display="";
//     wpmboxcomp.style.display="";
//         wpmbox.innerHTML= `<h3>WPM<h3><h1>${Math.floor(wpmcountcomp/5)}</h1>`;
//            accuracybox.innerHTML= `<h3>Accuracy</h3><h1>${accucomp}%</h1>`;
//             if(Number(inputcom.value) > wpmcountcomp){
//                 alert("your time is expired, you do not reach your target try again ");
                
//             }
//             else if(Number(inputcom.value) < wpmcountcomp){
//                 alert("your time is expired ,you reach your target congratulations");
              

//             }
//             else{
//                 alert("your time is expired ,you perfectly match your target ")
//             }
//             time=0;
//             return;
//         }

//             }, 1000);
//             timestart = true;
//         }
    
        

//        if (currentindex >=span.length-1 ) {
//             box.forEach(box=>{
//                 box.style.display="";
//             });
            
//             clearInterval(timer);
//                let wpm = Math.floor((count / time) * 60);
               
//            let per = Math.floor(((span.length - accuracycount) / span.length) * 100);
           
//              onetext.innerHTML = `<h3>WPM<h3><h1>${wpm}</h1>`;
//             // timebox.style.display = "flex";
//             wpmbox.innerHTML= `<h3>WPM<h3><h1>${wpm}</h1>`;
//               twotext.innerHTML = `<h3>Accuracy</h3><h1>${per}%</h1>`;
//             // two.style.display = "flex";
//             accuracybox.innerHTML= `<h3>Accuracy</h3><h1>${per}%</h1>`;

//             // next.style.display = "flex";
//             threetext.innerHTML=`<h3>Word</h3><h1>${count+1}</h1><h3>typed</h3>`
//             fourtext.innerHTML=`<h3>Error</h3><h1>${accuracycount}</h1>`;
//            return;
           
//         }

          
          
        
      

//        let pressed = e.key;

// if (pressed === "Enter") {
//     pressed = "\n";
// }

// if (pressed === "Tab") {
//     e.preventDefault();
//     pressed = "\t";
// }

// if (
//     pressed !== "\n" &&
//     pressed !== "\t" &&
//     pressed.length > 1
// ) {
//     return;
// }

// if (span[currentindex]) {

//    if (pressed === span[currentindex].textContent) {
//     if(c==1){
//         span[currentindex].style.color = "#ADFF2F";
//         //  container.style.backgroundColor="#112011";
//     span[currentindex].classList.remove("cyberactive");
//     // right.style.backgroundColor="#111111";

//     }
// else{
//     span[currentindex].style.color = "white";
//     wpmcountcomp++;
//     span[currentindex].classList.remove("active");
// }

//     currentindex++;

//     // IMPORTANT FIX: skip newline automatically
//     while (
//         span[currentindex] &&
//         span[currentindex].textContent === "\n"
//     ) {
//         if(c==1){
//             span[currentindex].classList.remove("cyberactive");

//         }
//         else{
//         span[currentindex].classList.remove("active");
//         }
//          currentindex++;
//     }

//     if (span[currentindex]) {
//         if(c==1){
//               span[currentindex].classList.add("cyberactive");

//         }
//         else{
//         span[currentindex].classList.add("active");
//         }
//         return;
//     }

   
// } else {
//         span[currentindex].style.color = "red";
//         accuracycount++;
//     }
// }
// });
// }
function typing() {

    let input = document.querySelector("#typingInput");

    if(!input){
        console.log("input not found");
        return;
    }


    function processKey(pressed) {

    if (pressed === "Enter") {
        pressed = "\n";
    }

    if (!pressed) return;


    if (!timestart) {

        timer = setInterval(() => {

            document.querySelector(".timebox").innerHTML =
                time + "sec";

            if (compint == 1) {

                document.querySelector(".clockdisplay").innerHTML =
                    time + "sec";


                if (time === 60) {

                    clearInterval(timer);

                    let accucomp = Math.floor(
                        ((wpmcountcomp - accuracycount) /
                            wpmcountcomp) * 100
                    );


                    accuracyboxcomp.style.display = "";
                    wpmboxcomp.style.display = "";


                    wpmbox.innerHTML =
                        `<h3>WPM</h3>
                         <h1>${Math.floor(wpmcountcomp / 5)}</h1>`;


                    accuracybox.innerHTML =
                        `<h3>Accuracy</h3>
                         <h1>${accucomp}%</h1>`;


                    if (Number(inputcom.value) > wpmcountcomp) {

                        alert(
                            "your time is expired, you do not reach your target try again"
                        );

                    }
                    else if (Number(inputcom.value) < wpmcountcomp) {

                        alert(
                            "your time is expired, you reach your target congratulations"
                        );

                    }
                    else {

                        alert(
                            "your time is expired, you perfectly match your target"
                        );

                    }


                    time = 0;
                    timestart = false;

                    return;

                }

            }

            time++;

        }, 1000);

        timestart = true;

    }


    // Check the typed character
    if (pressed === span[currentindex].textContent) {


        // Mark current character as correct
        if (c == 1) {

            span[currentindex].style.color = "#ADFF2F";

            span[currentindex]
                .classList.remove("cyberactive");

        }
        else {

            span[currentindex].style.color = "white";

            span[currentindex]
                .classList.remove("active");

            wpmcountcomp++;

        }


        // Move to next character
        currentindex++;
        while (
    span[currentindex] &&
    span[currentindex].dataset.newline === "true"
) {
    currentindex++;
}


        // Add cursor to next character
        if (span[currentindex]) {

            if (c == 1) {

                span[currentindex]
                    .classList.add("cyberactive");

            }
            else {

                span[currentindex]
                    .classList.add("active");

            }

        }


        // Finish after the last character is processed
        if (currentindex >= span.length) {

            clearInterval(timer);


            let wpm = Math.floor(
                (count / time) * 60
            );


            let accuracy = Math.floor(
                ((span.length - accuracycount) /
                    span.length) * 100
            );


            box.forEach(box => {
                box.style.display = "";
            });


            onetext.innerHTML =
                `<h3>WPM</h3>
                 <h1>${wpm}</h1>`;


            twotext.innerHTML =
                `<h3>Accuracy</h3>
                 <h1>${accuracy}%</h1>`;


            threetext.innerHTML =
                `<h3>Word</h3>
                 <h1>${count + 1}</h1>
                 <h3>typed</h3>`;


            fourtext.innerHTML =
                `<h3>Error</h3>
                 <h1>${accuracycount}</h1>`;


            wpmbox.innerHTML =
                `<h3>WPM</h3>
                 <h1>${wpm}</h1>`;


            accuracybox.innerHTML =
                `<h3>Accuracy</h3>
                 <h1>${accuracy}%</h1>`;


            return;

        }

    }


    else {

        span[currentindex].style.color = "red";

        accuracycount++;

    }

}


    // Desktop keyboard
    document.addEventListener("keydown",(e)=>{


        if(
            e.key==="Shift" ||
            e.key==="Control" ||
            e.key==="Alt" ||
            e.key==="CapsLock"
        ){
            return;
        }


        processKey(e.key);


    });



    // Mobile keyboard
    input.addEventListener("input",(e)=>{


        let value=e.target.value;


        let last=value[value.length-1];


        processKey(last);


        // clear input after every character
        input.value="";


    });



    // focus mobile input

    para.addEventListener("click",()=>{

        input.focus();

    });


    para.addEventListener("touchstart",()=>{

        input.focus();

    });


}
    



typing();



next[0].addEventListener("click", () => {
    console.log("next");
     currentindex = 0;
     time=0;
     let timebox = document.querySelector(".timebox").innerHTML = time + "sec";
    //  timestart=;
    clearInterval(timer);
    timestart=false;
    box.forEach(box=>{
        box.style.display="none";
    })

  
    if(r==1){
        codedisplay();
        console.log("code");
    }
    
    else{
          display();
    }
    if(c==1){
        let span=para.querySelectorAll("span");
span.forEach(span=>{
    span.style.color="#00FF41";
    span.style.fontFamily="Share Tech Mono, monospace";
    span.classList.remove("active");
    span.classList.remove("cyberactive");
    span.style.fontSize="15px";
    span.style.marginLeft="2px";
    
})


    }
     
        

})

next[1].addEventListener("click", () => {
    console.log("next");
    compint=1;
     currentindex = 0;
     time=0;
     let clockdisplay = document.querySelector(".clockdisplay").innerHTML = time + "sec";
    //  timestart=;
    clearInterval(timer);
    timestart=false;
    accuracyboxcomp.style.display="none";
    wpmboxcomp.style.display="none";

  
    if(r==1){
        codedisplay();
        console.log("code");
    }
    
    else{
          displaycomp();
    }
    if(c==1){
        let span=para.querySelectorAll("span");
span.forEach(span=>{
    span.style.color="#00FF41";
    span.style.fontFamily="Share Tech Mono, monospace";
    span.classList.remove("active");
    span.classList.remove("cyberactive");
    span.style.fontSize="15px";
    span.style.marginLeft="2px";
    
})


    }
     
        

})

        






let body=document.querySelector("body");

cyber.addEventListener("click",()=>{
    light.style.display="none";
    lightonn.style.display="none";
    timebar.style.backgroundColor="transparent";
    comp.style.display="none";
    right.style.display="";
    para.style.borderColor="grey"
    container.style.backgroundImage = 'url("backgroundtypeweb.png")';
container.style.backgroundSize = "cover";
container.style.backgroundPosition = "center";
// container.style.backgroundRepeat = "no-repeat";
left.style.backgroundColor="transparent";
right.style.backgroundColor="transparent";
// container.style.backgroundColor="transparent";
para.style.backgroundColor="transparent";

  
    
   currentindex = 0;
     time=0;
    
    //  timestart=;
    clearInterval(timer);
    timestart=false;
     let timebox = document.querySelector(".timebox").innerHTML = time + "sec";
    //  timestart=;
    clearInterval(timer);
    timestart=false;
    
    c=1;
    //  para.style.backgroundColor="#111111";

    right.style.border="1px solid #00ff41";
    left.style.border="1px solid#39FF14";
    
    box.forEach(box=>{
        
         box.style.borderColor="#00AA00";
         box.style.display="none";

    })

    
 span=para.querySelectorAll("span");
span.forEach(span=>{
    span.style.color="#00FF41";
    span.style.fontFamily="Share Tech Mono, monospace";
    span.classList.remove("active");
    span.classList.remove("cyberactive");
    span.style.fontSize="15px";
    span.style.marginLeft="2px";
    
})



})
let comp=document.querySelector(".comp");
comptyping.addEventListener("click",()=>{
   
    c=0;
    //  let clockdisplay = document.querySelector(".clockdisplay").innerHTML = time + "sec";
  
    right.style.display="none";
    container.style.backgroundColor="";
    container.style.backgroundImage="none";
left.style.border="";
    comp.style.display="";
    pargraph  = [

`Learning to type efficiently is one of the most valuable skills anyone can develop in the digital age. Whether you are a student writing assignments, a programmer creating software, or a professional preparing reports, fast and accurate typing saves valuable time. The secret to improvement is not typing as quickly as possible but maintaining accuracy while practicing consistently. Every session strengthens muscle memory and builds confidence. As your fingers become familiar with the keyboard, you will naturally increase your speed without sacrificing precision. Good posture, proper finger placement, and steady breathing also contribute to better performance. Remember that progress comes from regular practice rather than occasional bursts of effort. Every mistake is an opportunity to learn, and every completed paragraph brings you one step closer to becoming an excellent typist.`,

`Technology has transformed the way people communicate, learn, and work together across the world. From smartphones and laptops to cloud computing and artificial intelligence, modern tools make everyday tasks faster and more convenient. Software developers spend countless hours designing applications that solve real problems, while designers focus on creating interfaces that are attractive and easy to use. Successful projects require teamwork, communication, creativity, and attention to detail. Learning new technologies may seem difficult at first, but persistence and curiosity allow anyone to improve their skills over time. Every challenge solved increases confidence and prepares you for even greater opportunities in the future.`,

`Reading books remains one of the best ways to expand your knowledge and improve your vocabulary. Every chapter introduces new ideas, different perspectives, and valuable lessons that can inspire personal growth. Whether you enjoy science fiction, history, biographies, or mystery novels, regular reading strengthens concentration and imagination. It also improves writing skills because you become familiar with sentence structure, grammar, and effective storytelling. Even reading for just twenty minutes each day can have a positive impact on your ability to think critically and communicate clearly. Small habits practiced consistently often produce remarkable long-term results.`,

`Programming is much more than writing lines of code. It involves understanding problems, designing efficient solutions, testing every feature carefully, and continuously improving the final product. Professional developers rarely create perfect software on their first attempt. Instead, they build small components, identify bugs, fix unexpected issues, and refine their work through multiple iterations. Debugging requires patience because even a missing character can prevent an entire program from running correctly. The most successful programmers are lifelong learners who enjoy experimenting with new technologies and never stop improving their knowledge through consistent practice.`,

`Success is rarely achieved overnight because meaningful progress requires patience, discipline, and continuous learning. Every successful athlete, musician, scientist, or entrepreneur has faced challenges, failures, and moments of self-doubt before reaching their goals. Instead of giving up after making mistakes, they analyze what went wrong, adjust their strategy, and continue moving forward. Consistency is often more important than talent because small improvements made every day accumulate into extraordinary achievements over time. Staying focused on long-term goals while celebrating small victories helps maintain motivation and creates a mindset capable of overcoming even the most difficult obstacles.`

];


    accuracycount = 0;     // reset errors
    time = 0;              // reset timer
    timestart = false;
    clearInterval(timer);
    currentindex=0;
    displaycomp();
    accuracyboxcomp.style.display="none";
    wpmboxcomp.style.display="none";
    typingcomp();

})
let paracomp=document.querySelector(".paracomp");
function displaycomp() {
    r=0;
    compint=1;
     count = 0;
        // let timebox = document.querySelector(".timebox").innerHTML = time + "sec";
    // two.style.display = "none";
    // next.style.display="none";
    // timebox.style.display = "none";
    paracomp.innerHTML = "";
    let currentparaindex = Math.floor(Math.random() * pargraph.length);

    let chars = pargraph[currentparaindex].split("");
    chars.forEach(char => {
        let span = document.createElement("span");
        span.id="display";
        if (char === " ") {
            count += 1;
            span.style.marginLeft = "15px";
            // span.innerHTML="&nbsp";
            span.style.minWidth = "2px";
            span.style.minHeight = "25px";
        }


        span.textContent = char;

        paracomp.append(span);
        

    })
      span = paracomp.querySelectorAll("span");

}

// function typingcomp() {
//     compint=1;
   
   

    
//     document.addEventListener("keydown", (e) => {
//         console.log("keydown");

//         if (!timestart) {
//             timer = setInterval(() => {
//                 console.log("time");
//                 let clockdisplay = document.querySelector(".clockdisplay").innerHTML = time + "sec";

//                 time++;

//             }, 1000);
//             timestart = true;
//         }

//         if (currentindex >=span.length-1 ) {
           
            
//             clearInterval(timer);
//             let wpm = Math.floor((count / time) * 60);
//              wpmbox.innerHTML = `<h3>WPM<h3><h1>${wpm}</h1>`;
//             // timebox.style.display = "flex";

//             let per = Math.floor(((span.length - accuracycount) / span.length) * 100);
//             accuracybox.innerHTML = `<h3>Accuracy</h3><h1>${per}%</h1>`
//             // two.style.display = "flex";

//             // next.style.display = "flex";
//             // threetext.innerHTML=`<h3>Word</h3><h1>${count+1}</h1><h3>typed</h3>`
//             // fourtext.innerHTML=`<h3>Error</h3><h1>${accuracycount}</h1>`;
//             return;
//         }
      

//        let pressed = e.key;

// if (pressed === "Enter") {
//     pressed = "\n";
// }

// if (pressed === "Tab") {
//     e.preventDefault();
//     pressed = "\t";
// }

// if (
//     pressed !== "\n" &&
//     pressed !== "\t" &&
//     pressed.length > 1
// ) {
//     return;
// }

// if (span[currentindex]) {

//    if (pressed === span[currentindex].textContent) {
//     if(c==1){
//         span[currentindex].style.color = "#ADFF2F";
//         //  container.style.backgroundColor="#112011";
//     span[currentindex].classList.remove("cyberactive");
//     // right.style.backgroundColor="#111111";

//     }
// else{
//     span[currentindex].style.color = "white";
//     span[currentindex].classList.remove("active");
// }

//     currentindex++;

//     // IMPORTANT FIX: skip newline automatically
//     while (
//         span[currentindex] &&
//         span[currentindex].textContent === "\n"
//     ) {
//         if(c==1){
//             span[currentindex].classList.remove("cyberactive");

//         }
//         else{
//         span[currentindex].classList.remove("active");
//         }
//          currentindex++;
//     }

//     if (span[currentindex]) {
//         if(c==1){
//               span[currentindex].classList.add("cyberactive");

//         }
//         else{
//         span[currentindex].classList.add("active");
//         }
//         return;
//     }

   
// } else {
//         span[currentindex].style.color = "red";
//         accuracycount++;
//     }
// }
// });
// }


