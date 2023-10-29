"use strict";

const $ = selector => document.querySelector(selector);

//Error message that will be displayed
const getErrorMsgSub = lbl =>
'Subtotal must be > 0 and < 10000';

//Error message that will be displayed
const getErrorMsgTax = lbl =>
'Tax Rate must be > 0 and < 12';

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#clear").addEventListener("click", clearEntries);
    $("#subtotal").addEventListener("click", clearSubBox);
    $("#tax_rate").addEventListener("click", clearTaxBox);
    $("#subtotal").focus();
});

//Event handler to get user’s entry and make checks
const processEntries = () => {
    //Get user input from the text box
	let userInputSub = parseInt($("#subtotal").value);
    let userInputRate = parseInt($("#tax_rate").value);

    if ((userInputSub <= 0 || userInputSub >= 10000) || isNaN(userInputSub)) {
        alert(getErrorMsgSub());
    } 
    else if ((userInputRate <= 0 || userInputRate >= 12) || isNaN(userInputRate)) {
        alert(getErrorMsgTax());
    }
    else {
        let salesTax = userInputSub * (userInputRate / 100);
        let grandTotal = userInputSub + salesTax;
        $("#sales_tax").value = salesTax.toFixed(2);
        $("#total").value = grandTotal.toFixed(2);
    }
    $("#subtotal").focus();
    };

    const clearSubBox = () => {
        $("#subtotal").value = "";
    }

    const clearTaxBox = () => {
        $("#tax_rate").value = "";
    }

    const clearEntries = () => {
        clearSubBox();
        clearTaxBox();
        $("#sales_tax").value = "";
        $("#total").value = "";
        $("#subtotal").focus();
    }
