// ------------------- PASSWORD -------------------
const passwordGate = document.getElementById("passwordGate");
const mainContent = document.getElementById("mainContent");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const passwordMessage = document.getElementById("passwordMessage");
const secretPassword = "1902";

submitPassword.onclick = () => {
  if (passwordInput.value === secretPassword) {
    passwordGate.classList.add("hidden");
    mainContent.classList.remove("hidden");
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
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
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
noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
};

// ------------------- YES BUTTON -------------------
const invite = document.getElementById("invite");
const yesMessage = document.getElementById("yesMessage");
const quizIntro = document.getElementById("quizIntro");

document.getElementById("yes").onclick = () => {
  invite.classList.add("hidden");
  yesMessage.classList.add("hidden");
  startStory();
};

// ------------------- STORY FUNCTION -------------------
function startStory() {
  const story = document.getElementById("story");
  story.classList.remove("hidden");

  const elements = story.querySelectorAll(".storyText, .storyImg");

  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.remove("hidden");
      el.style.opacity = 1;
    }, i * 3500); // 3.5s between each element
  });

  // After story ends, show quiz intro
  setTimeout(() => {
    story.classList.add("hidden");
    quizIntro.classList.remove("hidden");
  }, elements.length * 3500 + 500);
}

// ------------------- QUIZ -------------------
const questions = [
  {
    q: "What you crave but pretend not to…",
    a: [
      ["Attention without effort 🌸", true, "Finally, someone notices… yep, that’s you."],
      ["A little chaos in your day ✨", false, "I see you. Stirring things up, classic move."],
      ["Chocolate and snacks 🍫", false, "Sweet tooth detected… cute, but we’re not talking food."],
      ["People thinking you don’t care 😏", false, "Ah, that mask again… do you really fool anyone?"]
    ]
  },
  {
    q: "The thing you do that leaves people speechless…",
    a: [
      ["A single glance that says everything 🤍", true, "Exactly. That look of yours… lethal, but I like it."],
      ["Dramatic entrances 🌙", false, "Bold… you do like a little attention, huh?"],
      ["Talking nonsense just to confuse them 😏", false, "Heh… typical, keeping everyone on their toes."],
      ["Walking away mysteriously ✨", false, "Sneaky… disappearing act noted, very you."]
    ]
  },
  {
    q: "Your eyes hide…",
    a: [
      ["Storms no one can predict 🌪️", true, "Yep. Those eyes… could wreck worlds if they wanted."],
      ["Secret jokes only you get 😎", false, "Ha, clever… always laughing alone, classic move."],
      ["The truth about everyone else 😏", false, "Bold… eyes that see too much. Dangerous."],
      ["Nothing… just mischief ✨", false, "Mischief. I should’ve guessed."]
    ]
  },
  {
    q: "If you were a story, your plot twist would be…",
    a: [
      ["Everyone realizing they never knew you 🤍", true, "Exactly. That moment when they get it… too late."],
      ["A sudden laugh in the rain 🌧️", false, "Cute, unpredictable… but that’s not the whole story."],
      ["A chaotic scene everyone forgets 😏", false, "Heh… yeah, leaving chaos behind is definitely your style."],
      ["An ending everyone predicts ✨", false, "Too safe. You’re never predictable, are you?"]
    ]
  },
  {
    q: "Your dangerous side is…",
    a: [
      ["Calmly taking over a room 🌙", true, "That’s the one. Quiet power… exactly like I imagined."],
      ["Teasing just to watch reactions 😏", false, "Haha… yep, playful chaos. Classic you."],
      ["Laughing at the wrong time 😂", false, "Bold… you know how to make people uncomfortable… and I love it."],
      ["Breaking rules no one sees ✨", false, "Sneaky… quietly bending everything to your way. I see you."]
    ]
  }
];


let qi = 0; // current question index

function showQ() {
  // Get the current question
  const currentQ = questions[qi];

  // Set question text
  question.innerText = currentQ.q;
  answers.innerHTML = ""; // clear previous buttons

  // Create feedback container
  let feedback = document.createElement("p");
  feedback.id = "quizFeedback";
  feedback.style.marginTop = "15px";
  feedback.style.fontStyle = "italic";
  feedback.style.opacity = "0";
  answers.appendChild(feedback);

  // Create buttons for answers
  currentQ.a.forEach(ans => {
    const b = document.createElement("button");
    b.innerText = ans[0];
    b.style.display = "block";
    b.style.margin = "10px auto";

    b.onclick = () => {
      // Show feedback
      feedback.innerText = ans[2]; // feedback text from array
      feedback.style.opacity = "1";

      if (ans[1]) {
        // Correct answer → add class and move to next question
        b.classList.add("correct");
        setTimeout(() => {
          qi++;
          if (qi < questions.length) {
            showQ(); // next question
          } else {
            reveal(); // end of quiz
          }
        }, 1500);
      } else {
        // Wrong answer → add class, but do NOT move
        b.classList.add("wrong");
      }
    };

    answers.appendChild(b);
  });
}

// Start the quiz on quizIntro click
quizIntro.onclick = () => {
  quizIntro.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQ();
};


// ------------------- REVEAL -------------------
function reveal() {
  ["flowers", "memories", "music", "final"].forEach((id, i) => {
    setTimeout(() => document.getElementById(id).classList.remove("hidden"), i * 1200);
  });

  const flowers = [
    "Your softness 🤍",
    "Your calm energy 🌸",
    "Your beautiful mind ✨",
    "Your warmth 🕯️",
    "Your heart 🤍"
  ];

  const flowerCards = document.getElementById("flowerCards");

  flowers.forEach((t, i) => {
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
