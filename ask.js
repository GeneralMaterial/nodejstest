var questions = [
    "what is your name?",
    "what is your fav hobby?",
    "what is your preferred favourite language"
];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]} `);
    process.stdout.write(" >    ");
}

process.stdin.on('data', function (data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }

});

process.on('exit', function () {
    process.stdout.write('\n\n');

    process.stdout.write(`go ${answers[1]} ${answers[0]} , come back later to do ${answers[2]} \n`);
});


ask(0);

