document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar-container');
    document.getElementById('generate-button').addEventListener('click', () => {
        const year = parseInt(document.getElementById('year-input').value);
        if (isNaN(year)) return alert('Please enter a valid year');
        calendarContainer.innerHTML = '';
        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].forEach((month, monthIndex) => {
            const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
            const firstDayIndex = new Date(year, monthIndex, 1).getDay();
            const monthDiv = document.createElement('div'); monthDiv.className = 'month';
            monthDiv.innerHTML = `<h3>${month}</h3>
            <div class='calendar'>${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => 
                `<div class='header'>
                ${day}</div>`).join('')}${'<div class="day"></div>'.repeat(firstDayIndex)}
                ${Array.from({ length: daysInMonth }, (_, day) => 
                    `<div class='day'>${day + 1}</div>`).join('')}</div>`;
            calendarContainer.appendChild(monthDiv);
        });
    });
});
