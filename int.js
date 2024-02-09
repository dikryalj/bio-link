const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast"),
title = toast.querySelector("span"),
subTitle = toast.querySelector("p"),
wifiIcon = toast.querySelector(".icon"),
closeIcon = toast.querySelector(".close-icon");

window.onload = ()=>{
    function ajax(){
        let xhr = new XMLHttpRequest(); 
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhr.onload = ()=>{
            if(xhr.status == 200 && xhr.status < 300){
                toast.classList.remove("offline");
                title.innerText = "Anda Sedang online Sekarang";
                subTitle.innerText = "Hore! Internet terhubung.";
                wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>';
                closeIcon.onclick = ()=>{ 
                    wrapper.classList.add("hide");
                }
                setTimeout(()=>{ 
                    wrapper.classList.add("hide");
                }, 5000);
            }else{
                offline(); 
            }
        }
        xhr.onerror = ()=>{
            offline(); 
        }
        xhr.send(); 
    }

    function offline(){ 
        wrapper.classList.remove("hide");
        toast.classList.add("offline");
        title.innerText = "Anda sedang offline sekarang";
        subTitle.innerText = "Opps! Internet terputus.";
        wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
    }

    setInterval(()=>{ 
        ajax();
    }, 100);
}
