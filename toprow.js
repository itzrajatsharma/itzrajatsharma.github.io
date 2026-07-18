const para = document.querySelector(".para");


// =============================
// PARAGRAPHS
// =============================

const homeRowParagraphs = [

    
   
    "we were to write a proper query before we try to type quickly. typewriters were once very popular, yet today people use computers for every type of work. you will improve your typing when you practice every word with care and try to keep your rhythm steady.",

    "the quiet writer wrote a proper report while the entire group waited for the report to appear. every writer should try to type with accuracy before trying to type with speed. regular practice will improve your typing and make every word easier to write.",

    "you were right to try a new typing routine because practice will improve your typing power. write every word slowly at first and try to keep your fingers ready for the next letter. over time your typing will become quicker, quieter, and more accurate.",

    "a proper routine is important when you want to improve your typing. you should write a few words, read the result, and try again. every practice session will give your fingers more power and help you type with better rhythm.",

    "the quiet river moved slowly while the bright sun appeared over the water. people were waiting near the river to watch the beautiful view. every person tried to write about the peaceful scene in a proper way.",

    "you may try to write a short report about your daily practice. write every word with care and try to avoid unnecessary errors. your typing speed will improve when your fingers learn the proper movement for every letter.",

    "the writer was proud of the report because every part was written with proper care. the report required many hours of practice and research. after writing every part, the writer read the entire report and tried to improve every error.",

    "we were ready to write a new story about a quiet traveler who wanted to explore the world. the traveler wrote every important thought in a private diary. every new experience gave the traveler another story to write.",

    "proper typing requires patience, practice, and regular effort. you may not type quickly during your first practice session, but every attempt will help your fingers learn. try to keep your eyes on the words and allow your fingers to move naturally.",

    "the bright tower appeared over the quiet town while people waited for the new report. every person wanted to know what would happen next. the writer prepared a proper story and wrote every important detail carefully.",

    "you should try to improve your typing one word at a time. write slowly, read your words, and try to correct every mistake. after regular practice, your fingers will remember the proper keys and your typing will become much easier.",

    "the quiet writer wanted to write a powerful story about a traveler who explored every part of the world. the traveler visited quiet towns, bright towers, and beautiful rivers. every new place provided another interesting story to write.",

    "we were trying to create a proper typing routine that would improve our speed and accuracy. every practice session started with a quiet and careful warmup. after a few minutes, the fingers became ready to type more words.",

    "the writer wrote a report about the importance of regular practice. the report explained how every person could improve by trying to type accurately. proper practice may appear slow at first, but it will improve your typing over time.",

    "you were right when you decided to practice typing every day. regular practice will help your fingers remember every important key. try to write a few paragraphs daily and your typing power will gradually become stronger.",

    "the quiet traveler wrote a private diary while sitting near a bright river. every page contained a new story about the places the traveler visited. writing every day helped the traveler remember every important experience.",

    "proper typing is a skill that requires time and effort. you may make errors while you practice, but every error can teach you something useful. continue to write, try again, and your typing will gradually become more accurate.",

    "the entire group waited while the writer prepared a new report. the writer tried to write every part clearly and properly. after the report was complete, everyone read it and agreed that regular practice had improved the writer's skills.",

    "you can improve your typing power when you practice with patience and purpose. try to write every word correctly before you try to increase your speed. a proper routine will help your fingers become faster and more comfortable.",

    "the bright future of typing practice depends on regular effort. every word you write gives your fingers another opportunity to improve. try to keep a steady rhythm, write with care, and continue practicing until typing feels natural."


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