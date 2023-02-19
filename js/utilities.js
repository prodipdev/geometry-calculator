let itemNumber = 0;

// get geometry item name in card items
function getElementText(targetId) {
    const name = targetId.parentElement.children[0].innerText;
    return name;
}

// get first input value in card items
function getFirstInputValue(target) {
    const inputValueStr = target.parentElement.children[2].children[0];
    const inputValue = parseFloat(inputValueStr.value);
    return inputValue;
}

// get second input value in card items
function getSecondInputValue(targetId) {
    const inputValueStr = targetId.parentElement.children[2].children[2];
    const inputValue = parseFloat(inputValueStr.value);
    return inputValue;
}

// input field validations
function inputValidation(targetId) {
    const inputOne = getFirstInputValue(targetId);
    const inputTwo = getSecondInputValue(targetId);

    if (!inputOne || !inputTwo) {
        toastMsg("Enter valid value!")
        return false;
    }
    if (isNaN(inputOne) || isNaN(inputTwo) || inputOne < 0 || inputTwo < 0) {
        toastMsg("Don't enter negative value!")
        return false;
    }
}

// set Area Calculation Value in HTML
function setCalculationValue(targetId, totalArea) {
    itemNumber += 1;  // increment item number
    // get target item name
    const name = getElementText(targetId)
    const totalCalculation = parseFloat(totalArea).toFixed(2);
    // get area calculation field
    const areaField = document.getElementById("calculation-field");
    // set new calculation result
    const newRow = document.createElement("div");
    newRow.innerHTML = `
    <span class="overflow-x-auto flex gap-3 justify-between items-center mt-3">
        <span>${itemNumber}. ${name}</span>
        <span><span class="result">${totalCalculation}</span>cm<sup>2</sup></span>
        <button class="result-btn bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded-md">Covert to m<sup>2</sup></button>
        <button class="delete text-red-500 hover:text-red-600  border-red-500 hover:border-red-600 border-2 w-7 h-7 flex justify-center items-center rounded-full"><i class="delete fa-solid fa-trash"></i></button>
    </span>
    `
    areaField.appendChild(newRow);

    // another way to delete result row
    // const deleteButton = newRow.querySelector(".delete");
    // deleteButton.addEventListener('click', function () {
    //     newRow.remove();
    // });
}

// set warning validation massages using the toast
function toastMsg(massage) {
    document.getElementById("myToast").classList.remove("hidden");
    // Set Toast Massages using function argument
    document.getElementById("toast-msg").innerText = massage;
    // Hide the toast after 5 seconds (5000ms)
    setTimeout(function () {
        document.getElementById("myToast").classList.add("hidden");
    }, 5000);
}