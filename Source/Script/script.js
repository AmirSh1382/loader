let $ = document 

/////////////////////////////////////

let body = $.body

// to update the screen hight //////////////////////
function domUpdater(){
    let liveUserScreenHeight = visualViewport.height
    body.style.height = liveUserScreenHeight + "px"
}

setInterval(domUpdater , 100)