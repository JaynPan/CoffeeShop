$(document).ready(function() {

    window.sr = ScrollReveal();
    sr.reveal('.foo', { 
        origin: 'right', 
        duration: 1000 
      });
      sr.reveal('.products', { 
        origin: 'right', 
        duration: 500 
      });
      sr.reveal('.service-content', { 
        origin: 'right', 
        duration: 1000 
      });


// slideshow
    $('.home-slideshow').slick(
        {
            dots: true,
            infinite: true,
            speed:500,
            fade: true,
            cssEase: 'linear',
            autoplay:true,
            prevArrow: null,
            nextArrow: null
        }
      
      );
// counter
    let dateCovert = Date.parse(new Date());
    let soldCounter = parseInt(((Math.floor((dateCovert/3600)/24/365))-48000)*1000);
    let lastCounterNumberArray = soldCounter.toString().split("");
    let counterNumberText = "";
    for(let i=0;i<lastCounterNumberArray.length;i++)
        {
                counterNumberText += `<span class="counter-digit-box"><b>${lastCounterNumberArray[i]}</b></span>`;
        }
        counterNumberText += `<span>+<b class="plusone">1</b></span>`;
        $('#counter-box').html(counterNumberText); 

    setInterval(function(){
        const ranNum = (Math.floor(Math.random()*7)+2);
        soldCounter +=ranNum;
        const conuterStringArray = soldCounter.toString().split("");
        counterNumberText = "";
        for(let i=0;i<conuterStringArray.length;i++)
        {

            if(conuterStringArray[i]!=lastCounterNumberArray[i])
            {
                counterNumberText += `<span class="counter-digit-box "><b class="digit-jump">${conuterStringArray[i]}</b></span>`;
            }
            else{
                counterNumberText += `<span class="counter-digit-box"><b>${conuterStringArray[i]}</b></span>`;
            }
            
        }
        counterNumberText += `<span>+<b class="plusone">1</b></span>`;
        lastCounterNumberArray = conuterStringArray;
        $('#counter-box').html(counterNumberText); 
        
        // date

        const currentdate = new Date(); 
        let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/" 
            + currentdate.getFullYear() + "  "  
            + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();

$('.date').html(datetime);

    },5000);

    function addSoldCounter(sc){
        const ranNum = (Math.floor(Math.random()*7)+2);
        sc +=ranNum;
        const conuterStringArray = sc.toString().split("");
        let counterNumberText = "";
        for(let i=0;i<conuterStringArray.length;i++)
        {

            if(conuterStringArray[i]!=lastCounterNumberArray[i])
            {
                counterNumberText += `<span class="counter-digit-box "><b class="digit-jump">${conuterStringArray[i]}</b></span>`;
            }
            else{
                counterNumberText += `<span class="counter-digit-box"><b>${conuterStringArray[i]}</b></span>`;
            }
            
        }
        counterNumberText += `<span>+<b class="plusone">1</b></span>`;
        lastCounterNumberArray = conuterStringArray;
        $('#counter-box').html(counterNumberText); 
    }
s

});