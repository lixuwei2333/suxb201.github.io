var arr =new Array();

$(document).ready(function(){  newGame(); });

function newGame()
{
  init();
  generateOneNumber();
  generateOneNumber();
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
  for(var i=0;i<4;i++)
    for(var j=0;j<4;j++)
    {
      if(arr[i][j]>10) arr[i][j]=10;
      $("#t"+i+j).css("background",getBackground(arr[i][j]));
    }


}
function getBackground(x)
{
  if(x==0){ return "#ccc0b3";}
  if(x==10) return "red";
  return "url("+x+".gif)";
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
  $("#t"+rx+ry).css("background",getBackground(arr[rx][ry]));
//  $("#t"+rx+ry).animate({width:"100px",height:"100px",top:toPx(rx),left:toPx(ry)},10000)
}
$(document).keydown(function(event)
{
  switch(event.keyCode)
  {
    case 37:
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
  updateView();
})
/*
function showAnimation(x,y)
{
  $("#t"+x+y).animate({width:"100px",height:"100px",},2000);
//  $("#t"+tx+ty).css("background","#ccc0b3");
}
*/
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
          //    showAnimation(i,s)
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
            break;
          }
  return yy ;
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
            break;
          }
  return yy ;
}
