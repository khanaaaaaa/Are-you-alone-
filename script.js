function answer(choice) {
    const question = document.getElementById("question");
    const answer = document.getElementById("answer");

    if (choice === "yes") {
        question.innerText = "That's good.";
        answer.innerText = "Because nobody else should see this."
    }

    if (choice === "no") {
        question.innerText = "Oh.";
        answer.innerText = "Look at them.. are they looking at you?"
    }
}