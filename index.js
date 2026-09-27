const comment1 = document.getElementById("PLNotAvailable");
const comment2 = document.getElementById("FINotAvailable");


document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    comment1.animate({
        left: `${clientX + 10}px`,
        top: `${clientY + 10}px`
    }, {duration: 0, fill: "forwards"})

    comment2.animate({
        left: `${clientX + 10}px`,
        top: `${clientY + 10}px`
    }, {duration: 0, fill: "forwards"})

}
/*
// Wait for the iframe to load
  const iframe = document.getElementById('mainframe');
  iframe.addEventListener('load', function() {
    try {
      // Access the iframe's document
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      
      // Get the body element
      const iframeBody = iframeDoc.body;
      
      // Retrieve body content
      const bodyHTML = iframeBody.innerHTML; // HTML content
      const bodyText = iframeBody.textContent; // Text-only content
      
      console.log('Iframe Body HTML:', bodyHTML);
      console.log('Iframe Body Text:', bodyText);
      
      // Example: Modify the iframe's body (if needed)
      iframeBody.style.backgroundColor = 'lightblue';
    } catch (error) {
      console.error('Error accessing iframe:', error);
    }
  });*/


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
        });
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
    });
}