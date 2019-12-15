
var count;
const queArray = [
    {
        que: "What is Java?",
        o1: "Option1",
        o2: "Option1",
        o3: "Option1",
        o4: "Option1"
    }, {
        que: "What is C++?",
        o1: "Option2",
        o2: "Option2",
        o3: "Option2",
        o4: "Option2"
    }, {
        que: "What is JS?",
        o1: "Option3",
        o2: "Option3",
        o3: "Option3",
        o4: "Option3"
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
var ansArray;
var correctAns = ["a","b","c","d","b"];
var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');
var finalSubmit = document.getElementById('finalSubmit');
var div = document.getElementById('q1');
var qNo = document.getElementById('queNum');
var que = document.getElementById('que');

loadEventListeners();

function loadEventListeners() {
    startBtn.addEventListener('click', renderStartQue);
    nextBtn.addEventListener('click', renderNextQue);
    prevBtn.addEventListener('click', renderPrevQue);
    finalSubmit.addEventListener('click', calculateMarks);
}

//On Start Btn Click
function renderStartQue(e) {
    //Hide Start,submit,prev Btn
    startBtn.style.display = 'none';
    finalSubmit.style.display = 'none';
    prevBtn.style.display = 'none';
    //Show Next
    nextBtn.style.display = 'inline';
    //Hide Result
    document.getElementById('result').style.display = 'none';

    //set count,ansArray
    count = 0;
    ansArray = [];
    //uncheck All radio btns
    checkUncheckBtn();

    //render Que
    renderQues(0);

    //Display Div
    div.style.display = 'block';

    console.log("count="+count);
    e.preventDefault();
}

function renderNextQue(e) {

    //store ans first
    storeAnswers();

    //render Next Que
    renderQues(1);

    console.log("Ques="+queArray.length);
    console.log(div);
    e.preventDefault();
}

function renderPrevQue(e) {
    //store ans first
    storeAnswers();

    //render Prev Que
    renderQues(-1);


    console.log(div);
    e.preventDefault();
}

function renderQues(navFlag) {
    //Prev Navigation
    if(navFlag === -1){
        count--;
    }else{
        count++;
    }
    
    
    qNo.innerHTML = "Question " + count;
    que.innerHTML = queArray[count-1].que;
    document.getElementById('l1').innerHTML = queArray[count-1].o1;
    document.getElementById('l2').innerHTML = queArray[count-1].o2;
    document.getElementById('l3').innerHTML = queArray[count-1].o3;
    document.getElementById('l4').innerHTML = queArray[count-1].o4;

    //Uncheck All radio btns and restore answer (if previously given)
    if(navFlag !== 0){
        checkUncheckBtn();
    }

    //Display or Hide Buttons
    if (count > 1) {
        prevBtn.style.display = 'inline';
        nextBtn.style.display = 'inline';
        finalSubmit.style.display = 'none';
    }else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'inline';
        finalSubmit.style.display = 'none';
    }
    if (count == queArray.length) {
        nextBtn.style.display = 'none';
        finalSubmit.style.display = 'inline';
    }
}


function storeAnswers() {
    var radioVal = "none";
    //var num = count + 1;
    document.querySelectorAll('.option').forEach((radioBtn) => {
        if (radioBtn.checked) {
            //console.log(radioBtn.value);
            //ansArray.push(radioBtn.value);
            radioVal = radioBtn.value;
        }
    });
    var ansObj = {
        queNo: count,
        ans: radioVal
    };
    var searchObj = null;
    ansArray.forEach((obj) => {
        if (obj.queNo === ansObj.queNo) {
            searchObj = obj;
        }
    });
    if (searchObj == null) {
        ansArray.push(ansObj);
    } else {
        if (ansObj.ans !== searchObj.ans) {
            searchObj.ans = ansObj.ans;
        }
    }
}


function calculateMarks(e) {
    //For storing last answer
    storeAnswers();
    var outOf = (queArray.length)*10;
    var totalMarks=0;
    var html = "";
    for(i=0; i<ansArray.length; i++){
        if(ansArray[i].ans === correctAns[i]){
            totalMarks += 10;
        } else if (ansArray[i].ans !== "none"){
            totalMarks -= 5;
        }
    }
    document.getElementById('resultItem').innerHTML = "Total Marks: "+totalMarks+ "/"+outOf;

    //Show Result
    document.getElementById('result').style.display = 'block';
    //Hide Form div
    div.style.display = 'none';

    //Rename start Button
    startBtn.innerHTML = "Re-Start";
    startBtn.style.display = "block";
    e.preventDefault();
}

function checkUncheckBtn() {
    document.querySelectorAll('.option').forEach((btn) => {
        if (ansArray[count - 1] && ansArray[count - 1].ans === btn.value) {
            btn.checked = true;
        } else if (btn.checked) {
            btn.checked = false;
        }
    });
}
