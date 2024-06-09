document.addEventListener('DOMContentLoaded', () => {
    const gradePointsInput = document.getElementById('gradePoints');
    const creditHoursInput = document.getElementById('creditHours');
    const calculateCGPAButton = document.getElementById('calculateCGPA');
    const cgpaOutput = document.getElementById('cgpa');

    calculateCGPAButton.addEventListener('click', () => {
        const gradePoints = gradePointsInput.value.split(',').map(Number);
        const creditHours = creditHoursInput.value.split(',').map(Number);

        if (gradePoints.length !== creditHours.length) {
            alert('Please enter the same number of grade points and credit hours');
            return;
        }

        let totalPoints = 0;
        let totalHours = 0;

        for (let i = 0; i < gradePoints.length; i++) {
            if (isNaN(gradePoints[i]) || isNaN(creditHours[i])) {
                alert('Please enter valid numbers');
                return;
            }
            totalPoints += gradePoints[i] * creditHours[i];
            totalHours += creditHours[i];
        }

        const cgpa = totalPoints / totalHours;
        cgpaOutput.value = cgpa.toFixed(2);
    });
});
