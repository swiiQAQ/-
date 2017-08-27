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
            node[i].getElementsByClassName("rq_num")[0].setAttribute("name","on");
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
var id = -1;
var rq = ['88','58','63','72','53','92']
function numberAni(){
    id++;
    var onAni = document.getElementsByName("on");
    var num = rq[id];
    var timeline = 300;
    var index = "00";
    var timer = setInterval(function(){
        onAni[id].innerText = index;
        index = parseInt(index);
        index +=10;
        if(index == 110){
            clearInterval(timer);
            onAni[id].innerText=num;
            timer = 0;
        } 
    },20);
}