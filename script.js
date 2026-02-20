// ------------------- PASSWORD -------------------
const passwordGate = document.getElementById("passwordGate");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordMessage = document.getElementById("passwordMessage");
const secretPassword = "1902";
passwordInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    submitPassword.click();
  }
});

submitPassword.onclick = () => {
  if (passwordInput.value === secretPassword) {
    passwordGate.classList.add("opening");

    passwordGate.style.transition = "opacity 1s ease";
    passwordGate.style.opacity = "0";

    setTimeout(() => {
      passwordGate.classList.add("hidden");
      mainContent.classList.remove("hidden");

      window.scrollTo({ top: 0, behavior: "smooth" });

      mainContent.style.opacity = "0";
      mainContent.style.transition = "opacity 1.2s ease";

      setTimeout(() => {
        mainContent.style.opacity = "1";
      }, 100);

    }, 1000);

  } else {
    passwordMessage.innerText = "That’s not your day 🤍";
  }
};


// ------------------- PETALS -------------------
setInterval(() => {
  const p = document.createElement("div");
  p.className = "petal";
  p.innerText = "🌸";
  p.style.left = Math.random() * window.innerWidth + "px";
  p.style.bottom = "-20px";
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 7000);
}, 500);


// ------------------- BALLOONS -------------------
setInterval(() => {
  const b = document.createElement("div");
  b.className = "balloon";
  b.innerText = ["🎈","🤍","🌷","✨"][Math.floor(Math.random()*4)];
  b.style.left = Math.random() * window.innerWidth + "px";
  b.style.bottom = "-40px";
  b.style.fontSize = 24 + Math.random()*18 + "px";
  document.body.appendChild(b);
  setTimeout(() => b.remove(), 10000);
}, 1200);


// ------------------- CLICK FLOWERS -------------------
document.addEventListener("click", e => {
  const f = document.createElement("span");
  f.innerText = "🌸";
  f.style.position = "fixed";
  f.style.left = e.clientX + "px";
  f.style.top = e.clientY + "px";
  f.style.animation = "fadeUp 1.2s ease forwards";
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 1200);
});


// ------------------- CURSOR -------------------
const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});


// ------------------- SECTIONS & BACKGROUND -------------------
const backgrounds = {
  invite: "linear-gradient(135deg, #fff1f5, #fbeff2)",
  quiz: "linear-gradient(135deg, #f6fff8, #eaf7f0)",
  flowers: "linear-gradient(135deg, #fffdf7, #f7f1e8)",
  memories: "linear-gradient(135deg, #f8f9ff, #eceffd)",
  final: "linear-gradient(135deg, #1f1f2e, #2b2b40)"
};

Object.keys(backgrounds).forEach(id => {
  const sec = document.getElementById(id);
  if (!sec) return;
  sec.addEventListener("mouseenter", () => {
    document.body.style.background = backgrounds[id];
  });
});


// ------------------- NO BUTTON -------------------
const noBtn = document.getElementById("no");
if (noBtn) {
  noBtn.onmouseover = () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
  };
}


// ------------------- YES BUTTON -------------------
const invite = document.getElementById("invite");
const yesMessage = document.getElementById("yesMessage");
const quizIntro = document.getElementById("quizIntro");

document.getElementById("yes").onclick = () => {
  invite.classList.add("hidden");
  yesMessage.classList.add("hidden");
  startStory();
};

function startStory() {
  const story = document.getElementById("story");
  story.classList.remove("hidden");

  const elements = story.querySelectorAll(".storyText, .storyImg");

  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove("hidden");
      el.classList.add("storyVisible");
    }, i * 3500);
  });

  setTimeout(() => {
    story.classList.add("hidden");
    quizIntro.classList.remove("hidden");
  }, elements.length * 3500 + 800);
}


// ------------------- QUIZ -------------------
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const answers = document.getElementById("answers");

