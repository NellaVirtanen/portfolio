            var el_up = document.getElementById("GFG_UP"); 
            var el_down = document.getElementById("GFG_DOWN"); 
          
            el_up.innerHTML = str; 
        
            function changeColor(color) { 
            document.body.style.background = color; 
            } 
            function whiteFont(color) { 
            document.body.style.color = 'white'; 
            }
            function blackFont(color) { 
            document.body.style.color = 'black'; 
            }  
            function redFont(color) { 
            document.body.style.color = 'red'; 
            } 
            function blackHeader(color) { 
            document.getElementById('header').style.color = 'black';
            }
            function whiteHeader(color) { 
            document.getElementById('header').style.color = 'white';
            }
            function tabColor(color) { 
            nella.style.background = 'blue';
            }

            function runTumma() { 
            changeColor('#150e24');
            whiteFont('white'); 
            whiteHeader('white');
            }    
            function runVaalea() { 
            changeColor('#ad93c4'); 
            blackFont('black');
            blackHeader('black');
            }    
            function runSateenkaari() { 
            changeColor('#87bf7a');
            redFont('red');
            tabColor('blue');
            }  