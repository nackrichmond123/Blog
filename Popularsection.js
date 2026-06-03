// We will create object variable for all the Popular blogs on the page so  that any change will be made here.

// Popular Blog(Position One).
// Blog 1
const p_positionOne_Blog1 = {
    
    Image(){
            document.getElementById('p-image1').src = 'Images/Latest-Blog-Images/First-Position-Image/Alvarez.jpeg';
        },

    Name: 'ALVAREZ TRANSFER NEWS',

    topicSentence: 'Atletico Madrid denied €100m as valuation to let Julián Álvarez go',

    aboutTheBlog: 'Barcelona are prepared to return to the table soon, Julián’s camp already made clear to Atléti that he wants to leave.Barcelona are also keen to make the deal done before start of the World cup...',

    Sender: 'Fabrizio Romano',

    datetime: '29th May,2026',

};

// Blog 2
const p_positionOne_Blog2 = {
    
    Image(){
            document.getElementById('p-image1').src = 'Images/Latest-Blog-Images/First-Position-Image/Arne Slot Sack.jpeg';
        },

    Name: 'ARNE SLOT SACKED BY LIVERPOOL',

    topicSentence: `It’s over between the Dutch manager and Liverpool after end of the season review`,

    aboutTheBlog: 'Andoni Iraola, clear favorite to take over as next #LFC head coach starting next season...',

    Sender: 'Fabrizio Romano',

    datetime: '30th May,2026',

};

// Blog 3
const p_positionOne_Blog3 = {
    Image(){
            document.getElementById('p-image1').src = 'Images/Latest-Blog-Images/First-Position-Image/Olivia .jpeg';
        },

    Name: 'BILLIONS CLUB LIVE WITH OLIVIA RODRIGO',

    topicSentence: `Billions Club Live with Olivia Rodrigo,Out tomorrow on Spotify`,

    aboutTheBlog: 'Watch Olivia Rodrigo perform her biggest hits from Barcelona. Billions Club Live out now on Spotify...',

    Sender: 'Spotity music',

    datetime: '30th May,2026',
};


// Popular Blog(Position Two).
// Blog 1
const p_positionTwo_Blog1 = {
    Image(){
            document.getElementById('p-image2').src = 'Images/Latest-Blog-Images/Second-Position-Image/Face of STU.jpeg';
        },

    Name: 'FACE OF STU 2026 IS HERE',

    topicSentence: `The moment you’ve been waiting for is finally here! 
            Nominations for Face of STU 2026 are officially open`,

    aboutTheBlog: 'Do you have what it takes to represent elegance, confidence, and impact? Or do you know someone who does? This is your chance to shine on a bigger stage!.Visit the SRC Women Commissioner’s Office or call 0540113368 for enquiries...',

    Sender: 'STU-SRC Official',

    datetime: '30th May,2026',   
};

// Blog 2
const p_positionTwo_Blog2 = {
    Image(){
            document.getElementById('p-image2').src = 'Images/Latest-Blog-Images/Second-Position-Image/World cup troll.jpeg';
        },

    Name: 'WORLD CUP PREPARATION',

    topicSentence: `Whiles some people are chasing the trophy others are comfortably sleeping over it.`,

    aboutTheBlog: 'The world cup tournament starts in less than 2 weeks and some big names that will be watch at the tournament are doing what they do best...',

    Sender: 'Troll football',

    datetime: '29th May,2026',
}

// Blog 3
const p_positionTwo_Blog3 = {
    Image(){
            document.getElementById('p-image2').src = 'Images/Latest-Blog-Images/Second-Position-Image/Me Right Now.jpeg';
        },

    Name: 'UCL FINAL TODAY',

    topicSentence: `The UCL final kick off today and others are fighting over club issues and transfers`,

    aboutTheBlog: 'Barcelona and Atlitico Madrid are fighting over transfers while Liverpool sack Arne Slot today.Me waiting for the UCL final to kick off....',

    Sender: 'Troll football',

    datetime: '29th May,2026',
}


