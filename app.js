var xhttp = new XMLHttpRequest();
xhttp.open("GET", "index.json", true);
xhttp.send();

xhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        var people = JSON.parse(xhttp.responseText);

        const serch = function(serchname){

            document.getElementById("mask").classList.add("active"); 
            document.getElementById('wrap-list').classList.add("active");
            document.getElementById('modalClose').classList.add("active");
            
            var wrap = document.getElementById('wrap-list');
            var wrap_att = document.createElement('div');
            wrap_att.setAttribute("id","wrap-list2");
            wrap.appendChild(wrap_att);

            var list = document.getElementById('wrap-list2');
            var li = document.createElement('div');
            li.innerHTML =`<h1 class="appearence">${serchname} appear appears in:</h1>`
            list.appendChild(li);


            for(const {season, episode, title, plot, guest, photo} of (people)){
                             
                if(guest.includes(serchname)){                    
                    var li2 = document.createElement('div');
                    li2.innerHTML = 
                    `<div class=modal>
                    <div>
                        <img class="ep_photo"src=${photo}>
                    </div>
                        <div class="plot">
                           <h2>${title}</h2>
                           <div class=season-ep>
                             <h3>${season}</h3><h3>${episode}</h3>
                            </div>
                            <p>${plot}</P>
                        </div>
                     </div>`;
                    list.appendChild(li2);
                }
            }
        }
        
        
        document.getElementById("photo-babu").addEventListener("click", function () {          
            serch("Babu");
        });
        document.getElementById("paragraph-babu").addEventListener("click", function () {          
            serch("Babu");
        });
        document.getElementById("photo-mory").addEventListener("click", function () {          
            serch("Morty Seinfeld");
        });
        document.getElementById("paragraph-mory").addEventListener("click", function () {          
            serch("Morty Seinfeld");
        });
        document.getElementById("photo-helen").addEventListener("click", function () {          
            serch("Helen Seinfeld");
        });
        document.getElementById("paragraph-helen").addEventListener("click", function () {          
            serch("Helen Seinfeld");
        });
        document.getElementById("photo-leo").addEventListener("click", function () {          
            serch("Uncle Leo");
        });
        document.getElementById("paragraph-leo").addEventListener("click", function () {          
            serch("Uncle Leo");
        });
        document.getElementById("photo-frank").addEventListener("click", function () {          
            serch("Frank Costanza");
        });
        document.getElementById("paragraph-frank").addEventListener("click", function () {          
            serch("Frank Costanza");
        });
        document.getElementById("photo-estelle").addEventListener("click", function () {          
            serch("Estelle Costanza");
        });
        document.getElementById("paragraph-estelle").addEventListener("click", function () {          
            serch("Estelle Costanza");
        });
        document.getElementById("photo-susan").addEventListener("click", function () {          
            serch("Susan Ross");
        });
        document.getElementById("paragraph-susan").addEventListener("click", function () {          
            serch("Susan Ross");
        });
        document.getElementById("photo-lippman").addEventListener("click", function () {          
            serch("Mr. Lippman");
        });
        document.getElementById("paragraph-lipman").addEventListener("click", function () {          
            serch("Mr. Lippman");
        });
        document.getElementById("photo-jpeterman").addEventListener("click", function () {          
            serch("J. Peterman");
        });
        document.getElementById("paragraph-jpeterman").addEventListener("click", function () {          
            serch("J. Peterman");
        });
        document.getElementById("photo-newman").addEventListener("click", function () {          
            serch("Newman");
        });
        document.getElementById("paragraph-newman").addEventListener("click", function () {          
            serch("Newman");
        });
        document.getElementById("photo-jimmy").addEventListener("click", function () {          
            serch("Jimmy");
        });
        document.getElementById("paragraph-jimmy").addEventListener("click", function () {          
            serch("Jimmy");
        });
        document.getElementById("photo-sheila").addEventListener("click", function () {          
            serch("Sheila");
        });
        document.getElementById("paragraph-sheila").addEventListener("click", function () {          
            serch("Sheila");
        }); 
    }
}

document.getElementById("modalClose").addEventListener("click", function () {
    var child = document.getElementById("wrap-list2");
    child.parentNode.removeChild(child);
    document.getElementById("wrap-list").classList.remove("active");
    document.getElementById("mask").classList.remove("active");
    document.getElementById('modalClose').classList.remove("active");
})