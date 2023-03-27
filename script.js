const play=()=>{
    let audio=new Audio("mixkit-digital-clock-digital-alarm-buzzer-992.wav")
    audio.play()
}
set.onclick=(e)=>{
    e.preventDefault()
    let time=document.getElementById("time").value
    if(time.length>=1){
        alert("Alarm set after",time,"seconds")
    setTimeout(()=>{
        play()
    },time*1000)
    }
    else{
        alert("Enter time interval in seconds please!!")
    }
}