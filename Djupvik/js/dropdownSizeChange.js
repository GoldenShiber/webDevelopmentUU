    var count = 0;
    var windowSize = window.matchMedia("(max-width: 731px)")
    function changeDropdownCounter() {
        
        count++;
        if(windowSize.matches){
            if(count%2==1){
            
                document.querySelector("aside").style.height = "300px";
                document.querySelector(".navbar").style.height="300px";
            }
            else{
            document.querySelector("aside").style.height = "200px";
            document.querySelector(".navbar").style.height="200px";
            }
        } else{
            document.querySelector("aside").style.height = "100%";
        }
        
    }