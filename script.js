MakeBubbleForm(50);
function MakeBubbleForm(box) 
{
for (let i = 0; i < box; i++) 
{
    var col='#008000';
    var btn = document.createElement("button");
    btn.id="bubble"+i+"";
    btn.className="bubble"
    btn.style="background-color:"+col+i+";"
    document.body.appendChild(btn);
}
}

let score=0;
for(i=1; i<=30; i++)
{
let id = "bubble"+i;
document.getElementById(id).onclick = evt=>{

    if(evt.target.style.visibility = 'hidden')
    {
       score+=1;
       
       console.log(score);
       
    }
    document.getElementById('score_final').innerHTML = score;

}}

var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function()
 {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds == 0) clearInterval(countdown);
     if (seconds === 0) { alert("TimeOut Your score -> "+ score );}
}, 1000);