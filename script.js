const disabledInputs = document.querySelectorAll('.check-buttons input, .levers input');
const checkboxCheck = document.querySelectorAll('.check-buttons input');
const launchButton = document.getElementById('launch-button');
const leverCheck = document.querySelectorAll('.levers input');

function verifyPassword() {
    let password = document.getElementById("password").value;
    if (password === "TrustNo1") {
        disabledInputs.forEach(element => {
            element.disabled = false;
        })
        document.getElementById('password').disabled = true;
        document.getElementById('button').disabled = true;
    }
}

for (let i = 0; i < checkboxCheck.length; i++) {
    checkboxCheck[i].addEventListener('click', updateDisplay);
}

function updateDisplay() {
    let countC = 0;
    for (let i = 0; i < checkboxCheck.length; i++) {
            if (checkboxCheck[i].checked) {
                countC++;
            }
    }
    console.log(countC);

    let countL = 0;
    for (let x = 0; x < leverCheck.length; x++) {
        if (leverCheck[x].value === '100') {
            countL++;
        }
    }
    console.log(countL);

    if (countC === checkboxCheck.length && countL === leverCheck.length) {
        launchButton.disabled = false;
    } else {
        launchButton.disabled = true;
    }
}

leverCheck.onchange = updateDisplay;

function launchRocket() {
    let rocket = document.getElementById('rocket');
    rocket.style.transform = 'translate(1000px, -1000px)';
}