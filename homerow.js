const para = document.querySelector(".para");


// =============================
// PARAGRAPHS
// =============================

const homeRowParagraphs = [

    "a sad lad asks dad; dad asks a lad; all fall fast",

    "a lad falls; a sad dad asks all lads; all lads fall",

    "dad asks a lad; a lad asks dad; all ask and all fall",

    "a flask falls; a salad falls; dad asks a lad to add salad",

    "sad lads ask dad; dad asks all lads to fall back",

    "a lad adds salad; dad adds salt; all lads ask for salad",

    "all lads fall fast; a sad dad asks all lads to stand",

    "a flask is full; a salad is full; dad asks a lad to add salt",

    "a sad lad asks dad; dad asks a sad lad to fall and stand",

    "all lads ask dad; dad asks all lads to add a flask of salad",

    "a lad falls fast; dad asks a lad to stand; a sad lad falls again",

    "sad lads fall fast; all lads ask dad; dad asks all lads to stand",

    "a flask falls on a salad; dad asks a lad to add salt and salad",

    "all lads add salad; dad asks a sad lad to add salt to a flask",

    "a sad lad asks for a flask; dad asks all lads to pass a salad",

    "dad asks a lad to add a salad; a lad adds salt and asks dad",

    "all lads fall and stand; a sad dad asks all lads to stand fast",

    "a flask is full of salad; a lad adds salt; dad asks all lads to ask",

    "sad lads ask dad for a flask; dad adds salad and asks all lads to fall",

    "a lad asks a sad dad; dad asks all lads to add salad and salt fast"

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