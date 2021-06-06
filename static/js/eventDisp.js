const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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
        if(new Date(eventObj.expire_day) > new Date(eventObj.start_day)){
            elDate.innerHTML = new Date(eventObj.start_day).toLocaleDateString('el-El', options) + ' | ' + new Date(eventObj.expire_day).toLocaleDateString('el-El', options) 
        }else{
            elDate.innerHTML = new Date(eventObj.start_day).toLocaleDateString('el-El', options) 
        }
        let elImg = document.createElement('img');
        eventImg.appendChild(elImg);
        elImg.setAttribute('src',eventObj.img)
        let elText = document.createElement('p')
        eventText.appendChild(elText)
        elText.innerHTML = eventObj.text.toString()
        
    })