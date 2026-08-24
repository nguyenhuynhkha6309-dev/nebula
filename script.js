/* =========================================
   NEBULA — FAST ENGINE
   NO LOADING SCREEN
========================================= */


/* STAR FIELD */

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

let stars = [];

const mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
};


function resizeCanvas() {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  createStars();

}


function createStars() {

  stars = [];

  const amount =
    window.innerWidth < 700
      ? 160
      : 300;

  for (let i = 0; i < amount; i++) {

    stars.push({

      x: Math.random() * canvas.width,

      y: Math.random() * canvas.height,

      size: Math.random() * 1.2 + .2,

      speed: Math.random() * .18 + .03,

      opacity: Math.random() * .7 + .2,

      depth: Math.random()

    });

  }

}


function drawStars() {

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  stars.forEach(star => {

    star.y -= star.speed;

    if (star.y < 0) {

      star.y = canvas.height;

      star.x =
        Math.random() * canvas.width;

    }

    const x =
      star.x +
      (mouse.x - canvas.width / 2)
      * .001
      * star.depth;

    const y =
      star.y +
      (mouse.y - canvas.height / 2)
      * .001
      * star.depth;

    ctx.beginPath();

    ctx.arc(
      x,
      y,
      star.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255,255,255,${star.opacity})`;

    ctx.fill();

  });

  requestAnimationFrame(drawStars);

}


resizeCanvas();

drawStars();


window.addEventListener(
  "resize",
  resizeCanvas
);


/* CURSOR */

const glow =
  document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

  mouse.x = e.clientX;
  mouse.y = e.clientY;

  if (glow) {

    glow.style.left =
      e.clientX + "px";

    glow.style.top =
      e.clientY + "px";

  }

});


/* NAV */

const nav =
  document.querySelector("nav");

const hamburger =
  document.getElementById("hamburger");

const navLinks =
  document.querySelectorAll("nav a");


if (hamburger) {

  hamburger.addEventListener("click", () => {

    nav.classList.toggle(
      "mobile-open"
    );

  });

}


navLinks.forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove(
      "mobile-open"
    );

  });

});


/* ACTIVE NAV */

const sections =
  document.querySelectorAll(
    "section[id]"
  );


window.addEventListener(
  "scroll",
  () => {

    let current = "";

    sections.forEach(section => {

      if (
        window.scrollY >=
        section.offsetTop - 250
      ) {

        current =
          section.id;

      }

    });

    navLinks.forEach(link => {

      link.classList.toggle(
        "active",
        link.getAttribute("href") ===
        "#" + current
      );

    });

  },
  { passive: true }
);


/* EXPLORE */

const exploreButton =
  document.getElementById(
    "exploreButton"
  );


exploreButton?.addEventListener(
  "click",
  () => {

    document
      .getElementById("explore")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);


/* EXPERIENCE */

const experience =
  document.getElementById(
    "experience"
  );

const playButton =
  document.getElementById(
    "playButton"
  );

const launchButton =
  document.getElementById(
    "launchBtn"
  );

const experienceClose =
  document.getElementById(
    "experienceClose"
  );


playButton?.addEventListener(
  "click",
  () => {

    experience.classList.add(
      "active"
    );

  }
);


launchButton?.addEventListener(
  "click",
  () => {

    experience.classList.add(
      "active"
    );

  }
);


experienceClose?.addEventListener(
  "click",
  () => {

    experience.classList.remove(
      "active"
    );

  }
);


/* WORLD DATA */

const worlds = {

  kepler: {

    type: "EXOPLANET",

    title: "KEPLER-186F",

    description:
      "An Earth-sized exoplanet orbiting within the habitable zone of its star. One of the most fascinating worlds discovered beyond our solar system.",

    distance: "500 LY",

    category: "TERRESTRIAL"

  },


  jupiter: {

    type: "GAS GIANT",

    title: "JUPITER",

    description:
      "The largest planet in our solar system, surrounded by powerful storms and the famous Great Red Spot.",

    distance: "43 MIN",

    category: "GAS GIANT"

  },


  saturn: {

    type: "GAS GIANT",

    title: "SATURN",

    description:
      "A spectacular gas giant surrounded by a huge system of icy rings made from countless particles of ice and rock.",

    distance: "80 MIN",

    category: "GAS GIANT"

  },


  mars: {

    type: "TERRESTRIAL",

    title: "MARS",

    description:
      "The red planet contains ancient valleys, enormous volcanoes and evidence that liquid water once flowed across its surface.",

    distance: "3–22 MIN",

    category: "ROCKY PLANET"

  }

};


/* MODAL */

const modal =
  document.getElementById(
    "worldModal"
  );

const modalClose =
  document.getElementById(
    "modalClose"
  );

const modalType =
  document.getElementById(
    "modalType"
  );

const modalTitle =
  document.getElementById(
    "modalTitle"
  );

const modalDescription =
  document.getElementById(
    "modalDescription"
  );

const modalDistance =
  document.getElementById(
    "modalDistance"
  );

const modalCategory =
  document.getElementById(
    "modalCategory"
  );


function openWorld(name) {

  const world =
    worlds[name];

  if (!world) return;

  modalType.textContent =
    world.type;

  modalTitle.textContent =
    world.title;

  modalDescription.textContent =
    world.description;

  modalDistance.textContent =
    world.distance;

  modalCategory.textContent =
    world.category;

  modal.classList.add(
    "active"
  );

}


document
  .querySelectorAll(
    ".world-button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      e => {

        const card =
          e.currentTarget
            .closest(
              ".world-card"
            );

        openWorld(
          card.dataset.world
        );

      }
    );

  });


modalClose?.addEventListener(
  "click",
  () => {

    modal.classList.remove(
      "active"
    );

  }
);


modal?.addEventListener(
  "click",
  e => {

    if (
      e.target === modal
    ) {

      modal.classList.remove(
        "active"
      );

    }

  }
);


/* RANDOM WORLD */

const randomButton =
  document.getElementById(
    "randomWorld"
  );


randomButton?.addEventListener(
  "click",
  () => {

    const names =
      Object.keys(worlds);

    const random =
      names[
        Math.floor(
          Math.random() *
          names.length
        )
      ];

    openWorld(random);

  }
);


/* ESCAPE */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "Escape") {

      modal?.classList.remove(
        "active"
      );

      experience?.classList.remove(
        "active"
      );

    }

  }
);


/* BACK TOP */

document
  .getElementById("backTop")
  ?.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );


/* PLANET PARALLAX */

const heroUniverse =
  document.querySelector(
    ".hero-universe"
  );

let px = 0;
let py = 0;


document.addEventListener(
  "mousemove",
  e => {

    if (
      window.innerWidth < 800 ||
      !heroUniverse
    ) return;

    const targetX =
      (e.clientX /
      window.innerWidth -
      .5) * 12;

    const targetY =
      (e.clientY /
      window.innerHeight -
      .5) * 12;

    px +=
      (targetX - px) * .08;

    py +=
      (targetY - py) * .08;

  }
);


function planetParallax() {

  if (
    heroUniverse &&
    window.innerWidth >= 800
  ) {

    heroUniverse.style.transform =
      `translate3d(${px}px,${py}px,0)`;

  }

  requestAnimationFrame(
    planetParallax
  );

}

planetParallax();


/* 3D CARDS */

if (window.innerWidth > 800) {

  document
    .querySelectorAll(
      ".world-card"
    )
    .forEach(card => {

      card.addEventListener(
        "mousemove",
        e => {

          const rect =
            card.getBoundingClientRect();

          const x =
            e.clientX -
            rect.left;

          const y =
            e.clientY -
            rect.top;

          const rx =
            ((y / rect.height) -
            .5) * -5;

          const ry =
            ((x / rect.width) -
            .5) * 5;

          card.style.transform =
            `
            translateY(-8px)
            perspective(700px)
            rotateX(${rx}deg)
            rotateY(${ry}deg)
            `;

        }
      );


      card.addEventListener(
        "mouseleave",
        () => {

          card.style.transform =
            "";

        }
      );

    });

}


/* SCROLL REVEAL */

const revealElements =
  document.querySelectorAll(
    ".section-top, .world-card, .mission, .about-copy, .about-visual"
  );


const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "revealed"
            );

            observer.unobserve(
              entry.target
            );

          }

        }
      );

    },
    {
      threshold: .08
    }
  );


revealElements.forEach(
  element => {

    element.classList.add(
      "reveal-ready"
    );

    observer.observe(
      element
    );

  }
);


/* REVEAL CSS */

const revealCSS =
  document.createElement(
    "style"
  );

revealCSS.textContent = `

.reveal-ready {
  opacity: 0;
  transform: translateY(25px);
  transition:
    opacity .7s ease,
    transform .7s ease;
}

.reveal-ready.revealed {
  opacity: 1;
  transform: translateY(0);
}

`;

document.head.appendChild(
  revealCSS
);


/* DONE */

console.log(
  "%cNEBULA ONLINE",
  "font-size:28px;font-weight:bold;"
);

console.log(
  "%cNo loading screen. Fast mode.",
  "color:#8b5cf6;"
);
