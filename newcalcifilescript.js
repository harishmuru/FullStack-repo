let myfunc1=()=>{
    let a=document.getElementById("first").value;
    let b=document.querySelector("#second").value;
    let c=parseInt(a)+parseInt(b);
    document.getElementById("answer1").innerText=c;
}
let myfunc2=()=>{
    let d=document.getElementById("first").value;
    let e=document.querySelector("#second").value;
    let f=parseInt(d)-parseInt(e);
    document.getElementById("answer1").innerText=f;
}
let myfunc3=()=>{
    let g=document.getElementById("first").value;
    let h=document.querySelector("#second").value;
    let i=parseInt(g)*parseInt(h);
    document.getElementById("answer1").innerText=i;
}
let myfunc4=()=>{
    let x=document.getElementById("first").value;
    let y=document.querySelector("#second").value;
    let z=parseInt(x)/parseInt(y);
    document.getElementById("answer1").innerText=z;
}