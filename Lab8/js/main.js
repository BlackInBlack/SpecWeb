function filter(a,f) {
    //alert(a);
    if(!f) {
        for (let el of document.querySelectorAll('.'+a)) {
            el.style.visibility = 'hidden';
            el.style.width = '0px';
        }
    } else {
        for (let el of document.querySelectorAll('.'+a)) {
            el.style.visibility = 'visible';
            el.style.width = '200px';
        } 
        
    }
}
// filter(123);