// Popular Blog(Position Three).
// Blog 1
const p_positionThree_Blog1 = {
    Image(){
            document.getElementById('p-image3').src = 'Images/Latest-Blog-Images/Third-Position-Image/Anthony Gordon.jpeg';
        },

    Name: 'BARCELONA OFFICIALLY ANNOUNCE GORDON',

    topicSentence: `Barcelona signs Anthony Gordon from Newcattle United`,

    aboutTheBlog: 'Despite Barcelona being in financial crisis,they negotiated and sign Gordon in less than 48HRS,for a ransom of 80 million euros....',

    Sender: 'Benvingut al Barça ',

    datetime: '31th May,2026',  
}

// Blog 2
const p_positionThree_Blog2 = {
    Image(){
            document.getElementById('p-image3').src = 'Images/Latest-Blog-Images/Third-Position-Image/Spotify Summer songs.jpeg';
        },

    Name: 'SUMMER SONGS ON SPOTIFY',

    topicSentence: `The best selected songs for your summer tours`,

    aboutTheBlog: 'The top 10 best songs on Spotify music for this summer are as listed above...',

    Sender: 'Spotify ',

    datetime: '31th May,2026',    
}

// Blog 3
const p_positionThree_Blog3 = {
    Image(){
            document.getElementById('p-image3').src = 'Images/Latest-Blog-Images/Third-Position-Image/Paris UCL champions.jpeg';
        },

    Name: 'PARIS SAINT GERMAN UCL CHAMPIONS 2026',

    topicSentence: `PSG lift the trophy back to back in the club history`,

    aboutTheBlog: 'After a long 120 mins in play,PSG beat Arsenal FC on pernaties to win the UEFA champions back to back for the first time...',

    Sender: 'Score 90 Sports',

    datetime: '30th May,2026', 

}






function p_display_PositionOne_Blog1(){
    p_positionOne_Blog1.Image();

    document.getElementById('p-name1').innerHTML = p_positionOne_Blog1.Name;

    document.getElementById('p-topic-sentence1').innerHTML = p_positionOne_Blog1.topicSentence;

    document.getElementById('p-about1').innerHTML = p_positionOne_Blog1.aboutTheBlog;

    document.getElementById('p-sender1-name').innerHTML = p_positionOne_Blog1.Sender;

    document.getElementById('p-date-time1').innerHTML =p_positionOne_Blog1.datetime;
}

function p_display_positionOne_Blog2(){
    p_positionOne_Blog2.Image();

    document.getElementById('p-name1').innerHTML = p_positionOne_Blog2.Name;

    document.getElementById('p-topic-sentence1').innerHTML = p_positionOne_Blog2.topicSentence;

    document.getElementById('p-about1').innerHTML = p_positionOne_Blog2.aboutTheBlog;

    document.getElementById('p-sender1-name').innerHTML = p_positionOne_Blog2.Sender;

    document.getElementById('p-date-time1').innerHTML = p_positionOne_Blog2.datetime;
}

function p_display_positionOne_Blog3(){
    p_positionOne_Blog3.Image();

    document.getElementById('p-name1').innerHTML = p_positionOne_Blog3.Name;

    document.getElementById('p-topic-sentence1').innerHTML = p_positionOne_Blog3.topicSentence;

    document.getElementById('p-about1').innerHTML = p_positionOne_Blog3.aboutTheBlog;

    document.getElementById('p-sender1-name').innerHTML = p_positionOne_Blog3.Sender;

    document.getElementById('p-date-time1').innerHTML = p_positionOne_Blog3.datetime;
}

function p_display_positionTwo_Blog1(){
    p_positionTwo_Blog1.Image();

    document.getElementById('p-name2').innerHTML = p_positionTwo_Blog1.Name;

    document.getElementById('p-topic-sentence2').innerHTML = p_positionTwo_Blog1.topicSentence;

    document.getElementById('p-about2').innerHTML = p_positionTwo_Blog1.aboutTheBlog;

    document.getElementById('p-sender2-name').innerHTML = p_positionTwo_Blog1.Sender;

    document.getElementById('p-date-time2').innerHTML = p_positionTwo_Blog1.datetime;
}

