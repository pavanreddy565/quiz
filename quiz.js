var q = 1;
var total = 0;
var answer = { 1: 'Cascading Style Sheets', 2: 'Hyper Text Markup Language', 3: 'JavaScript' };

function que1() {
    var con = 'question' + q;
    ques = 'q' + q;
    var ans = document.quiz.elements['question' + q].value;
    if (ans == answer[q]) {
        total++;
        document.getElementById(ques).style.border = "2px solid green";
    }
    
    document.getElementById('q' + q).style.display = "none";
    q++;
    if (q <= 3) {
        document.getElementById('q' + q).style.display = "block";
    } else {
        document.getElementById('result').textContent = "Total Score: " + total;
    }
}
