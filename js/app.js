
function deleteMe() {
    document.getElementById("allResult").value="";
    
}
function  calculate(newValue){
    document.getElementById("allResult").value+= newValue;
    
}
function answer() {

    let a=document.getElementById("allResult").value;
    let b=eval(a);
    document.getElementById("allResult").value=b;
    
}