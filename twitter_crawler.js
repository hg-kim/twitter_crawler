function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function getTweet(){
    data = [];
    rows = $(".tweet .js-tweet-text");
    for(var i=0; i<rows.length; i++){
        data.push($(rows[i]).text())
    }
}

(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

async function scrollBot(day){
    while(1){
        let cur = document.body.scrollHeight;
        window.scrollTo(0,document.body.scrollHeight);
        await sleep(1000);
        // try {
        //     let now = document.body.scrollHeight;
        //     let lastItem = $(".stream-items > li").last().children().children()[1].firstElementChild;
        //     let data = $(lastItem);
        //     let date = data[0].outerText.split("\n")[5].split(" ")[3].slice(0,-1)
        //     if(day != date) break;
        // } catch (e) {
        //
        // }
    }
    // getTweet();
    // console.save(data, "data.json");
}
