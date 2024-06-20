console.log("test");

/*----------------------------------------
	daice
----------------------------------------*/
let q1 = document.getElementById("q1");
function daice() {
	let btn1 = q1.querySelector("#btn1");
	let txt = q1.querySelector("#txt1");
	let randomNum = Math.floor(Math.random() * 7);
	txt.innerHTML = randomNum;
}

btn1.addEventListener("click", daice, false);

/*----------------------------------------
omikuji
----------------------------------------*/
let q2 = document.getElementById("q2");

function randomSelection(elementId, items) {
	const element = q2.querySelector(`#${elementId}`);
	let randomIndex = Math.floor(Math.random() * items.length);
	let randomTxt = items[randomIndex];
	element.innerHTML = randomTxt;
}

// 個別のランダム選択関数
function randomResultat() {
	let resultatItems = ["so good", "good", "ca vaaa", "bad"];
	randomSelection("resultat", resultatItems);
}

function randomAmour() {
	let amourItems = ["love love", "bien rencontre", "divorce", "vive la mariee"];
	randomSelection("amour", amourItems);
}

function randomVoyage() {
	let voyageItems = [
		"allez okinawa",
		"restez a la maison",
		"go etranger",
		"tokyo",
	];
	randomSelection("voyage", voyageItems);
}

function randomTravail() {
	let travailItems = ["bon salaire", "albaito", "rakuten", "ant"];
	randomSelection("travail", travailItems);
}

// おみくじ関数
function omikuji() {
	randomResultat();
	randomAmour();
	randomVoyage();
	randomTravail();
}

// イベントリスナーの設定
q2.querySelector("#btn2").addEventListener("click", omikuji, false);

/*----------------------------------------
	checkbox
----------------------------------------*/
let q3 = document.getElementById("q3");

function countElement(elementId) {
	const element = q3.querySelector(`#${elementId}`);
	const txtCount = q3.querySelector("#txt2");
	const animalName = q3.querySelector("#txt3");
	let count = 0;
	element.addEventListener("click", function () {
		if (element.checked) {
			count++;
		} else {
			count--;
		}
		txtCount.innerHTML = count; // クリック回数を表示する
		animalName.innerHTML = elementId; // クリックされた要素のIDを表示する
	});
}

function countDog() {
	countElement("dog");
}
function countCat() {
	countElement("cat");
}
function countBird() {
	countElement("bird");
}
function countFish() {
	countElement("fish");
}
q3.querySelector("#dog").addEventListener("click", countDog, false);
q3.querySelector("#cat").addEventListener("click", countCat, false);
q3.querySelector("#bird").addEventListener("click", countBird, false);
q3.querySelector("#fish").addEventListener("click", countFish, false);

/*----------------------------------------
	tasklist
----------------------------------------*/
let q4 = document.getElementById("q4");

function enterTask() {
	const enterButton = q4.querySelector("#enter");
	const textarea = q4.querySelector("#testarea");
	const taskUl = q4.querySelector("#task-ul");

	enterButton.addEventListener(
		"click",
		() => {
			const newTask = textarea.value;
			if (newTask) {
				const listItem = document.createElement("li");
				const taskText = document.createElement("p");
				taskText.textContent = newTask;

				const deleteButton = document.createElement("button");
				deleteButton.textContent = "delete";
				deleteButton.classList.add("delete");

				taskUl.appendChild(listItem);
				listItem.appendChild(taskText);
				listItem.appendChild(deleteButton);

				textarea.value = "";

				deleteButton.addEventListener("click", () => {
					listItem.remove();
				});
			}
		},
		false
	);
}

enterTask();

/*----------------------------------------
        quiz
    ----------------------------------------*/

let q5 = document.getElementById("q5");

