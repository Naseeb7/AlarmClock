const play=()=>{
    let audio=new Audio("mixkit-digital-clock-digital-alarm-buzzer-992.wav")
    audio.play()
}
set.onclick=(e)=>{
    e.preventDefault()
    let time=document.getElementById("time").value
    if(time.length>=1){
    setTimeout(()=>{
        play()
    },time*1000)
    alert("Alarm set after",time,"seconds")
    }
    else{
        alert("Enter time interval in seconds please!!")
    }
}