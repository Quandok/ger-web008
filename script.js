const questions = document.querySelectorAll(".question");

questions.forEach( function(test) {
    test.addEventListener( "click", function(e) {
        // Expand to reveal answer
        const questionContainer = e.currentTarget.parentElement;
        questionContainer.classList.toggle("expanded");

        // Collapse any other expanded question
        questions.forEach( function(testElement) {
            if (testElement !== test) {
                testElement.parentElement.classList.remove("expanded");
            }
        })
    });
});