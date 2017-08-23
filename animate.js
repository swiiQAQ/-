document.addEventListener("scroll",onScroll,false);
var lock;
function onScroll(e){
    if(!lock){
        lock = true;
        window.requestAnimationFrame(scrollAction)
    }
}
function scrollAction(){
    var flag;
    var node = document.getElementsByClassName("ckrq");
    for(var i = 0;i<node.length;i++){
        flag = isElementInviewport(node[i],150)
        if(!flag){
            lock = false;
        }
        else{
            this.active = true;
            node[i].style.height = 130;
            // document.removeEventListener("scroll",onScroll,false);
        }
    }
    
}
function isElementInviewport(el,offset){
    const h = offset || 20,
          box = el.getBoundingClientRect(),
          top = (box.top>=0),
          left = (box.left>=0),
          bottom = (box.bottom <= window.innerHeight-h),
          right = (box.right<=window.innerWidth-h);
    return top&left&bottom&right;
}