function p_display_positionTwo_Blog2(){
    p_positionTwo_Blog2.Image();

    document.getElementById('p-name2').innerHTML = p_positionTwo_Blog2.Name;

    document.getElementById('p-topic-sentence2').innerHTML = p_positionTwo_Blog2.topicSentence;

    document.getElementById('p-about2').innerHTML = p_positionTwo_Blog2.aboutTheBlog;

    document.getElementById('p-sender2-name').innerHTML = p_positionTwo_Blog2.Sender;

    document.getElementById('p-date-time2').innerHTML = p_positionTwo_Blog2.datetime;
}

function p_display_positionTwo_Blog3(){
    p_positionTwo_Blog3.Image();

    document.getElementById('p-name2').innerHTML = p_positionTwo_Blog3.Name;

    document.getElementById('p-topic-sentence2').innerHTML = p_positionTwo_Blog3.topicSentence;

    document.getElementById('p-about2').innerHTML = p_positionTwo_Blog3.aboutTheBlog;

    document.getElementById('p-sender2-name').innerHTML = p_positionTwo_Blog3.Sender;

    document.getElementById('p-date-time2').innerHTML = p_positionTwo_Blog3.datetime;
}

function p_display_positionThree_Blog1(){
    
    p_positionThree_Blog1.Image();

    document.getElementById('p-name3').innerHTML = p_positionThree_Blog1.Name;

    document.getElementById('p-topic-sentence3').innerHTML = p_positionThree_Blog1.topicSentence;

    document.getElementById('p-about3').innerHTML = p_positionThree_Blog1.aboutTheBlog;

    document.getElementById('p-sender3-name').innerHTML = p_positionThree_Blog1.Sender;

    document.getElementById('p-date-time3').innerHTML = p_positionThree_Blog1.datetime;


}

function p_display_positionThree_Blog2(){
    
    p_positionThree_Blog2.Image();

    document.getElementById('p-name3').innerHTML = p_positionThree_Blog2.Name;

    document.getElementById('p-topic-sentence3').innerHTML = p_positionThree_Blog2.topicSentence;

    document.getElementById('p-about3').innerHTML = p_positionThree_Blog2.aboutTheBlog;

    document.getElementById('p-sender3-name').innerHTML = p_positionThree_Blog2.Sender;

    document.getElementById('p-date-time3').innerHTML = p_positionThree_Blog2.datetime;

}

function p_display_positionThree_Blog3(){
    
    p_positionThree_Blog3.Image();

    document.getElementById('p-name3').innerHTML = p_positionThree_Blog3.Name;

    document.getElementById('p-topic-sentence3').innerHTML = p_positionThree_Blog3.topicSentence;

    document.getElementById('p-about3').innerHTML = p_positionThree_Blog3.aboutTheBlog;

    document.getElementById('p-sender3-name').innerHTML = p_positionThree_Blog3.Sender;

    document.getElementById('p-date-time3').innerHTML = p_positionThree_Blog3.datetime;

}


// By refreshing the page,it will randomly choose a blog to display for you.
function p_pickRandomBlog_positionOne(){
    let randomNumber = Math.random();
    
    if (randomNumber >= 0 && randomNumber <= 0.3) {
        p_display_PositionOne_Blog1();
       

    } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
        p_display_positionOne_Blog2();
        

    }else{
        p_display_positionOne_Blog3();
        
    }
}
p_pickRandomBlog_positionOne();



function p_pickRandomBlog_positionTwo(){
    let randomNumber = Math.random();
    
    if (randomNumber >= 0 && randomNumber <= 0.3) {
        p_display_positionTwo_Blog1();
       

    } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
        p_display_positionTwo_Blog2();
        

    }else{
        p_display_positionTwo_Blog3();
        
    }
}
p_pickRandomBlog_positionTwo();




function p_pickRandomBlog_positionThree(){
    let randomNumber = Math.random();
    
    if (randomNumber >= 0 && randomNumber <= 0.3) {
        p_display_positionThree_Blog1();
       

    } else if (randomNumber > 0.3 && randomNumber <= 0.6) {
        p_display_positionThree_Blog3();
        

    }else{
        p_display_positionThree_Blog2();
        
    }
}

p_pickRandomBlog_positionThree();


