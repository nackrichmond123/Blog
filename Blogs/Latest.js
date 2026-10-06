export function renderLatestBlogs1() {

    const blogs = [
        {
            Image: 'Images/Latest-Blog-Images/First-Position-Image/Alvarez.jpeg',  

            Name: 'ALVAREZ TRANSFER NEWS',

            topicSentence: 'Atletico Madrid denied €100m as valuation to let Julián Álvarez go',

            aboutTheBlog: 'Barcelona are prepared to return to the table soon, Julián’s camp already made clear to Atléti that he wants to leave.Barcelona are also keen to make the deal done before start of the World cup...',

            Sender: 'Fabrizio Romano',

            dateTime: '29th May,2026',
        },

        {
            Image: 'Images/Latest-Blog-Images/First-Position-Image/Arne Slot Sack.jpeg',
                
            Name: 'ARNE SLOT SACKED',

            topicSentence: `It’s over between the Dutch manager and Liverpool after end of the season review`,

            aboutTheBlog: 'Andoni Iraola, clear favorite to take over as next #LFC head coach starting next season...',

            Sender: 'Fabrizio Romano',

            dateTime: '30th May,2026',    
        },

        {
            Image: 'Images/Latest-Blog-Images/First-Position-Image/Olivia .jpeg',
                
            Name: 'BILLIONS CLUB LIVE WITH OLIVIA RODRIGO',

            topicSentence: `Billions Club Live with Olivia Rodrigo,Out tomorrow on Spotify`,

            aboutTheBlog: 'Watch Olivia Rodrigo perform her biggest hits from Barcelona. Billions Club Live out now on Spotify...',

            Sender: 'Spotity music',

            dateTime: '30th May,2026',        
        }
    ];


    // Generating the HMTL here,Starting to use the Model View Control(MVC) model.
    let theAccumulator = '';
    blogs.forEach((value)=>{
        theAccumulator += `
            <div class="container" id="latest-container-one">
                
                <div class="image-box"><img src="${value.Image}" alt="oops" id="l-image1" ></div>

                <p id="l-name1" class="name">${value.Name}</p>

                <P id="l-topic-sentence1" class="topic-sentence">${value.topicSentence}</P>

                <p id="l-about1" class="about">${value.aboutTheBlog}</p>

                <p id="l-sender1-name" class="sender-name">${value.Sender}</p>

                <p id="l-date-time1" class="date-time">${value.dateTime}</p>

            </div>
        `
        
        
    });
    // console.log(theAccumulator);
    document.querySelector('.containers').innerHTML = theAccumulator;

    
}

export function renderLatestBlogs2() {

    const blogs = [
        {
            Image :'Images/Latest-Blog-Images/Second-Position-Image/Face of STU.jpeg',
                

            Name: 'FACE OF STU 2026 IS HERE',

            topicSentence: `The moment you’ve been waiting for is finally here! 
                    Nominations for Face of STU 2026 are officially open`,

            aboutTheBlog: 'Do you have what it takes to represent elegance and impact? This is your chance to shine on a bigger stage!.Visit the SRC Women Commissioner’s Office or call 0540113368 for enquiries...',

            Sender: 'STU-SRC Official',

            datetime: '30th May,2026', 
        },

        {
            Image: 'Images/Latest-Blog-Images/Second-Position-Image/World cup troll.jpeg',

            Name: 'WORLD CUP PREPARATION',

            topicSentence: `Whiles some people are chasing the trophy others are comfortably sleeping over it.`,

            aboutTheBlog: 'The world cup tournament starts in less than 2 weeks and some big names that will be watch at the tournament are doing what they do best...',

            Sender: 'Troll football',

            datetime: '29th May,2026',   
        },

        {
            Image: 'Images/Latest-Blog-Images/Second-Position-Image/Me Right Now.jpeg',

            Name: 'UCL FINAL TODAY',

            topicSentence: `The UCL final kick off today and others are fighting over club issues and transfers`,

            aboutTheBlog: 'Barcelona and Atlitico Madrid are fighting over transfers while Liverpool sack Arne Slot today.Me waiting for the UCL final to kick off....',

            Sender: 'Troll football',

            datetime: '29th May,2026',       
        }
    ];


    // Generating the HMTL here,Starting to use the Model View Control(MVC) model.
    let theAccumulator = '';
    blogs.forEach((value)=>{
        theAccumulator += `
            <div class="container" id="latest-container-one">
                
                <div class="image-box"><img src="${value.Image}" alt="oops" id="l-image1" ></div>

                <p id="l-name1" class="name">${value.Name}</p>

                <P id="l-topic-sentence1" class="topic-sentence">${value.topicSentence}</P>

                <p id="l-about1" class="about">${value.aboutTheBlog}</p>

                <p id="l-sender1-name" class="sender-name">${value.Sender}</p>

                <p id="l-date-time1" class="date-time">${value.dateTime}</p>

            </div>
        `
        
        
    });
    // console.log(theAccumulator);
    document.querySelector('.containers').innerHTML = theAccumulator;
 
}

export function renderLatestBlogs3() {

    const blogs = [
        {
            Image: 'Images/Latest-Blog-Images/Third-Position-Image/Anthony Gordon.jpeg',

            Name: 'BARCELONA OFFICIALLY ANNOUNCE GORDON',

            topicSentence: `Barcelona signs Anthony Gordon from Newcattle United`,

            aboutTheBlog: 'Despite Barcelona being in financial crisis,they negotiated and sign Gordon in less than 48HRS,for a ransom of 80 million euros....',

            Sender: 'Benvingut al Barça ',

            datetime: '31th May,2026', 
        },

        {
            Image: 'Images/Latest-Blog-Images/Third-Position-Image/Spotify Summer songs.jpeg',

            Name: 'SUMMER SONGS ON SPOTIFY',

            topicSentence: `The best selected songs for your summer tours`,

            aboutTheBlog: 'The top 10 best songs on Spotify music for this summer are as listed above...',

            Sender: 'Spotify ',

            datetime: '31th May,2026',     
        },

        {
             Image: 'Images/Latest-Blog-Images/Third-Position-Image/Paris UCL champions.jpeg',

            Name: 'PARIS SAINT GERMAN UCL CHAMPIONS 2026',

            topicSentence: `PSG lift the trophy back to back in the club history`,

            aboutTheBlog: 'After a long 120 mins in play,PSG beat Arsenal FC on pernaties to win the UEFA champions back to back for the first time...',

            Sender: 'Score 90 Sports',

            datetime: '30th May,2026',      
        }
    ];


    // Generating the HMTL here,Starting to use the Model View Control(MVC) model.
    let theAccumulator = '';
    blogs.forEach((value)=>{
        theAccumulator += `
            <div class="container" id="latest-container-one">
                
                <div class="image-box"><img src="${value.Image}" alt="oops" id="l-image1" ></div>

                <p id="l-name1" class="name">${value.Name}</p>

                <P id="l-topic-sentence1" class="topic-sentence">${value.topicSentence}</P>

                <p id="l-about1" class="about">${value.aboutTheBlog}</p>

                <p id="l-sender1-name" class="sender-name">${value.Sender}</p>

                <p id="l-date-time1" class="date-time">${value.dateTime}</p>

            </div>
        `
        
        
    });
    // console.log(theAccumulator);
    document.querySelector('.containers').innerHTML = theAccumulator;
 
}