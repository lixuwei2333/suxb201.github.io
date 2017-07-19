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
  for(var i =0;i<4;i++) for(var="" j="0;j<4;j++)" {="" var="" tmp="$("#t"+i+j);" tmp.css("top",topx(i));="" tmp.css("left",topx(j));="" }="" i="0;i<4;i++)" arr[i]="new" array();="" arr[i][j]="0;" updateview();="" function="" updateview()="" $("#t"+i+j).css("background",getbackground(arr[i][j]));="" getbackground(x)="" if(x="=0){" return="" "#ccc0b3";}="" "url("+x+".gif)";="" generateonenumber()="" rx="Math.floor(Math.random()*4);" ry="Math.floor(Math.random()*4);" while(true)="" if(arr[rx][ry]="=0)" break;="" arr[rx][ry]="rx%2" +1;="" $("#t"+rx+ry).css("background",getbackground(arr[rx][ry]));="" $("#t"+rx+ry).animate({width:"100px",height:"100px",top:topx(rx),left:topx(ry)},10000)="" $(document).keydown(function(event)="" switch(event.keycode)="" case="" 37:="" if(moveleft())="" yy="1;" generateonenumber();="" 38:="" if(moveup())="" 39:="" if(moveright())="" 40:="" if(movedown())="" })="" moveleft()="" s="0;s<=3;s++)" if(arr[i][s]!="0)" t="s+1;t<=3;t++)" if(arr[i][t]!="0)" else="" arr[i][s]++;="" arr[i][t]="0;" if(arr[i][s]="=0)" arr[i][s]="arr[i][t];" ;="" moveright()="">=0;s--)
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
  for(var i=0;i<4;i++) for(var="" s="3;s">=0;s--)
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
  for(var i=0;i<4;i++) {="" for(var="" s="0;s<=3;s++)" if(arr[s][i]!="0)" t="s+1;t<=3;t++)" if(arr[t][i]!="0)" break;="" else="" yy="1;" arr[s][i]++;="" arr[t][i]="0;" }="" i="0;i<4;i++)" if(arr[s][i]="=0)" arr[s][i]="arr[t][i];" return="" ;="" function="" movedown()="" var="">=0;s--)
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
  for(var i=0;i<4;i++) for(var="" s="3;s">=0;s--)
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
</4;i++)></4;i++)></4;i++)></4;i++)>