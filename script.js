"use strict";

const skillsContainer = document.querySelector(".skills__container");
const footer = document.querySelector(".footer");
const about = document.querySelector(".about__content");
const date = new Date().getFullYear();

// class RenderSkills {
//   constructor(arrNames) {
//     this.arrNames = arrNames;
//   }

//   render(arrNames) {
//     arrNames.forEach((name, i) => {
//       const html = `
//         <li class="skills__container--item">
//           <p class="name ">${name}</p>
//           <p class="skillLevel">Knowledge</p>
//           <div class="box">

//             <div class="loading k${i + 1}"></div>
//           </div>

//           <p class="skillLevel">Confidence</p>
//           <div class="box">
//             <div class="loading c${i + 1}"></div>
//           </div>
//         </li>`;

//       skillsContainer.insertAdjacentHTML("beforeend", html);
//     });
//   }
// }

// const names = [
//   "HTML",
//   "CSS / SASS",
//   "Javascript / ES6",
//   "NodeJS / MongoDB",
//   "Async / Await",
//   "React &rArr; in Progress",
// ];
//Render skill section
// const skillSection = new RenderSkills(names);

// skillSection.render(names);

//Render footer with up to date date.

const footerHTML = `&copy; Leszek Myrkwa ${date}`;

const aboutHTML = `<h2>Hi, as You know my name is Leszek and I'm <span class="span-small">Front End Developer.</span>  💻</h2>
<p>I'm highly motivated to achive my goal of becoming better and better each day, that's why every day I learn something new and try to progress. For now I focus on Front End but when I start feel like I'm really good with it, I want to start also with <span class="span-small">Back End to become Full Stack Dev</span>  one day.</p>
<p>I have started my journey <span class="span-small"> 7 months ago</span>  and I spend all of my free time on studying programming, other things that I'm intrested with are all tech like phones , laptops etc and also E-sport if I can find some time for it 😂 </p>`;

about.insertAdjacentHTML("beforeend", aboutHTML);

footer.insertAdjacentHTML("beforeend", footerHTML);
