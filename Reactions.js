let count = 0;

let like = document.getElementById('row1-like1');

console.log(like.innerHTML);


like.addEventListener('click',Like);

function Like(){
    if (like.innerHTML === '👍') {
        count++;
        like.style.backgroundColor = 'yellow';
        like.style.borderRadius = ' 5px'

         if (like.style.backgroundColor === 'yellow') {
        count--;
        like.style.backgroundColor = 'red';
        }

    } 

    document.getElementById('row1-count1').innerHTML = count;
    
}

let dislike = document.getElementById('row1-dislike1');

dislike.addEventListener('click',disLike);

function disLike(){
    count--;
    document.getElementById('row1-count1').innerHTML = count;
}

console.log('dssd');
