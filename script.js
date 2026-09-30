function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("loginError");

    if (username === "" || password === "") {
        error.textContent = "Please enter username and password.";
        return;
    }

    error.textContent = "";

    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}


function showPayroll() {
    document.getElementById("payroll").style.display = "block";
}


function calculatePayroll() {

    let basicSalary = Number(document.getElementById("basicSalary").value) || 0;
    let transport = Number(document.getElementById("transport").value) || 0;
    let meal = Number(document.getElementById("meal").value) || 0;
    let bonus = Number(document.getElementById("bonus").value) || 0;

    let insurance = Number(document.getElementById("insurance").value) || 0;
    let otherDeduction = Number(document.getElementById("otherDeduction").value) || 0;


    // GROSS SALARY
    let grossSalary =
        basicSalary +
        transport +
        meal +
        bonus;


    // ANNUAL INCOME
    let annualIncome = grossSalary * 12;


    // PTKP - simulasi TK/0
    let PTKP = 54000000;


    // TAXABLE INCOME
    let taxableIncome =
        Math.max(0, annualIncome - PTKP);


    // PPH 21
    let annualTax = 0;

    if (taxableIncome <= 60000000) {

        annualTax = taxableIncome * 0.05;

    } else if (taxableIncome <= 250000000) {

        annualTax =
            (60000000 * 0.05) +
            ((taxableIncome - 60000000) * 0.15);

    } else if (taxableIncome <= 500000000) {

        annualTax =
            (60000000 * 0.05) +
            (190000000 * 0.15) +
            ((taxableIncome - 250000000) * 0.25);

    } else if (taxableIncome <= 5000000000) {

        annualTax =
            (60000000 * 0.05) +
            (190000000 * 0.15) +
            (250000000 * 0.25) +
            ((taxableIncome - 500000000) * 0.30);

    } else {

        annualTax =
            (60000000 * 0.05) +
            (190000000 * 0.15) +
            (250000000 * 0.25) +
            (4500000000 * 0.30) +
            ((taxableIncome - 5000000000) * 0.35);
    }


    // PPH 21 PER BULAN
    let pph21 = annualTax / 12;


    // TOTAL DEDUCTION
    let totalDeduction =
        insurance +
        otherDeduction +
        pph21;


    // NET SALARY
    let netSalary =
        grossSalary -
        totalDeduction;


    // DISPLAY GROSS
    document.getElementById("grossSalary").textContent =
        "Rp " +
        Math.round(grossSalary).toLocaleString("id-ID");


    // DISPLAY PPH 21
    document.getElementById("pph21Result").textContent =
        "Rp " +
        Math.round(pph21).toLocaleString("id-ID");


    // DISPLAY TOTAL DEDUCTION
    document.getElementById("totalDeduction").textContent =
        "Rp " +
        Math.round(totalDeduction).toLocaleString("id-ID");


    // DISPLAY NET SALARY
    document.getElementById("netSalary").textContent =
        "Rp " +
        Math.round(netSalary).toLocaleString("id-ID");
}


function resetPayroll() {

    document.getElementById("employeeName").value = "";
    document.getElementById("basicSalary").value = "";
    document.getElementById("transport").value = "";
    document.getElementById("meal").value = "";
    document.getElementById("bonus").value = "";
    document.getElementById("insurance").value = "";
    document.getElementById("otherDeduction").value = "";

    document.getElementById("grossSalary").textContent = "Rp 0";
    document.getElementById("pph21Result").textContent = "Rp 0";
    document.getElementById("totalDeduction").textContent = "Rp 0";
    document.getElementById("netSalary").textContent = "Rp 0";
}