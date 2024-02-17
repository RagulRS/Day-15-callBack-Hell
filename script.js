const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);



const button = document.createElement('button');
button.className = 'btn';
button.innerText = 'Start'
button.addEventListener('click', () =>{
   setTimeout(()=>{
    container.innerText = '10';
    setTimeout(()=>{
        container.innerText = '9';
        setTimeout(()=>{
            container.innerText = '8';
            setTimeout(()=>{
                container.innerText = '7';
                setTimeout(()=>{
                    container.innerText = '6';
                    setTimeout(()=>{
                        container.innerText = '5';
                        setTimeout(()=>{
                            container.innerText = '4';
                            setTimeout(()=>{
                                container.innerText = '3';
                                setTimeout(()=>{
                                    container.innerText = '2';
                                    setTimeout(()=>{
                                        container.innerText = '1';
                                        setTimeout(()=>{
                                            container.innerText = 'Happy Independence Day';
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
   },1000)
    
});
container.appendChild(button);


