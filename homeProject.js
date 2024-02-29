let colorarr=["pictures/כדור א.PNG","pictures/כדור ב.PNG","pictures/כדור ג.PNG","pictures/כדור ד.png"];
let count=0;
colorarr.sort();
colorarr.reverse();
document.querySelector("#level1").addEventListener("click",createTable)
//document.getElementById("level1").style.display="none";
document.querySelector("#level2").addEventListener("click",createTable)
//document.getElementById("level2").style.display="none";
document.querySelector("#level3").addEventListener("click",createTable)
//document.getElementById("level3").style.display="none";
document.getElementById("m").style.display="none";
let num=0;
function createTable()
{

  if(event.target.id=="level1")
  {
  document.querySelector("#level1").removeEventListener("click",createTable)
  document.getElementById("level1").style.display="none";
  document.querySelector("#level2").removeEventListener("click",createTable)
  document.getElementById("level2").style.display="none";
  document.querySelector("#level3").removeEventListener("click",createTable)
  document.getElementById("level3").style.display="none";
  num=6;
  document.getElementById("oraot").style.display="none";
  document.getElementById("m").style.display="block";
  }
  else
  if(event.target.id=="level2")
  {
    document.querySelectorAll("#level1")[0].removeEventListener("click",createTable)
    document.getElementById("level1").style.display="none";
    document.querySelector("#level2").removeEventListener("click",createTable)
    document.getElementById("level2").style.display="none";
    document.querySelector("#level3").removeEventListener("click",createTable)
    document.getElementById("level3").style.display="none";
     num=7;
     document.getElementById("oraot").style.display="none";
     document.getElementById("m").style.display="block";
  }
 
  else
  if(event.target.id=="level3")
  {
    document.querySelector("#level1").removeEventListener("click",createTable)
    document.getElementById("level1").style.display="none";
    document.querySelector("#level2").removeEventListener("click",createTable)
    document.getElementById("level2").style.display="none";
    document.querySelector("#level3").removeEventListener("click",createTable)
    document.getElementById("level3").style.display="none";
    num=8;
    document.getElementById("oraot").style.display="none";
    // document.getElementById("m").style.margin="-30px";
    document.getElementById("m").style.display="block";
   
}

let inter1;
document.addEventListener("keydown", (e) => {
  e = e || window.event;
  if (e.keyCode === 38) {
      setTimeout("keyup1()", 500);
  } else if (e.keyCode === 40) {
      setTimeout("keydown1()", 500);
  } else if (e.keyCode === 37) {
      setTimeout("keyleft1()", 500);
  } else if (e.keyCode === 39) {
    inter1=  setTimeout("keyright1()", 500);
  }
});
        let mat=[];
        let arr=[];
        let newInp = document.createElement("div");
       newInp.setAttribute("id","abc");
        for (let i = 0; i < num; i++) {
            for (let j = 0; j < num; j++) {
                let newInp = document.createElement("div");
                newInp.setAttribute("class", "divs");
               newInp.innerHTML=" ";
               newInp.setAttribute("id","a"+i+j);
                document.getElementById("board").appendChild(newInp);
                arr.push(newInp);
            }
            mat.push(arr);
            arr=[];
            let br = document.createElement("br");
            document.getElementById("board").appendChild(br);
        }
        console.log(mat);
        let img1 =document.createElement('img');
        let col=Math.floor(Math.random()*(num-1));
        let row=Math.floor(Math.random()*(num-1));
 console.log(col);
 let namecolor=Math.floor(Math.random()*4);
 let img9 =document.createElement('img');
        img9.setAttribute("id","x");
        img9.setAttribute("src",colorarr[namecolor]);
        document.getElementById("a"+row+col).appendChild(img9);
        //this.reset();
}



function random1()
{
 let col=Math.floor(Math.random()*(num-1));
 console.log(col);
 let namecolor=Math.floor(Math.random()*4);
 let img1 =document.createElement('img');
img1.setAttribute("id","x");
img1.setAttribute("src",colorarr[namecolor]);
 let bool1=0;
 while(bool1==0)
 {
for(let i=0 ; i < num ;i++)
{
  if(i!=num-1)
  {
    let b=i+1;
   if(document.getElementById("a"+i+col).innerHTML==" "&&document.getElementById("a"+b+col).innerHTML!=" ")
   {
    document.getElementById("a"+i+col).appendChild(img1);
    bool1=1;
    //setTimeout("Check1row()", 500);
    // Check1row();
    return;
   }
  }
 else
 if(i==num-1)
 {
 if(document.getElementById("a"+i+col).innerHTML==" ")
 {
  document.getElementById("a"+i+col).appendChild(img1);
  Check1row();
  bool1=1;
  return;
 }
  col=Math.floor(Math.random()*num);
}
 }
}
}



