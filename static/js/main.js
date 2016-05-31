var mycan = document.getElementById("mycanvas");
var con = mycan.getContext('2d');
mycan.width='300';
mycan.height='300';
var sizeR=8;
var ismousedown=false;

//设置画笔的颜色，用的colorpicker插件
$(".colorpicker").colorpicker({
  fillcolor:true,
  success:function(o,color){
    $(o).css("color",color);
    con.strokeStyle=color;
  }
});

//设置画笔大小
function setsize(n){
  sizeR=n.value;
}

//结束绘制
function enddrew(){
  ismousedown=false;
}


mycan.onmousedown=function(e){
  e.preventDefault();
  ismousedown=true;
  console.log('鼠标按下');
  var x = e.pageX-mycan.offsetLeft;
  var y = e.pageY-mycan.offsetTop;
  con.beginPath()
  con.lineCap = "round";
  con.lineJoin = "round";
  con.moveTo(x,y)
}

mycan.onmouseup=function(e){
  e.preventDefault();
  enddrew()
}

mycan.onmouseout=function(e){
  e.preventDefault();
  enddrew()
}

mycan.onmousemove=function(e){
  e.preventDefault();

  console.log('鼠标移动');

  if(ismousedown==true){
    var dx = e.pageX-mycan.offsetLeft;
    var dy = e.pageY-mycan.offsetTop;
    con.lineTo(dx,dy)
    con.stroke()
    con.lineWidth=sizeR;

    con.restore()
  }
}

mycan.addEventListener("touchstart",function(e){
  e.preventDefault();
  touch=e.touches[0];
  var x = touch.pageX-mycan.offsetLeft;
  var y = touch.pageY-mycan.offsetTop;
  con.beginPath()
  con.lineCap = "round";
  con.lineJoin = "round";
  con.moveTo(x,y)
})

mycan.addEventListener("touchmove",function(e){
  e.preventDefault();
  touch=e.touches[0];
  var dx=touch.pageX-mycan.offsetLeft;
  var dy=touch.pageY-mycan.offsetTop;
  con.lineTo(dx,dy);
  con.lineWidth=sizeR;
  con.stroke()
  con.restore()
})

mycan.addEventListener("touchend",function(e){
  e.preventDefault();
  enddrew()
})

$(".clear").click(function(){
  con.clearRect(0,0,mycan.width,mycan.height);
  tianzige()
})

//绘制田字格
function tianzige(){

  con.save()

  con.strokeStyle = "rgb(230,11,9)"

  con.beginPath()
  con.moveTo( 3 , 3 )
  con.lineTo( 297 , 3 )
  con.lineTo( 297 , 297 )
  con.lineTo( 3 , 297)
  con.closePath()
  con.lineWidth = 6
  con.stroke()

  con.beginPath()
  con.moveTo(0,0)
  con.lineTo(300,300)

  con.moveTo(300,0)
  con.lineTo(0,300)

  con.moveTo(150,0)
  con.lineTo(150,300)

  con.moveTo(0,150)
  con.lineTo(300,150)

  con.lineWidth = 1
  con.stroke()

  con.restore()
}

tianzige()