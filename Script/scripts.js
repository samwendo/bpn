function calculateDaysBetweenDates(begin, end) {
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(begin);
    var secondDate = new Date(end);

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
}
// submit button
// function submitButton() {
//     var begin = document.getElementById("begin").value;
//     var end = document.getElementById("end").value;
//     var days = calculateDaysBetweenDates(begin, end);
//     document.getElementById("days").innerHTML = days;
// }

// form submission button
function submitForm() {
    var form = document.getElementById("form");
    form.submit();
}

