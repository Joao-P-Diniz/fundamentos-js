document.addEventListener("DOMContentLoaded",()=>{
    
    const cards = document.querySelectorAll(".card")
    
    cards[0].classList.add("visivel");

    cards[1].classList.remove("oculto");
    
    setTimeout(()=>{
        cards[2].classList.toggle("aparecer")
    },2000);

    const result = cards[0].classList.contains("visivel");
    console.log(result);
})
