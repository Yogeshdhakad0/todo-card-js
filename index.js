const body=document.querySelector('body');


body.style.display='flex'
body.style.justifyContent="center"
body.style.alignItems="center";
body.style.border="2px solid red";
body.style.width="100vw";
body.style.height="100vh";




const div1=document.createElement('div');
div1.className='card';
div1.className='card1';

div1.style="width: 18rem;";



const image=document.createElement('img');
image.setAttribute("src" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s")
image.setAttribute('alt','lodding');
div1.appendChild(image);


const carddiv=document.createElement('div');
carddiv.className='card-body'
carddiv.style.textAlign='center';



const hh=document.createElement('h5');
hh.innerText = "Card title"
hh.className='card-title'
carddiv.appendChild(hh);





const paraa=document.createElement('p')
paraa.className='card-text';
paraa.innerText='Some quick example text to build on the card title and make up the bulk of the card';
carddiv.appendChild(paraa);

  


const aa=document.createElement('a');
aa.setAttribute('href','#');
aa.innerHTML="Go somewhere";
aa.className="btn btn-primary";
carddiv.appendChild(aa);





div1.appendChild(carddiv);
body.appendChild(div1);


const card = document.querySelector('.card1')
card1.style.border='2px solid red ';
// card1.style.border='2px silid red '
card1.style.margin='400px';



