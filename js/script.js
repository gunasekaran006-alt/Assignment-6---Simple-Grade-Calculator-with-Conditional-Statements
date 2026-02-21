function calculateGrade() {
    // Collecting marks for five subjects using prompt
    let subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
    let subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
    let subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
    let subject4 = parseFloat(prompt("Enter marks for Subject 4:"));
    let subject5 = parseFloat(prompt("Enter marks for Subject 5:"));

    // Calculating Total and Average
    let totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    let averageMarks = totalMarks / 5;

    let grade;

    // Grade Calculation logic using if-else
    if (averageMarks >= 90) {
        grade = "A+";
    } else if (averageMarks >= 80) {
        grade = "A";
    } else if (averageMarks >= 70) {
        grade = "B";
    } else if (averageMarks >= 60) {
        grade = "C";
    } else if (averageMarks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Displaying the results using alert
    alert("Total Marks: " + totalMarks + "\nAverage Marks: " + averageMarks + "\nGrade: " + grade);
}