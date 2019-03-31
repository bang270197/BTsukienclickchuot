//let idanh=null;
//idanh=document.getElementById('anhbong');
function thietke() {
     idanh = document.getElementById('anhbong');
     idanh.style.position= 'relative'  ;
     idanh.style.left = '0px' ;
}

function phai() {
    idanh.style.left=parseInt(idanh.style.left) + 10 + 'px';
}
window.onload=thietke;

