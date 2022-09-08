function calculate(){
    let dob = document.getElementById("input").value;
    let bday = new Date(dob);
    let d1 = bday.getDate();
    let m1 = bday.getMonth();
    let y1 = bday.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    const month = [31,28,31,30,31,30,31,31,30,31,30,31];

    let leap = Math.floor((y2-y1)/4);
    d2 += leap;

    if(d1>d2){
        d2 = d2 + month[m2];
        m2 = m2-1;
    }
    if(m1>m2){
        m2 = m2 + 12;
        y2 = y2 -1;
    }

    if(bday.getTime() <= today.getTime()){
        (document.getElementById("days").innerHTML = d2 - d1);
        (document.getElementById("years").innerHTML = y2 - y1);
        (document.getElementById("months").innerHTML = m2 - m1);
    }
    else{
        (document.getElementById("years").innerHTML = "not");
        (document.getElementById("months").innerHTML = "born");
        (document.getElementById("days").innerHTML = "yet");
    }
}