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
		question: "How many person who work at Ant'?",
		options: ["4", "823", "24", "7"],
		answer: "7",
	},
	// 他の質問を追加する
];

let qContainer = q5.querySelector("#question-container");
let question = q5.querySelector("#question");
let oContainer = q5.querySelector("#options-container");
let options = q5.querySelectorAll(".option");
let result = q5.querySelector("#result");

function printQuiz() {
	randomValue = quizData[Math.floor(quizData.length * Math.random())];
	question.innerHTML = randomValue.question;
	options[0].innerHTML = randomValue.options[0];
	options[1].innerHTML = randomValue.options[1];
	options[2].innerHTML = randomValue.options[2];
	options[3].innerHTML = randomValue.options[3];
}
printQuiz();

function Choise() {
	options.forEach((option) => {
		option.addEventListener("click", function () {
			// console.log("clicked" + randomValue.answer);
			if (option.textContent == randomValue.answer) {
				result.textContent = "correct";
			} else {
				result.textContent = "tas rate";
			}
		});
	});
}

Choise();