function keyleft1()
{
  //"עובד הזזה לצד שמאל ברוך ד
let d;
  for (let i = 0; i < num; i++) {
    for (let j = 1; j < num; j++) {
      let m=j-1;
      d=j;
      if(document.getElementById("a"+i+j).innerHTML!=" ")
    {
      while(m>=0&&document.getElementById("a"+i+m).innerHTML==" ")
      {
        document.getElementById("a"+i+m).innerHTML=document.getElementById("a"+i+d).innerHTML;
        document.getElementById("a"+i+d).innerHTML=" ";
        d--;
        m=d-1;
      }
    }
    }
}
finish();
Check1row();
}



function keyright1()
{
 //  ברוך ד" עובד הזזה לצד ימין
 for (let i = 0; i < num ; i++) {
  for (let j = num-2; j >= 0; j--) {
    let a=j+1;
    let z=j;
    if(document.getElementById("a"+i+j).innerHTML!=" ")
    {
    while(z<num-1&&document.getElementById("a"+i+a).innerHTML==" ")
    {
      document.getElementById("a"+i+a).innerHTML=document.getElementById("a"+i+z).innerHTML;
      document.getElementById("a"+i+z).innerHTML=" ";
      z++;
      a=z+1;
    }
  }
  }
}
finish();
Check1row();
}


const keyup1=()=>
{
 //ברוך ד" עובד  הזזה למעלה
 for (let i = 0; i < num ; i++) {
  for (let j = 1; j < num; j++) {
    let z=j-1;
    let b=j;
    if(document.getElementById("a"+j+i).innerHTML!=" ")
  {
    console.log("before while "+ document.getElementById("a"+z+i).innerHTML)
    while(b>0&&document.getElementById("a"+z+i).innerHTML==" ")
    {    console.log("in  while "+ document.getElementById("a"+z+i).innerHTML)

      document.getElementById("a"+z+i).innerHTML=document.getElementById("a"+b+i).innerHTML;
      document.getElementById("a"+b+i).innerHTML=" ";
      b--;
      z=b-1;
    }
  }}
}
finish();
Check1row();
}


function ffff(uop){
return name1+lastName
}

function keydown1()
{
// הזזה למטה

for (let i = 0; i < num ; i++) {
  for (let j = num-1; j >= 0 ; j--) {
    let x=j+1;
    let n=j;
if(document.getElementById("a"+j+i).innerHTML!=" ")
{
    while(x<num&&document.getElementById("a"+x+i).innerHTML==" ")
    {
      document.getElementById("a"+x+i).innerHTML=document.getElementById("a"+n+i).innerHTML;
      document.getElementById("a"+n+i).innerHTML=" ";
      n++;
      x=n+1;
    }
  }
}}
finish();
Check1row();
}

function finish1(i,j,rrr,rrrr)
{
  console.log("enter finish" +i,j,rrr,rrrr);
  let img5 =document.createElement('img');
  img5.setAttribute("id","q");
img5.setAttribute("src","pictures/מתפלל.gif");
let img6 =document.createElement('img');
img6.setAttribute("id","q");
img6.setAttribute("src","pictures/מתפלל.gif");
let img7 =document.createElement('img');
img7.setAttribute("id","q");
img7.setAttribute("src","pictures/מתפלל.gif");
  document.getElementById("a"+i+j).innerHTML="";
  document.getElementById("a"+i+j).appendChild(img5);
  document.getElementById("a"+rrr+j).innerHTML="";
  document.getElementById("a"+rrr+j).appendChild(img6);
  document.getElementById("a"+rrrr+j).innerHTML="";
  document.getElementById("a"+rrrr+j).appendChild(img7);
}
function finish2( i, j,r,rr)
{
  let img0 =document.createElement('img');
  img0.setAttribute("id","q");
img0.setAttribute("src","pictures/מתפלל.gif");
let img3 =document.createElement('img');
img3.setAttribute("id","q");
img3.setAttribute("src","pictures/מתפלל.gif");
let img4 =document.createElement('img');
img4.setAttribute("id","q");
img4.setAttribute("src","pictures/מתפלל.gif");
document.getElementById("a"+i+j).innerHTML="";
  document.getElementById("a"+i+j).appendChild(img0);
  document.getElementById("a"+i+r).innerHTML="";
  document.getElementById("a"+i+r).appendChild(img3);
  document.getElementById("a"+i+rr).innerHTML="";
  document.getElementById("a"+i+rr).appendChild(img4);
}
function finish()
{
  let bool=0;
  for (let i = 0; i < num; i++) {
    for (let j = 1; j < num; j++) {
 if(document.getElementById("a"+i+j).innerHTML==" ")
 {
    bool=1;
    random1();
    return;
 }
  }
  }  
  if(bool==0) 
  {
  setTimeout(function t(){
    window.location.href='endgame.html'
  },4000)
  // localStorage.setItem("count",count);
  // document.getElementById("board2").innerHTML="The game finished";
  document.getElementById("board2").addEventListener("mouseover",()=>{
    clearTimeout(inter1)
 
  })
}
}

