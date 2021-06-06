
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const eventlist = document.querySelector('#eventList');
const buttonSeeMore = document.querySelector('#show_more');
events = [];
let eventListLen = -1;

let ndisplayEvents = 0;

fetch('/api/give_eventTable')
.then(response => response.json())
.then( data => {
    console.log(data);
    events = data;
    eventListLen = events.length;
    for ( let i = ndisplayEvents; i < ndisplayEvents + 2; i++){
        let listElem = document.createElement("li");
        eventlist.appendChild(listElem);
        
        let alistElem = document.createElement("a")
        listElem.appendChild(alistElem);
        alistElem.setAttribute("href", "./event.html"+ '?title=' + events[i].title);
        
        let imglistElem = document.createElement("img");
        alistElem.appendChild(imglistElem);
        imglistElem.setAttribute("src",events[i].img);
        imglistElem.setAttribute("alt", "Photo of " + events[i].title);
        imglistElem.setAttribute("title", events[i].title);
        
        let divlistElem = document.createElement("div");
        listElem.appendChild(divlistElem);
        divlistElem.classList.add("event-info");
    
        let titlelistElem = document.createElement("h2");
        divlistElem.appendChild(titlelistElem);
        titlelistElem.innerHTML = events[i].title;
        
        let startlistElem = document.createElement("p");
        divlistElem.appendChild(startlistElem);
        //console.log(typeof(events[i].start_day));
        startlistElem.innerHTML = new Date(events[i].start_day).toLocaleDateString('el-El', options);
    
        let endlistElem = document.createElement("p");
        divlistElem.appendChild(endlistElem);
        if(new Date(events[i].expire_day) <= new Date(events[i].start_day))
            endlistElem.innerHTML = '';
        else endlistElem.innerHTML = new Date(events[i].expire_day).toLocaleDateString('el-El', options);
    
      
    }
    ndisplayEvents = 2;
})

// if( ndisplayEvents >= eventListLen){

//     buttonSeeMore.style.display = 'none';

// }


function ShowmeMore(){
    let clistend = ndisplayEvents + 2; 
    if(ndisplayEvents > eventListLen - 2){
        clistend = eventListLen;

    }
    for (let i= ndisplayEvents; i< clistend; i++){
        let listElem = document.createElement("li");
        eventlist.appendChild(listElem);
        
        let alistElem = document.createElement("a")
        listElem.appendChild(alistElem);
        alistElem.setAttribute("href",  "./event.html"+ '?title=' + events[i].title);
        
        let imglistElem = document.createElement("img");
        alistElem.appendChild(imglistElem);
        imglistElem.setAttribute("src",events[i].img);
        imglistElem.setAttribute("alt", "Photo of " + events[i].title);
        imglistElem.setAttribute("title", events[i].title);
        
        let divlistElem = document.createElement("div");
        listElem.appendChild(divlistElem);
        divlistElem.classList.add("event-info");
    
        let titlelistElem = document.createElement("h2");
        divlistElem.appendChild(titlelistElem);
        titlelistElem.innerHTML = events[i].title;
        
        let startlistElem = document.createElement("p");
        divlistElem.appendChild(startlistElem);
        startlistElem.innerHTML = new Date(events[i].start_day).toLocaleDateString('el-El', options);
    
        let endlistElem = document.createElement("p");
        divlistElem.appendChild(endlistElem);
        if(new Date(events[i].expire_day) <= new Date(events[i].start_day))
            endlistElem.innerHTML = '';
        else endlistElem.innerHTML = new Date(events[i].expire_day).toLocaleDateString('el-El', options);

    }
    
    ndisplayEvents = ndisplayEvents + 2;
    console.log(ndisplayEvents);
    if(ndisplayEvents > eventListLen -1){
        buttonSeeMore.style.display = 'none';
    }
    

}