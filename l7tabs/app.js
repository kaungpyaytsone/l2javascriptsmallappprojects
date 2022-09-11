var gettabpanes = document.getElementsByClassName("tab-pane");
var gettablinks = document.getElementsByClassName("tablinks");
var getbtncloses = document.querySelectorAll(".btn-close");

var tabpanes = Array.from(gettabpanes);

function gettab(evn,linkid){
    // console.log(evn.target);
    // console.log(linkid);

    tabpanes.forEach(function(tabpane){
        tabpane.style.display = "none";
    });

    for(var x = 0; x < gettablinks.length; x++){

        gettablinks[x].className = gettablinks[x].className.replace(" active","");

        getbtncloses[x].addEventListener('click',function(){
            // console.log(this.parentElement);

            this.parentElement.style.display = "none";
        });
        
    }

    document.getElementById(linkid).style.display = "block";

    evn.target.className += " active";
};

document.getElementById("autoclick").click();