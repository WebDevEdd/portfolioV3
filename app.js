function windowToggle(){
    //declare array
    const taskBar = [];
    const windows = [];

    //declare symbol button elements
    const infoBtn = document.getElementById('infoBtn');
    const projectsBtn = document.getElementById('projects-symbol');
    const aboutBtn = document.getElementById('about-symbol');

    //declare close btns
    const infoCloseBtn = document.getElementById('info-close-btn');
    const projectsCloseBtn = document.getElementById('projects-close-btn');
    const aboutCloseBtn = document.getElementById('aboutme-close-btn');

    //declare windows array
    const infoWindow = document.getElementById('info-window');
    const productWindow = document.getElementById('projects-window');
    const aboutWindow = document.getElementById('aboutme-window');

    //close buttons array
    const closeBtns = [];

    //push buttons to array
    closeBtns.push(infoCloseBtn);
    closeBtns.push(projectsCloseBtn);
    closeBtns.push(aboutCloseBtn);

    //push window to array
    windows.push(infoWindow);
    windows.push(productWindow);
    windows.push(aboutWindow);

    //push elements to array
    taskBar.push(infoBtn);
    taskBar.push(projectsBtn);
    taskBar.push(aboutBtn);

    //z-index counter
    var zindex = 0;

    

    taskBar.forEach(function(e){ 
        e.addEventListener('click', function(){
            zindex++;
            //This gets the position of el in array
            const index = taskBar.indexOf(e);

            //window to be affected
            const windowEl = windows[index];

            if (windowEl.classList.contains('windowClose')){
                windowEl.classList.toggle('windowClose');
                windowEl.style.zIndex = zindex;
            }
            else{
                windowEl.style.zIndex = zindex;
            }
        })
    })
    closeBtns.forEach(function(e){
        e.addEventListener('click', function(){
            const index = closeBtns.indexOf(e);
            const windowEl = windows[index];

            windowEl.classList.toggle('windowClose');
         })
     })

}
windowToggle();

