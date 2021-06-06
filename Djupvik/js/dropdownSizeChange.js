    var count = 0;
    var windowSize = window.matchMedia("(max-width: 731px)")
    function changeDropdownCounter() {
        
        count++;
        if(windowSize.matches){
            if(count%2==1){
            
                document.querySelector("aside").style.height = "320px";
                document.querySelector(".navbar").style.height="320px";
            }
            else{
            document.querySelector("aside").style.height = "220px";
            document.querySelector(".navbar").style.height="220px";
            }
        } else{
            document.querySelector("aside").style.height = "100%";
        }
        
    }