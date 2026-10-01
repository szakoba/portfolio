var container = document.createElement('div');
var containerClass = document.createAttribute("class");
containerClass.value = "mouseTip";
container.setAttributeNode(containerClass);
var containerId = document.createAttribute("id");
containerId.value = "mouseComment";
container.setAttributeNode(containerId);
document.body.appendChild(container);
function showComment (comment) {
  document.getElementById('mouseComment').style.display = 'block';
  document.getElementById('mouseComment').innerHTML = comment;
}
const comment1 = document.getElementById("mouseComment");
document.onpointermove = event => {
    const { clientX, clientY } = event;
    comment1.animate({
        left: `${clientX + 10}px`,
        top: `${clientY + 10}px`
    }, {duration: 0, fill: "forwards"})
}

let details = document.querySelectorAll("details");
function pageSelected () {
  details.forEach((detail) => {
    if (detail.className == "mainMenu"
        || detail.className == "leftDrawer"
        || detail.className == "rightDrawer"
        || detail.className == "bottomDrawer") {
      detail.removeAttribute("open");
    }
  });
}

/*let allTodo = document.querySelectorAll("a");
function tellTodo () {
  allTodo.forEach((oneTodo) => {
    if (oneTodo.className == "todo") {
      oneTodo.addEventListener('mouseenter', showComment('page in progress'))
      oneTodo.addEventListener('mouseleave', document.getElementById('mouseComment').style.display = 'none')
    } else if (oneTodo.className == "wip") {
      oneTodo.addEventListener('mouseenter', showComment('page in progress'))
      oneTodo.addEventListener('mouseleave', document.getElementById('mouseComment').style.display = 'none')
    }
  });
}
tellTodo();*/


function darkMode() {
  document.body.style.setProperty('--FGcolor','white');
  document.body.style.setProperty('--BGcolor','#202020');  
  document.body.style.setProperty('--LINKcolor','cyan'); 
  document.body.style.setProperty('--HIGH2color','blue'); 
  document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--FGcolor','white');
  document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--BGcolor','#202020'); 
  document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--LINKcolor','cyan'); 
  document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--HIGH2color','blue'); 
  document.getElementById('onButton').style.setProperty('display','block');
  document.getElementById('offButton').style.setProperty('display','none');
  document.getElementById('mainframe').addEventListener('load', function() {
    document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--FGcolor','white');
    document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--BGcolor','#202020'); 
    document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--LINKcolor','cyan'); 
    document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--HIGH2color','blue'); 
    let imagesAll = document.getElementById('mainframe').contentWindow.document.querySelectorAll("img");
    function imagesDark () {
      imagesAll.forEach((image) => {
        if (image.className == "lightsOn") {
          image.style.setProperty("display","none");
        } else if (image.className == "lightsOff") {
          if (image.parentElement.className == "imageBox") {
            image.style.setProperty("display","block");
          } else if (image.parentElement.className == "imageCarouselStatic") {
            image.style.setProperty("display","inline");
          } 
        }
      });
    }
    imagesDark();
  });  
  let imagesAll = document.getElementById('mainframe').contentWindow.document.querySelectorAll("img");
    function imagesDark () {
      imagesAll.forEach((image) => {
        if (image.className == "lightsOn") {
          image.style.setProperty("display","none");
        } else if (image.className == "lightsOff") {
          if (image.parentElement.className == "imageBox") {
            image.style.setProperty("display","block");
          } else if (image.parentElement.className == "imageCarouselStatic") {
            image.style.setProperty("display","inline");
          } 
        }
      });
    }
  imagesDark();
}
function lightMode() {
  document.body.style.setProperty('--FGcolor','black');
  document.body.style.setProperty('--BGcolor','white');   
  document.body.style.setProperty('--LINKcolor','blue');
  document.body.style.setProperty('--HIGH2color','cyan');
  document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--FGcolor','black');
  document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--BGcolor','white'); 
  document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--LINKcolor','blue'); 
  document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--HIGH2color','cyan'); 
  document.getElementById('onButton').style.setProperty('display','none');
  document.getElementById('offButton').style.setProperty('display','block');
  document.getElementById('mainframe').addEventListener('load', function() {
    document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--FGcolor','black');
    document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--BGcolor','white'); 
    document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--LINKcolor','blue'); 
    document.getElementById('mainframe').contentWindow.document.body.style.setProperty('--HIGH2color','cyan');
    let imagesAll = document.getElementById('mainframe').contentWindow.document.querySelectorAll("img");
    function imagesLight () {
      imagesAll.forEach((image) => {
        if (image.className == "lightsOn") {
          if (image.parentElement.className == "imageBox") {
            image.style.setProperty("display","block");
          } else if (image.parentElement.className == "imageCarouselStatic") {
            image.style.setProperty("display","inline");
          }        
        } else if (image.className == "lightsOff") {
          image.style.setProperty("display","none");
        }
      });
    }
    imagesLight();
  });
  let imagesAll = document.getElementById('mainframe').contentWindow.document.querySelectorAll("img");
    function imagesLight () {
      imagesAll.forEach((image) => {
        if (image.className == "lightsOn") {
          if (image.parentElement.className == "imageBox") {
            image.style.setProperty("display","block");
          } else if (image.parentElement.className == "imageCarouselStatic") {
            image.style.setProperty("display","inline");
          }        
        } else if (image.className == "lightsOff") {
          image.style.setProperty("display","none");
        }
      });
    }
  imagesLight();
}
const darkModeMql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
if (darkModeMql && darkModeMql.matches) {
  darkMode();
}

