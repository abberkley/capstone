// define the questions and answers
const questions = [
	{
		question: 'Which of these sounds most interesting to you?',
		answers: [
			{ text: 'Investigating crimes and solving mysteries', value: 3 }, //3 = s
			{ text: 'Working with cameras and images', value: 2 }, // 2 = t
			{ text: 'Cracking codes and deciphering messages', value: 4 }, // 4 = m
			{ text: 'Designing something entirely new', value: 1 }, // 1 = e
		],
	},
	{
		question: 'What is your preferred work environment?',
		answers: [
			{ text: 'A lab mainly for independent work', value: 3 },
			{ text: 'A photography studio or darkroom', value: 2 },
			{ text: 'A quiet office or workspace', value: 4 },
			{ text: 'A bustling, fast paced collaborative environement', value: 1 },
		],
	},
	{
		question: 'What is something you excell in?',
		answers: [
			{ text: 'Defending your reasoning', value: 3 },
			{ text: 'Appreciating the design of every day objects', value: 1 },
			{ text: 'Never backing down from a puzzle ', value: 4 },
			{ text: 'Using all forms of technology', value: 2 },
		],
	},
	{
		question: 'What is your problem-solving approach?',
		answers: [
			{ text: 'Logical and analytical', value: 3 },
			{ text: 'Intuitive and creative', value: 1 },
			{ text: 'Systematic and methodical', value: 4 },
			{ text: 'Collaborative and communicative', value: 2 },
		],
	},
	{
		question: 'What type of activity would you most enjoy?',
		answers: [
			{
				text: 'Doing an escape room challenges or solving whodunit mysteries',
				value: 3,
			},
			{ text: 'Taking photos of landscapes and architecture', value: 2 },
			{ text: 'Doing logic puzzles or brain games', value: 4 },
			{ text: 'Innovating something that could work betterr', value: 1 },
		],
	},
];

// define the results
const results = {
	s: {
		text: 'You got the forensics career! Forensics is a type of science that is integral to crime investigation. Click the button below to learn more!',
		link: '././career-docs/career-science.html',
	},
	t: {
		text: 'You got the photogrammetry career! Photogrammetry is actually part of the technology branch in the STEM world due to its high level of technical proficiency. Click the button below to learn more! ',
		link: '././career-docs/career-tech.html',
	},
	e: {
		text: 'You got the fashion engineer career! Fashion engineers combine both fashion design and engineering in order to innovative clothing and accesories. Click the button below to learn more!',
		link: '././career-docs/career-engineering.html',
	},
	m: {
		text: 'You got the Cryptanalysis career! Cryptanalysis belongs to the math area due to its need for strong mathematical skill. Click the button below to find out more!',
		link: '././career-docs/career-math.html',
	},
};

// define variables for tracking state
let currentQuestion = 0;
let answerPoints = 0;
let result = 0;

// loop through the results and increment the count for each result

// compare the counts to determine which result has the most values

// get HTML elements
const questionContainer = document.getElementById('question-container');
const startButton = document.getElementById('start-button');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsContainer = document.getElementById('results-container');
const resultsText = document.getElementById('results-text');
const resultsButton = document.getElementById('results-button');

startButton.addEventListener('click', startQuiz);

// function to start the quiz
function startQuiz() {
	console.log('you have started the quiz');
	// hide the start button
	startButton.classList.add('hide');
	// show the quiz container
	questionContainer.classList.remove('hide');
	// show the first question
	showQuestion();
}

// function to show the current question
function showQuestion() {
	// clear the previous answer buttons
	answerButtonsElement.innerHTML = '';
	// get the current question
	const question = questions[currentQuestion];
	// set the question text
	questionElement.innerText = question.question;
	// create a button for each answer
	question.answers.forEach((answer) => {
		const button = document.createElement('button');
		button.innerText = answer.text;
		button.classList.add('btn');
		button.addEventListener('click', () => selectAnswer(answer.value));
		answerButtonsElement.appendChild(button);
	});
}

// function to handle selecting an answer
function selectAnswer(value) {
	// add the answer to the selectedAnswers object
	answerPoints = answerPoints + value;
	console.log(answerPoints);

	// increment the current question
	currentQuestion++;
	// if there are more questions, show the next question
	if (currentQuestion < questions.length) {
		showQuestion();
	} else {
		// if there are no more questions, show the results
		calculateResult();
		console.log('calculating results...');
		console.log(answerPoints);
		showResults();
	}
}

// the result with the highest count is the winner
function calculateResult() {
	if (answerPoints >= 12 && answerPoints <= 15) {
		result = 0;
		resultsText.innerHTML = results.s.text;
	} else if (answerPoints >= 8 && answerPoints <= 11) {
		(result = 1), (resultsText.innerText = results.t.text);
		// result 2 has the most values
	} else if (answerPoints >= 16 && answerPoints <= 20) {
		(result = 2), (resultsText.innerText = results.e.text);
		// result 3 has the most values
	} else if (answerPoints >= 4 && answerPoints <= 7) {
		result = 3;
		resultsText.innerText = results.m.text;
		// result 4 has the most values
	}
}

// function to show the results
function showResults() {
	// hide the quiz container
	questionContainer.classList.add('hide');
	//reveals results
	resultsContainer.classList.remove('hide');
	resultsButton.classList.remove('hide');
}

resultsButton.addEventListener('click', function () {
	if (result === 0) {
		console.log((window.location.href = results.s.link));
		window.location.href = results.s.link;
	} else if (result === 1) {
		window.location.href = results.t.link;
		// result 2 has the most values
	} else if (result === 2) {
		window.location.href = results.e.link;
		// result 3 has the most values
	} else if (result === 3) {
		window.location.href = results.m.link;
	}
});
