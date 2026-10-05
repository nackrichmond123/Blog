let count1 = 0;
let count2 = 0;
let count3 = 0;

let like1 = document.getElementById('row1-like1');
let like2 = document.getElementById('row1-like2');
let like3 = document.getElementById('row1-like3');

let activeLikes = localStorage.getItem('firstLike');
console.log(activeLikes);
    document.getElementById('row1-count1').innerHTML = activeLikes;

function Like(num){

    
     
    if (num === 1) {
        if (like1.innerHTML === '👍') {
            like1.innerHTML = '✅';
            count1++;

        } else if(like1.innerHTML === '✅') {
            like1.innerHTML = '👍';
            count1--;
        }
            document.getElementById('row1-count1').innerHTML = count1;

            localStorage.setItem('firstLike',count1); 

    } else if (num === 2) {
        if (like2.innerHTML === '👍') {
            like2.innerHTML = '✅';
            count2++;

        } else if(like2.innerHTML === '✅') {
            like2.innerHTML = '👍';
            count2--;
        }
        document.getElementById('row1-count2').innerHTML = count2;

    } else if (num === 3) {
        if (like3.innerHTML === '👍') {
            like3.innerHTML = '✅';
            count3++;

        } else if(like3.innerHTML === '✅') {
            like3.innerHTML = '👍';
            count3--;
        }
        document.getElementById('row1-count3').innerHTML = count3;
    }
    
}


let dislike1 = document.getElementById('row1-dislike1');

let dislike2 = document.getElementById('row1-dislike2');

let dislike3 = document.getElementById('row1-dislike3');





function disLike(num1){

    if (num1 === 1) {
        if (dislike1.innerHTML === '👎') {
            dislike1.innerHTML = '✅';

        } else if(dislike1.innerHTML === '✅') {
            dislike1.innerHTML = '👎';
        }
            document.getElementById('row1-count1').innerHTML = count1;
    } else if (num1 === 2) {
        if (dislike2.innerHTML === '👎') {
            dislike2.innerHTML = '✅';

        } else if(dislike2.innerHTML === '✅') {
            dislike2.innerHTML = '👎';
        }
        document.getElementById('row1-count2').innerHTML = count2;

    } else if (num1 === 3) {
        if (dislike3.innerHTML === '👎') {
            dislike3.innerHTML = '✅';

        } else if(dislike3.innerHTML === '✅') {
            dislike3.innerHTML = '👎';
        }
        document.getElementById('row1-count3').innerHTML = count3;
    }
    
}

// let dislike = document.getElementById('row1-dislike1');

// dislike.addEventListener('click',disLike);

// function disLike(){
//     count--;
//     document.getElementById('row1-count1').innerHTML = count;
// }

// console.log('dssd');


const names = ['Kofi','Yaw','Yaa','Abena','Ama'];
names.forEach(element => {
    console.log(names);
    
});