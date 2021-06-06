const eventTitle = document.querySelector('.eveTitle')
const eventImg = document.querySelector('.eveimg')
const eventText = document.querySelector('.textText')
const dateOf = document.querySelector('.dateOf')


fetch('/html/event.html/data')
    .then(response => response.json())
    .then(data =>{
        let eventObj = data[0]
        let elTitle = document.createElement('h2')
        eventTitle.appendChild(elTitle);
        elTitle.innerHTML = eventObj.title;
        let elDate = document.createElement('h2')
        dateOf.appendChild(elDate)
        if(eventObj.expire_day.length > 3){
            elDate.innerHTML = eventObj.start_day + ' | ' + eventObj.expire_day
        }else{
            elDate.innerHTML = eventObj.start_day
        }
        let elImg = document.createElement('img');
        eventImg.appendChild(elImg);
        elImg.setAttribute('src',eventObj.img)
        let elText = document.createElement('p')
        eventText.appendChild(elText)
        elText.innerHTML = eventObj.text.toString()
        
    })