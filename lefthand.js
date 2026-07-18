const para = document.querySelector(".para");


// =============================
// PARAGRAPHS
// =============================

const homeRowParagraphs = [

    "we were ready to start a great race across the west. fred was brave and fast as he ran across the grass. a brave racer can face a hard race and still stay calm. the crowd was glad to see fred race across the wide track.",

    "a fast red car raced across the west road as the driver watched the road ahead. the car was fast and brave on the rough track. we were ready for the race and watched as the red car crossed the grass near the road.",

    "fred was a great racer and he was ready for a hard race. he ran across the grass and raced past a red car. the race was fast and hard but fred was brave and stayed ahead of the rest.",

    "we can create a great web page with clean code and a clear design. a web developer must write code with care and test each part. great code can make a fast and safe web app for users.",

    "a brave man was walking across a wide road when he saw a red car race past. the car was fast and the road was rough. he stood near the grass and watched the car race far away.",

    "the west was warm and the grass was green after a warm rain. fred was ready to walk across the field and search for a safe path. he walked fast but stayed aware of the rough ground.",

    "a great team can work hard and create a safe and fast result. each person can share a clear idea and work toward a common goal. brave teams face hard tasks and never fear a fresh start.",

    "we were faced with a hard task but we were ready to work. fred read the code and found a rare error. he was careful and fixed the error with a fresh and clear idea.",

    "a red fox was fast as it ran across the grass. the fox was aware of the fresh tracks near the road. it raced across the field and was gone before the farmer could see it.",

    "great effort can create a strong result when we work with care. a fast start is useful but a clear plan is more useful. we can face each hard task with a brave and fresh mind.",

    "the race was ready to start and the crowd was loud. fred was near the front and was ready to run fast. as the race began he raced across the track and stayed ahead of the rest.",

    "we can learn to type fast with regular practice and clear focus. each word can help us grow more aware of the keys. a fresh start each day can create a great change over time.",

    "a farmer was working across the wide field when a strong wind came from the west. he was ready for the hard weather and moved fast toward the safe area near the road.",

    "fred was a brave friend who was always ready to face a hard task. he cared for his friends and worked hard to create a safe place for everyone. his great effort was clear to all.",

    "a fast web page can create a great user experience when the code is clean. developers must write clear code and test every feature. a careful developer can find errors and create a safe web app.",

    "the red car was far ahead as we raced across the wide road. the driver was fast but careful and stayed aware of the rough road. after the race we were glad to rest near the green grass.",

    "a fresh idea can change the way we work and create a great result. we can read, write, test, and fix our code with care. each error can teach us how to create a better and safer app.",

    "the brave racer faced a hard road and a fast race. he was tired but stayed focused and kept moving forward. when he reached the end he was glad because his effort had created a great result.",

    "we were ready for a fresh start after a hard day of work. the team was aware of each error and worked to fix every part. with clear effort and brave action we created a great result.",

    "a great future can start with a small effort each day. we can read, write, and practice with care. a fast and clear mind grows with regular work, and every fresh effort can create a better result."


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