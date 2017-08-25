//先初始化页面，把一出现在页面内的元素进行渲染
scrollAction();
document.addEventListener("scroll",onScroll,false);
function onScroll(e){
    window.requestAnimationFrame(scrollAction)
}
function scrollAction(){
    var flag;
    var node = document.getElementsByClassName("ckrq");
    for(var i = 0;i<node.length;i++){
        flag = isElementInviewport(node[i],80)
        // if(flag){
        //     // this.active = true;
        //     node[i].style.height = 130;
        //     numberAni(node[i]);
        // }
        if(flag){
            node[i].style.height = 130;
            node[i].getElementsByClassName(".rq_num")[0].setAttribute("name","on");
            node[i].addEventListener("transitionend",numberAni);
        }
    }
    
}
//判断是否在可视窗口内
function isElementInviewport(el,offset){
    const h = offset || 20,
          box = el.getBoundingClientRect(),
          top = (box.top>=0),
          left = (box.left>=0),
          bottom = (box.bottom <= window.innerHeight-h),
          right = (box.right<=window.innerWidth-h);
    return top&left&bottom&right;
}
// function numberAni(obj){
    // var numObj = obj.querySelector(".rq_num");
    // var num = numObj.innerText
    // var timeline = 300;
    // var index = 0;
    // var time = setInterval(function(){
    //     debugger;
    //     numObj.innerText=index;
    //     index +=10;
    //     if(index == 10){clearInterval(time);} 
    // },20);
function numberAni(){
    var onAni = document.getElementsByName("on");
    for(var i=0;i<onAni.length;i++){
        var num = onAni[0].innerText;
        var timeline = 300;
        var index = 0;
        var time = setInterval(function(){
            onAni[0].innerText=index;
            index +=10;
            if(index == 110){
                clearInterval(time);
                onAni[0].innerText=num;
                time = 0;
            } 
        },20);
    }
    
}