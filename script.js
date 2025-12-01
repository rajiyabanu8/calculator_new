//   const display = document.getElementById("display");
 
  function appendValue(value) {
       document.getElementById("display").value += value; 
    //    display.value += value;
       
    }

    function findSquare(value) {

        let num = document.getElementById("display").value;
        let square = num * num;
        clearDisplay();
        display.value += square;
    }

    function findCube(value) {
        let num = document.getElementById("display").value;
        let cube = num * num * num;
        clearDisplay();
        display.value += cube;
    }

function clearDisplay() {
    document.getElementById("display").value =""; 
    // display.value = "";
}
function delChar() {

        display.value = display.value.slice(0, -1);
    }

function calculate() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
        
    }
    



