const resultHandler=()=>{
    let englishValue=document.getElementById("eng").value
    // if (englishValue >99 && englishValue<0) {
    //     alert("English value not acceptable")
    //     alert("Negative value can not be count")
    // }
    if (englishValue<40) {
        alert("you are failed in English")
    }
   
    let physicsValue=document.getElementById("phy").value
    // if (physicsValue >99) {
    //     alert("Physics value not acceptable")
    // }
    // if (physicsValue<40) {
    //     alert("you are failed in Physics")
    // }
    let mathValue=document.getElementById("math").value
    // if (mathValue >99) {
    //     alert("Mathematics value not acceptable")
    // }
    // if (mathValue<40) {
    //     alert("you are failed in Mathematics")
    // }
    let chemistryValue=document.getElementById("che").value
    // if (chemistryValue >99) {
    //     alert("Chemistry value not acceptable")
    // }
    // if (chemistryValue<40) {
    //     alert("you are failed in Chemistry")
    // }

            const total= parseFloat(englishValue)+ parseFloat(physicsValue) + parseFloat(mathValue) + parseFloat(chemistryValue)
    
     document.getElementById("totalMarks").innerHTML=total
            const avarageMarks= document.getElementById("persenTage").      innerHTML=Math.round((total/400)*100)+"%"
    document.getElementById("totalMark").innerHTML= total
    const parsent = document.getElementById("avarage").innerHTML= avarageMarks
    document.getElementById("qt").style.display="block"

    // grade calculate

    const showGrade=document.getElementById("grade")
    if (parsent>80 && parsent<100) {
        showGrade.innerText="A"   
    }
    if (parsent>60 && parsent<80) {
        showGrade.innerText="B"
    }
    if (parsent>40 && parsent<60) {
        showGrade.innerText="C"
    }
   
    document.getElementById("passFaill").innerHTML=grade.innerHTML
}