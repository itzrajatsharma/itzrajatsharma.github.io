const para = document.querySelector(".para");


// =============================
// PARAGRAPHS
// =============================

const homeRowParagraphs = [

    
    "you may enjoy typing with your right hand when you practice every day. you can use your right hand to type many useful words and phrases. your typing may improve when you keep your eyes on the screen and use the right fingers.",

    "your journey may begin with a simple practice routine. you should try to type slowly and accurately before you try to type quickly. your hands will learn the correct movement when you practice with patience.",

    "many people enjoy learning new skills when they practice regularly. you may improve your typing when you focus on each word. your right hand can become more comfortable with every minute of careful practice.",

    "you should keep your fingers near the home position while you type. your index finger may move between many keys while your other fingers stay ready. good habits will help you type with more confidence.",

    "john and lily enjoy typing many simple words every morning. they try to maintain a steady rhythm while they type. their hands become more familiar with the keyboard when they practice regularly.",

    "you may find typing enjoyable when you stop worrying about speed. focus on accuracy and allow your fingers to learn naturally. your typing speed will improve when your movements become smooth.",

    "many young people enjoy using computers for learning and creating new things. you can improve your skills by typing useful sentences every day. regular practice will help you become more confident.",

    "your mind may feel tired after many minutes of practice. you should take a short break and then continue when you feel ready. healthy practice habits can help you improve without unnecessary pressure.",

    "you may type many words with your right hand when you learn the correct finger movements. your fingers should move naturally across the keyboard. try to maintain a smooth rhythm while typing.",

    "john enjoys learning new programming languages and typing many lines of code. he practices daily and tries to improve his accuracy. his patience helps him become more comfortable with the keyboard.",

    "you should try to type every word carefully and avoid looking down at your hands. your fingers will slowly learn the location of each key. daily practice can make typing feel more natural.",

    "many hours of practice may help you improve your typing ability. however, quality practice is more important than simply typing for a long time. focus on accuracy, rhythm, and comfortable finger movement.",

    "you may enjoy typing short stories and useful messages during your practice. every sentence gives your fingers another opportunity to learn. keep practicing and your typing will become smoother.",

    "your right hand can move quickly when your fingers know where each key is located. do not worry if you make mistakes during practice. every mistake can help you understand which keys need more attention.",

    "many people try to type quickly before they learn accuracy. you should first learn to type correctly and comfortably. speed will naturally improve when your fingers become familiar with the keyboard.",

    "you may use your typing practice time to improve your focus and patience. try to keep a steady rhythm and avoid unnecessary movements. small improvements every day can lead to great results.",

    "john and many other people enjoy practicing typing with simple words. they focus on accuracy and try not to rush. after regular practice, their fingers move more naturally across the keyboard.",

    "you should remain calm when you make a typing mistake. stop for a moment, understand the error, and continue carefully. patience and regular practice will help you improve your typing skills.",

    "many useful words can be typed using the right side of the keyboard. you may practice these words repeatedly until your fingers remember their positions. regular practice will make the process easier.",

    "your typing journey may take time, but every practice session is useful. keep your hands relaxed, maintain a steady rhythm, and focus on accuracy. with daily practice, you may become a faster and more confident typist."

];


// =============================
// VARIABLES
// =============================

let currentIndex = 0;

let currentParagraphIndex = -1;

let homeRowText;


// Statistics
let correctChars = 0;

let errorChars = 0;

let totalTyped = 0;


// =============================
// BOXES
// =============================

const accuracyBox =
    document.querySelector(".one");

const errorBox =
    document.querySelector(".two");

const charBox =
    document.querySelector(".three");


// =============================
// CREATE LABELS
// =============================

const accuracyLabel =
    document.createElement("div");

const errorLabel =
    document.createElement("div");

const charLabel =
    document.createElement("div");


// =============================
// CREATE VALUES
// =============================

const accuracyValue =
    document.createElement("div");

const errorValue =
    document.createElement("div");

const charValue =
    document.createElement("div");


// =============================
// LABEL TEXT
// =============================

accuracyLabel.textContent =
    "Accuracy";

errorLabel.textContent =
    "Errors";

charLabel.textContent =
    "Characters Typed";


// =============================
// INITIAL VALUES
// =============================

accuracyValue.textContent =
    "100%";

errorValue.textContent =
    "0";

