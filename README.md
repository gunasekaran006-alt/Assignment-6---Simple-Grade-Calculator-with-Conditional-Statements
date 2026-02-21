# Simple Grade Calculator 🎓

This project is a simple web application that calculates the total marks, average, and corresponding grade for a student based on five subjects. It was built as part of the **Entri Elevate - Full Stack Development** assignment to practice JavaScript conditional statements and user input handling.

## 🚀 Features
- **User Input:** Uses JavaScript `prompt()` to collect marks for 5 subjects.
- **Dynamic Calculation:** Automatically calculates the Total and Average marks.
- **Grading Logic:** Uses `if-else` conditional statements to assign grades based on the following criteria:
  - **A+**: Average ≥ 90
  - **A**: Average 80 - 89
  - **B**: Average 70 - 79
  - **C**: Average 60 - 69
  - **D**: Average 50 - 59
  - **F**: Average < 50
- **Alert System:** Displays results in a clear pop-up using `alert()`.

## 🛠️ Technologies Used
- **HTML5**: For structure.
- **CSS3**: For basic styling.
- **JavaScript**: For the logic and calculations.

## 📁 Project Structure
```text
grade-calculator/
│
├── index.html    # Main HTML file
├── css/
│   └── style.css # Styling file
└── js/
    └── script.js # Logic file