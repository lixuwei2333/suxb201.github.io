var arr =new Array();
var ttt = 200;
$(document).ready(function(){  newGame(); });

function newGame()
{
  init();
  generateOneNumber();
  generateOneNumber();
}

function generateOneNumber()
{
  var rx=Math.floor(Math.random()*4);
  var ry=Math.floor(Math.random()*4);
  while(true)
  {
    if(arr[rx][ry]==0) break;
    rx=Math.floor(Math.random()*4);
    ry=Math.floor(Math.random()*4);
  }
  arr[rx][ry]=rx%2 +1;
  $("#tu"+rx+ry).css("background",getBackground(arr[rx][ry]));

  $("#tu"+rx+ry).animate({
      width:"100px",
      height:"100px",
    },50);
}


function toPx(x) {return 20 + 120*x;}
function init()
{
  for(var i =0;i<4;i++)
    for(var j =0;j<4;j++)
    {
      var tmp = $("#t"+i+j);
      tmp.css("top",toPx(i));
      tmp.css("left",toPx(j));
    }
  for(var i = 0;i<4;i++)
  {
    arr[i]=new Array();
    for(var j=0;j<4;j++) arr[i][j]=0;
  }
  updateView();
}


function updateView()
{
  $(".tuClass").remove();
  for(var i=0;i<4;i++)
    for(var j=0;j<4;j++)
    {
      $("#grid-container").append(   '<div class="tuClass" id="tu'   +i+j+   '"></div>'   );

      if(arr[i][j]==0)
      {
        $("#tu"+i+j).css("height","0px");
        $("#tu"+i+j).css("width","0px");
      }
      else
      {
        $("#tu"+i+j).css("height","100px");
        $("#tu"+i+j).css("width","100px");
      }

      $("#tu"+i+j).css("top",toPx(i));
      $("#tu"+i+j).css("left",toPx(j));

      if(arr[i][j]>10) arr[i][j]=10;
      $("#tu"+i+j).css("background",getBackground(arr[i][j]));
    }
}


function getBackground(x)
{
  if(x==0){ return "#ccc0b3";}
  if(x==10) return "red";
  return "url("+x+".gif)";
}


$(document).keydown(function(event)
{
  switch(event.keyCode)
  {
    case 37:
      event.preventDefault();
      if(moveLeft())
      {
        yy=1;
        generateOneNumber();
      }
      break;
    case 38:
      event.preventDefault();
      if(moveUp())
      {
        yy=1;
        generateOneNumber();
      }
      break;
    case 39:
      event.preventDefault();
      if(moveRight())
      {
        yy=1
        generateOneNumber();
      }
      break;
    case 40:
      event.preventDefault();
      if(moveDown())
      {
        yy=1;
        generateOneNumber();

      }
      break;
  }
  setTimeout(updateView,205);
})

function moveLeft()
{
  var yy=0;
  for(var i=0;i<4;i++)
  {
    for(var s=0;s<=3;s++)
      if(arr[i][s]!=0)
        for(var t=s+1;t<=3;t++)
          if(arr[i][t]!=0)
          {
            if(arr[i][s]!=arr[i][t])
              break;
            else
            {
              yy=1;

              arr[i][s]++;
              arr[i][t]=0;
              showAnimation(i,t,i,s);
              s=t;
              break;
            }
          }
  }
  for(var i=0;i<4;i++)
    for(var s=0;s<=3;s++)
      if(arr[i][s]==0)
        for(var t=s+1;t<=3;t++)
          if(arr[i][t]!=0)
          {
            yy=1;
            arr[i][s]=arr[i][t];
            arr[i][t]=0;
            showAnimation(i,t,i,s);
            break;
          }

//  setTimeout("updateView()",10000);
//  setTimeout("updateView()",10000);
  return yy ;
}

function showAnimation(x,y,tx,ty)
{
  $("#tu"+x+y).animate({top:toPx(tx),left:toPx(ty)},200);
}



function moveRight()
{
  var yy=0;
  for(var i=0;i<4;i++)
    for(var s=3;s>=0;s--)
      if(arr[i][s]!=0)
        for(var t=s-1;t>=0;t--)
          if(arr[i][t]!=0)
          {
            if(arr[i][s]!=arr[i][t])
              break;
            else
            {
              yy=1;
              arr[i][s]++;
              arr[i][t]=0;
              showAnimation(i,t,i,s);
              s=t;
              break;
            }
          }
  for(var i=0;i<4;i++)
    for(var s=3;s>=0;s--)
      if(arr[i][s]==0)
        for(var t=s-1;t>=0;t--)
          if(arr[i][t]!=0)
          {
            yy=1;
            arr[i][s]=arr[i][t];
            arr[i][t]=0;
            showAnimation(i,t,i,s);
            break;
          }
  return yy ;
}
function moveUp()
{
  var yy=0;
  for(var i=0;i<4;i++)
  {
    for(var s=0;s<=3;s++)
      if(arr[s][i]!=0)
        for(var t=s+1;t<=3;t++)
          if(arr[t][i]!=0)
          {
            if(arr[s][i]!=arr[t][i])
              break;
            else
            {
              yy=1;
              arr[s][i]++;
              arr[t][i]=0;
              showAnimation(t,i,s,i);
              s=t;
              break;
            }
          }
  }
  for(var i=0;i<4;i++)
    for(var s=0;s<=3;s++)
      if(arr[s][i]==0)
        for(var t=s+1;t<=3;t++)
          if(arr[t][i]!=0)
          {
            yy=1;
            arr[s][i]=arr[t][i];
            arr[t][i]=0;
            showAnimation(t,i,s,i);
            break;
          }
  return yy ;
}
function moveDown()
{
  var yy=0;
  for(var i=0;i<4;i++)
    for(var s=3;s>=0;s--)
      if(arr[s][i]!=0)
        for(var t=s-1;t>=0;t--)
          if(arr[t][i]!=0)
          {
            if(arr[s][i]!=arr[t][i])
              break;
            else
            {
              yy=1;
              arr[s][i]++;
              arr[t][i]=0;
              showAnimation(t,i,s,i);
              s=t;
              break;
            }
          }
  for(var i=0;i<4;i++)
    for(var s=3;s>=0;s--)
      if(arr[s][i]==0)
        for(var t=s-1;t>=0;t--)
          if(arr[t][i]!=0)
          {
            yy=1;
            arr[s][i]=arr[t][i];
            arr[t][i]=0;
            showAnimation(t,i,s,i);
            break;
          }
  return yy ;
}