const quizData = [
	{
		question: "What is the capital of France?",
		options: ["London", "Berlin", "Paris", "Madrid"],
		answer: "Paris",
	},
	{
		question: "Who wrote 'Romeo and Juliet'?",
		options: [
			"Jane Austen",
			"William Shakespeare",
			"Mark Twain",
			"J.K. Rowling",
		],
		answer: "William Shakespeare",
	},
	{
		question: "How many people who work at Ant'?",
		options: ["4", "823", "24", "7"],
		answer: "7",
	},
	{
		question: "What is the largest planet in our solar system?",
		options: ["Earth", "Mars", "Jupiter", "Saturn"],
		answer: "Jupiter",
	},
	{
		question: "Which element has the chemical symbol 'O'?",
		options: ["Gold", "Oxygen", "Osmium", "Oganesson"],
		answer: "Oxygen",
	},
];

let qContainer = q5.querySelector("#question-container");
let question = q5.querySelector("#question");
let oContainer = q5.querySelector("#options-container");
let options = q5.querySelectorAll(".option");
let result = q5.querySelector("#result");
let score = 0;
let askedQuestions = [];

function getRandomQuestion() {
	if (askedQuestions.length === quizData.length) {
		return null; // 全ての質問が出題された場合
	}

	let randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * quizData.length);
	} while (askedQuestions.includes(randomIndex));

	askedQuestions.push(randomIndex);
	return quizData[randomIndex];
}

function printQuiz() {
	const randomValue = getRandomQuestion();
	if (!randomValue) {
		result.textContent = "Your score is " + score;
		return;
	}

	question.innerHTML = randomValue.question;
	options[0].innerHTML = randomValue.options[0];
	options[1].innerHTML = randomValue.options[1];
	options[2].innerHTML = randomValue.options[2];
	options[3].innerHTML = randomValue.options[3];

	options.forEach((option) => {
		option.disabled = false;
	});
	result.textContent = "";
	return randomValue; // 現在の質問を返す
}

let currentQuestion = printQuiz();

function Choise() {
	options.forEach((option) => {
		option.addEventListener("click", function () {
			if (!option.disabled) {
				// 選択肢が無効でない場合
				if (option.textContent == currentQuestion.answer) {
					result.textContent = "correct";
					score++;
				} else {
					result.textContent = "tas rate";
				}
				options.forEach((opt) => {
					opt.disabled = true;
				});
			}
		});
	});
}

function nextQuestion() {
	let nextBtn = q5.querySelector("#next-btn");
	let count = 0;
	nextBtn.addEventListener("click", () => {
		count++;
		if (count <= quizData.length) {
			currentQuestion = printQuiz();
		} else {
			result.textContent = "Your score is " + score;
		}
	});
}

Choise();
nextQuestion();

/*----------------------------------------
        contact form
    ----------------------------------------*/

let q6 = document.getElementById("q6");

let nameForm = q6.querySelector("name");
let emailForm = q6.querySelector("email");
let MessagelForm = q6.querySelector("message");

document.addEventListener("DOMContentLoaded", function () {
	let contactForm = document.querySelector("#contact-form form");

	contactForm.addEventListener("submit", function (event) {
		event.preventDefault();

		let nameInput = document.getElementById("name");
		let emailInput = document.getElementById("email");
		let messageInput = document.getElementById("message");

		let name = nameInput.value.trim();
		let email = emailInput.value.trim();
		let message = messageInput.value.trim();

		// バリデーション
		if (name === "") {
			alert("Please enter your name.");
			nameInput.focus();
			return;
		}

		if (!isValidEmail(email)) {
			alert("Please enter a valid email address.");
			emailInput.focus();
			return;
		}

		// フォームの送信
		console.log("Name: " + name);
		console.log("Email: " + email);
		console.log("Message: " + message);

		// 送信後の処理（例えば、サーバーに送信するなど）
		// ここではコンソールに表示するだけですが、実際のアプリケーションではサーバーへの送信が行われます

		// フォームのリセット
		contactForm.reset();
	});

	function isValidEmail(email) {
		// 簡易的なメールアドレスのバリデーション
		// 実際にはより厳密なバリデーションを行う必要がありますが、ここでは単純な形式チェックのみ行います
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	}
});