charValue.textContent =
    "0";


// =============================
// ADD CLASSES
// =============================

accuracyLabel.classList.add(
    "stat-label"
);

errorLabel.classList.add(
    "stat-label"
);

charLabel.classList.add(
    "stat-label"
);


accuracyValue.classList.add(
    "stat-value"
);

errorValue.classList.add(
    "stat-value"
);

charValue.classList.add(
    "stat-value"
);


// =============================
// ADD TO BOXES
// =============================

accuracyBox.appendChild(
    accuracyLabel
);

accuracyBox.appendChild(
    accuracyValue
);


errorBox.appendChild(
    errorLabel
);

errorBox.appendChild(
    errorValue
);


charBox.appendChild(
    charLabel
);

charBox.appendChild(
    charValue
);


// =============================
// GET RANDOM PARAGRAPH
// =============================

function getRandomParagraph() {

    let randomIndex;


    do {

        randomIndex = Math.floor(

            Math.random() *

            homeRowParagraphs.length

        );

    }

    while (

        randomIndex ===

        currentParagraphIndex

    );


    currentParagraphIndex =
        randomIndex;


    return homeRowParagraphs[
        randomIndex
    ];

}


// =============================
// LOAD NEW PARAGRAPH
// =============================

function loadNewParagraph() {


    // Get random text
    homeRowText =
        getRandomParagraph();


    // Reset character position
    currentIndex = 0;


    // Clear old paragraph
    para.innerHTML = "";


    // Create span for every character
    for (

        const char of homeRowText

    ) {


        const span =
            document.createElement(
                "span"
            );


        // Preserve spaces
        span.textContent =

            char === " "

                ? "\u00A0"

                : char;


        para.appendChild(
            span
        );

    }


    // Get all characters
    const characters =
        para.querySelectorAll(
            "span"
        );


    // Add cursor to first character
    if (

        characters.length > 0

    ) {

        characters[0]

            .classList.add(
                "active"
            );

    }

}


// =============================
// UPDATE STATISTICS
// =============================

function updateStats() {


    let accuracy = 0;


    // Calculate accuracy
    if (

        totalTyped > 0

    ) {


        accuracy =

            (

                correctChars /

                totalTyped

            ) * 100;

    }


    // Update accuracy
    accuracyValue.textContent =

        Math.round(
            accuracy
        ) + "%";


    // Update errors
    errorValue.textContent =
        errorChars;


    // Update characters typed
    charValue.textContent =
        totalTyped;

}


// =============================
// LOAD FIRST PARAGRAPH
// =============================

loadNewParagraph();


// =============================
// TYPING LOGIC
// =============================

document.addEventListener(

    "keydown",

    function (e) {


        // Ignore special keys
        if (

            e.key.length !== 1

        ) {

            return;

        }


        // Stop if paragraph is finished
        if (

            currentIndex >=

            homeRowText.length

        ) {

            return;

        }


        // Get all character spans
        const characters =

            para.querySelectorAll(
                "span"
            );


        // Expected character
        const expectedCharacter =

            homeRowText[
                currentIndex
            ];


        // Count every typed key
        totalTyped++;


        // =============================
        // CORRECT CHARACTER
        // =============================

        if (

            e.key ===
            expectedCharacter

        ) {


            // Remove wrong class
            characters[
                currentIndex
            ]

                .classList.remove(
                    "wrong"
                );


            // Add correct class
            characters[
                currentIndex
            ]

                .classList.add(
                    "correct"
                );


            // Remove cursor
            characters[
                currentIndex
            ]

                .classList.remove(
                    "active"
                );


            // Count correct character
            correctChars++;


            // Move to next character
            currentIndex++;


            // =============================
            // PARAGRAPH COMPLETED
            // =============================

            if (

                currentIndex >=

                homeRowText.length

            ) {


                // Load next paragraph
                loadNewParagraph();


                // Update statistics
                updateStats();


                return;

            }


            // Move cursor
            characters[
                currentIndex
            ]

                .classList.add(
                    "active"
                );

        }


        // =============================
        // WRONG CHARACTER
        // =============================

        else {


            // Count error
            errorChars++;


            // Mark current character red
            characters[
                currentIndex
            ]

                .classList.add(
                    "wrong"
                );

        }


        // Update statistics
        updateStats();

    }

);