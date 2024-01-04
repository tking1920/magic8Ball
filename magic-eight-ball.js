// Put your JavaScript code in this file
const answers = [
	'Seems unlikely.',
	'Not a chance.',
	'In your dreams.',
	'Get real, kid.',
	'Absolutely.',
	'Maybe.',
	'It is certain.',
	'Ask me later.',
	'Chances seem good.'
	
]

const ball = document.getElementById("ball");
ball.addEventListener("mousedown", displayAnswer);

const reset = document.getElementById('reset');
reset.addEventListener("click",resetBall);


function displayAnswer()
{
    let question = document.getElementById("question").value;
    if(question == "")
    {
        alert("PLEASE INPUT QUESTION");
}
    else
{
        let index = Math.floor(Math.random() * answers.length);
        let answer = answers[index];
        let element = document.getElementById('circle');
        element.style.display ='inline-block';
        element.innerHTML = '<br><br>' + answer;
}
}

function resetBall()
{
    let element = document.getElementById('circle');
    element.style.display = 'none';
}