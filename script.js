function openTabs(evt , cityName){
    let i, tabscontent, tabslink;

     tabscontent = document.getElementsByClassName("tabscontent");
        for(i = 0; i < tabscontent.length; i++){
            tabscontent[i].style.display = "none";
        }
    
        tabslink = document.getElementsByClassName("tabslink");
        for(i = 0; i < tabslink.length; i++){
            tabslink[i].className = tabslink[i].className.replace("active" , "");
        }
    
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += "active";
    }