// ------------------- QUIZ QUESTIONS -------------------
const questions = [
  {
    q: "What you crave but pretend not to…",
    a: [
      ["Chocolate and snacks 🍫", false, "Sweet tooth detected… cute, but we’re not talking food."],
      ["Attention without effort 🌸", true, "Finally, someone notices… yep, that’s you."],
      ["People thinking you don’t care 😏", false, "Ah, that mask again… do you really fool anyone?"],
      ["A little chaos in your day ✨", false, "I see you. Stirring things up, classic move."]
    ]
  },
  {
    q: "The thing you do that leaves people speechless…",
    a: [
      ["Talking nonsense just to confuse them 😏", false, "Heh… typical, keeping everyone on their toes."],
      ["A single glance that says everything 🤍", true, "Exactly. That look of yours… lethal, but I like it."],
      ["Walking away mysteriously ✨", false, "Sneaky… disappearing act noted, very you."],
      ["Dramatic entrances 🌙", false, "Bold… you do like a little attention, huh?"]
    ]
  },
  {
    q: "Your eyes hide…",
    a: [
      ["Secret jokes only you get 😎", false, "Ha, clever… always laughing alone, classic move."],
      ["Nothing… just mischief ✨", false, "Mischief. I should’ve guessed."],
      ["Storms no one can predict 🌪️", true, "Yep. Those eyes… could wreck worlds if they wanted."],
      ["The truth about everyone else 😏", false, "Bold… eyes that see too much. Dangerous."]
    ]
  },
  {
    q: "If you were a story, your plot twist would be…",
    a: [
      ["A chaotic scene everyone forgets 😏", false, "Heh… yeah, leaving chaos behind is definitely your style."],
      ["An ending everyone predicts ✨", false, "Too safe. You’re never predictable, are you?"],
      ["Everyone realizing they never knew you 🤍", true, "Exactly. That moment when they get it… too late."],
      ["A sudden laugh in the rain 🌧️", false, "Cute, unpredictable… but that’s not the whole story."]
    ]
  },
  {
    q: "Your dangerous side is…",
    a: [
      ["Teasing just to watch reactions 😏", false, "Haha… yep, playful chaos. Classic you."],
      ["Calmly taking over a room 🌙", true, "That’s the one. Quiet power… exactly like I imagined."],
      ["Breaking rules no one sees ✨", false, "Sneaky… quietly bending everything to your way. I see you."],
      ["Laughing at the wrong time 😂", false, "Bold… you know how to make people uncomfortable… and I love it."]
    ]
  }
];

let qi = 0;

function showQ() {
  const currentQ = questions[qi];
  question.innerText = currentQ.q;
  answers.innerHTML = "";

  const feedback = document.createElement("p");
  feedback.style.marginTop = "15px";
  feedback.style.fontStyle = "italic";
  feedback.style.opacity = "0";
  answers.appendChild(feedback);

  currentQ.a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];
    b.style.display = "block";
    b.style.margin = "10px auto";

    b.onclick = () => {
      feedback.innerText = ans[2];
      feedback.style.opacity = "1";

      if (ans[1]) {
        b.classList.add("correct");
        setTimeout(() => {
          qi++;
          if (qi < questions.length) {
            showQ();
          } else {
            reveal();
          }
        }, 1500);
      } else {
        b.classList.add("wrong");
      }
    };

    answers.appendChild(b);
  });
}

quizIntro.onclick = () => {
  quizIntro.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQ();
};


// ------------------- REVEAL -------------------
function reveal() {
  ["flowers", "memories", "music", "final"].forEach((id, i) => {
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.classList.remove("hidden");
    }, i * 1200);
  });

  const flowerTexts = [
    "Your fearless side that says what it wants 💥",
    "Your laugh… it’s dangerous",
    "That gnawa soul in you",
    "Your fearless side that says what it wants 💥",
    "Your ‘who even are you right now’ character switches 😭"
  ];

  const flowerCards = document.getElementById("flowerCards");

  flowerTexts.forEach((t, i) => {
    setTimeout(() => {
      const c = document.createElement("div");
      c.className = "card";
      c.innerText = "🌷 " + t;
      flowerCards.appendChild(c);
    }, i * 600);
  });
}


// ------------------- FLIP -------------------
function flip(el) {
  el.classList.toggle("flipped");
}