function Check1row()
{
  for (let i = 0; i < num-2; i++) {
    for (let j = 0; j < num; j++) {
      let rrr=i+1,rrrr=i+2;
if(document.getElementById("a"+i+j).innerHTML!=" "&&document.getElementById("a"+i+j).innerHTML==document.getElementById("a"+rrr+j).innerHTML&&
document.getElementById("a"+i+j).innerHTML==document.getElementById("a"+rrrr+j).innerHTML)
{
  count+=3;
//  setTimeout("finish1(i,j,rrr,rrrr)", 500);
//  setInterval("finish1(i,j,rrr,rrrr)", 500);
 finish1(i,j,rrr,rrrr);
//  let img5 =document.createElement('img');
//   img5.setAttribute("id","q");
// img5.setAttribute("src","pictures/מתפלל.gif");
// let img6 =document.createElement('img');
// img6.setAttribute("id","q");
// img6.setAttribute("src","pictures/מתפלל.gif");
// let img7 =document.createElement('img');
// img7.setAttribute("id","q");
// img7.setAttribute("src","pictures/מתפלל.gif");
//   document.getElementById("a"+i+j).innerHTML="";
//   document.getElementById("a"+i+j).appendChild(img5);
//   document.getElementById("a"+rrr+j).innerHTML="";
//   document.getElementById("a"+rrr+j).appendChild(img6);
//   document.getElementById("a"+rrrr+j).innerHTML="";
//   document.getElementById("a"+rrrr+j).appendChild(img7);
}
   }
  }
  Check1col();
}



function Check1col()
{
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num-2; j++) {
      let r=j+1,rr=j+2;
if(document.getElementById("a"+i+j).innerHTML!=" "&&document.getElementById("a"+i+j).innerHTML==document.getElementById("a"+i+r).innerHTML&&
document.getElementById("a"+i+j).innerHTML==document.getElementById("a"+i+rr).innerHTML)
{
  count+=3;
  // setInterval("finish2(i,j,r,rr)", 500);
  finish2(i,j,r,rr);
//  setTimeout("finish2(i,j,r,rr)", 500);
//   let img0 =document.createElement('img');
//   img0.setAttribute("id","q");
//   img0.setAttribute("src","pictures/מתפלל.gif");
//  let img3 =document.createElement('img');
//   img3.setAttribute("id","q");
// img3.setAttribute("src","pictures/מתפלל.gif");
// let img4 =document.createElement('img');
// img4.setAttribute("id","q");
// img4.setAttribute("src","pictures/מתפלל.gif");
// document.getElementById("a"+i+j).innerHTML="";
//   document.getElementById("a"+i+j).appendChild(img0);
//   document.getElementById("a"+i+r).innerHTML="";
//   document.getElementById("a"+i+r).appendChild(img3);
//   document.getElementById("a"+i+rr).innerHTML="";
//   document.getElementById("a"+i+rr).appendChild(img4);
}
    }
  }}

























       // function setCookie(cname,cvalue,exdays) {
            // var d = new Date();
            // d.setTime(d.getTime() + (exdays*24*60*60*1000));
            // var expires = "expires=" + d.toGMTString();
            // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        //}
        
    //    function getCookie(cname) {
    //         var name = cname + "=";
    //         var decodedCookie = decodeURIComponent(document.cookie);
    //         var ca = decodedCookie.split(';');
    //         for(var i = 0; i < ca.length; i++) {
    //             var c = ca[i];
    //             while (c.charAt(0) == ' ') {
    //                 c = c.substring(1);
    //             }
    //             if (c.indexOf(name) == 0) {
    //                 return c.substring(name.length, c.length);
    //             }
    //         }
    //         return "";
    //     }
        
      //  function checkCookie() {
        //     var user=getCookie("username");
        //     if (user != "") {
        //         alert("Welcome again " + user);
        //     } else {
        //        user = prompt("Please enter your name:","");
        //        if (user != "" && user != null) {
        //            setCookie("username", user, 30);
        //        }
        //     }
        //         // local storage
        //         // Check browser support
        //         if (typeof (Storage) !== "undefined") {
        //             // Store
        //             localStorage.setItem("lastname", "aaa");
        //             localStorage.setItem("color", "white");
        //             localStorage.setItem("age", "10");
        //             // Retrieve
        //             document.getElementById("result").innerHTML = localStorage.getItem("lastname")+"<br>";
        //             document.getElementById("result").innerHTML += localStorage.getItem("color") + "<br>";
        //             document.getElementById("result").innerHTML += localStorage.getItem("age") + "<br>";
        //         } else {
        //             document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
        //         }
        // //}
       
          
        

