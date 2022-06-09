(()=>{
    let youtubeLeftContrils,youtbePlayer;
    let currentVideo="";

    chrome.runtime.onMessage.addLister((obj,sender,response)=>{
        const {type,value,videoId}=obj;

        if(type==="NEW"){
            currentVideo=videoId;
            newVideoLoaded();
        }
    });
})();