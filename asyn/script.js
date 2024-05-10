//generate a randon color
const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        //*16 hi krte hai basis and normally *16 kr sakte hai
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
};
let intervalid;
const startchangingColor=function(){
    //safety check by writing is startement
    if(!intervalid){
        intervalid=setInterval(changebgcolor,1000)
    }
    function changebgcolor(){
        document.body.style.backgroundColor=randomcolor();
    }
};
const stopchangingColor=function(){
    clearInterval(intervalid);
    //adding professionalism in the code 
    //deferefernecing the value of intervalid
    intervalid=null;
}

document.querySelector('#start').addEventListener('click',startchangingColor)
document.querySelector('#stop').addEventListener('click',stopchangingColor)