var q = 1;
var total = 0;
var answer = { 1: 'Cascading Style Sheets', 2: 'Hyper Text Markup Language', 3: 'JavaScript' };

function que1() {
    var con = 'question' + q;
    var r = document.querySelector(':root');
    ques = 'q' + q;
    var ans = document.quiz.elements['question' + q].value;

    if (ans == answer[q]) {
        total++;
        r.style.setProperty('--clr-1', 'green');
        r.style.setProperty('--clr-2', 'green');
    } else {
        r.style.setProperty('--clr-1', 'red');
        r.style.setProperty('--clr-2', 'red');
    }

    setTimeout(function () {
        r.style.setProperty('--clr-1', '#00ccff');
        r.style.setProperty('--clr-2', '#d500f9');
        
        document.getElementById('q' + q).style.display = "none";
        q++;
        if (q <= 3) {
            document.getElementById('q' + q).style.display = "block";
        } else {
            document.getElementById('result').textContent = "Total Score: " + total;
        }
    }, 1000); 
}
