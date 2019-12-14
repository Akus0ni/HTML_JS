
var count = 0;
const queArray = [
    {
        que: "What is Java?",
        o1: "Option1",
        o2: "Option1",
        o3: "Option1",
        o4: "Option1"
    }, {
        que: "What is C++?",
        o1: "Option1",
        o2: "Option1",
        o3: "Option1",
        o4: "Option1"
    }, {
        que: "What is JS?",
        o1: "Option1",
        o2: "Option1",
        o3: "Option1",
        o4: "Option1"
    }, {
        que: "What is JDBC?",
        o1: "Option1",
        o2: "Option1",
        o3: "Option1",
        o4: "Option1"
    }, {
        que: "What is CSS?",
        o1: "Option1",
        o2: "Option1",
        o3: "Option1",
        o4: "Option1"
    }
];



var btn = document.getElementById('startBtn');
var div = document.getElementById('q1');
var qNo = document.getElementById('queNum');
var que = document.getElementById('que');
var nextBtn = document.getElementById('nextBtn');
loadEventListeners();

function loadEventListeners() {

}





function renderQue(btnType) {

    var btn = document.getElementById('startBtn');
    var div = document.getElementById('q1');
    var qNo = document.getElementById('queNum');
    var que = document.getElementById('que');
    var nextBtn = document.getElementById('nextBtn');
    var queNo = count + 1;
    //Hide btn
    btn.style.display = 'none';

    //render Questions
    if (btnType === 0) {
        qNo.appendChild(document.createTextNode("Question " + queNo));
        que.appendChild(document.createTextNode(queArray[count].que));
        document.getElementById('l1').innerHTML = queArray[count].o1;
        document.getElementById('l2').innerHTML = queArray[count].o2;
        document.getElementById('l3').innerHTML = queArray[count].o3;
        document.getElementById('l4').innerHTML = queArray[count].o4;
        div.style.display = 'block';
        count += 1;
    } else {
        // count += 1;
        // qNo.appendChild(document.createTextNode("Question "+queNo));
        // que.appendChild(document.createTextNode(queArray[count-1].que));
        // document.getElementById('l1').innerHTML = queArray[count-1].o1;
        // document.getElementById('l2').innerHTML = queArray[count-1].o2;
        // document.getElementById('l3').innerHTML = queArray[count-1].o3;
        // document.getElementById('l4').innerHTML = queArray[count-1].o4;
        // console.log(div);

        // div.style.display = 'block';
        nextBtn.addEventListener('click', renderNextQue);
    }





}



function renderNextQue(e) {
    var div = document.getElementById('q1');
    var qNo = document.getElementById('queNum');
    var que = document.getElementById('que');
    var queNo = count + 1;
    count += 1;
    qNo.appendChild(document.createTextNode("Question " + queNo));
    que.appendChild(document.createTextNode(queArray[count - 1].que));
    document.getElementById('l1').innerHTML = queArray[count - 1].o1;
    document.getElementById('l2').innerHTML = queArray[count - 1].o2;
    document.getElementById('l3').innerHTML = queArray[count - 1].o3;
    document.getElementById('l4').innerHTML = queArray[count - 1].o4;
    div.style.display = 'block';
    console.log(div);
    e.preventDefault();
}