// Triangle Calculation
document.getElementById("triangle-btn").addEventListener('click', function () {
    // check input validation [utilities:21]
    const validInput = inputValidation(this);
    if (validInput === false) {
        return;
    }
    // get input value and calculation [utilities:8/14]
    const bValue = getFirstInputValue(this);
    const hValue = getSecondInputValue(this);
    const triangleArea = 0.5 * bValue * hValue;
    // set calculation value in html field [utilities:36]
    setCalculationValue(this, triangleArea);
})


// Rectangle Calculation
document.getElementById("rectangle-btn").addEventListener('click', function () {
    // check input validation [utilities:21]
    const validInput = inputValidation(this);
    if (validInput === false) {
        return;
    }
    // get input value and calculation [utilities:8/14]
    const wValue = getFirstInputValue(this);
    const iValue = getSecondInputValue(this);
    const triangleArea = wValue * iValue;
    console.log(wValue, iValue, triangleArea)
    // set calculation value in html field [utilities:36]
    setCalculationValue(this, triangleArea);
})


// Parallelogram Calculation
document.getElementById("parallelogram-btn").addEventListener('click', function () {
    // check input validation [utilities:21]
    const validInput = inputValidation(this);
    if (validInput === false) {
        return;
    }
    // get input value and calculation [utilities:8/14]
    const bValue = getFirstInputValue(this);
    const hValue = getSecondInputValue(this);
    const triangleArea = bValue * hValue;
    // set calculation value in html field [utilities:36]
    setCalculationValue(this, triangleArea);
})


// Rhombus Calculation
document.getElementById("rhombus-btn").addEventListener('click', function () {
    // check input validation [utilities:21]
    const validInput = inputValidation(this);
    if (validInput === false) {
        return;
    }
    // get input value and calculation [utilities:8/14]
    const d1Value = getFirstInputValue(this);
    const d2Value = getSecondInputValue(this);
    const triangleArea = 0.5 * d1Value * d2Value;
    // set calculation value in html field [utilities:36]
    setCalculationValue(this, triangleArea);
})


// Pentagon Calculation
document.getElementById("pentagon-btn").addEventListener('click', function () {
    // check input validation [utilities:21]
    const validInput = inputValidation(this);
    if (validInput === false) {
        return;
    }
    // get input value and calculation [utilities:8/14]
    const pValue = getFirstInputValue(this);
    const bValue = getSecondInputValue(this);
    const triangleArea = 0.5 * pValue * bValue;
    // set calculation value in html field [utilities:36]
    setCalculationValue(this, triangleArea);
})


// Ellipse Calculation
document.getElementById("ellipse-btn").addEventListener('click', function () {
    // check input validation [utilities:21]
    const validInput = inputValidation(this);
    if (validInput === false) {
        return;
    }
    // get input value and calculation [utilities:8/14]
    const bValue = getFirstInputValue(this);
    const hValue = getSecondInputValue(this);
    const pi = 3.14;
    const triangleArea = pi * bValue * hValue;
    // set calculation value in html field [utilities:36]
    setCalculationValue(this, triangleArea);
})


// Only background color changes when mouse hover on card
// Generate random rgb color
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ', 0.3)';
}

// Set hover background color on card
function setBackgroundColor(card) {
    card.style.backgroundColor = randomColor();
}

// Remove hover background color on card
function removeBackgroundColor(card) {
    card.style.backgroundColor = '';
}

// Only set background color when mouse hovers over
function hoverCard(event) {
    const card = event.currentTarget;
    setBackgroundColor(card);
    // Remove background color when mouse leave
    card.addEventListener('mouseleave', function () {
        removeBackgroundColor(card);
    });
}

// Attach hover event listener to all .card elements
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', hoverCard);
});




// convert centimeter to meter and meter to centimeter
document.getElementById("calculation-field").addEventListener('click', function (event) {
    if (event.target.classList.contains("result-btn")) {
        const resultRow = event.target.parentElement.children[1];
        const cmResultStr = resultRow.children[0];
        const cmResult = Number(cmResultStr.innerText);

        if (event.target.parentElement.children[1].children[0].classList.contains("result")) {
            // convert from cm to m
            const mResult = cmResult / 100;
            resultRow.innerHTML = `<span>${mResult.toFixed(2)}</span>m<sup>2</sup>`;
            event.target.innerHTML = `Convert to cm<sup>2</sup>`;
        } else {
            // convert from m to cm
            const cmResult = cmResultStr.innerText * 100;
            resultRow.innerHTML = `<span class="result">${cmResult.toFixed(2)}</span>cm<sup>2</sup>`;
            event.target.innerHTML = `Convert to m<sup>2</sup>`;
        }
    }
})

// delete calculation result row
document.getElementById("calculation-field").addEventListener('click', function (event) {
    if (event.target.classList.contains("delete")) {
        const targetRow = event.target.closest('div');
        targetRow.remove()
    }
});
