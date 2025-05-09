
//  const body= document.querySelector('body');


// const input = document.createElement('input');
// // input.addEventListener('keydown',inputfuncat);
// // input.addEventListener('keypress',inputfuncat);
// // input.addEventListener('keyup',inputfuncat);
// input.addEventListener('paste',inputfuncat);
// function inputfuncat(e) {
//     console.log(e.type);
// }


// body.appendChild(input)









 const body= document.querySelector('body');
 const  form= document.querySelector('form');
 const Password=document.querySelector('#Password')
 const input=document.querySelector('#input1')
 const email=document.querySelector('#email')
const main=document.querySelector('.main-card');





form.addEventListener('submit',showcute);
function showcute(e){
    e.preventDefault();
    const card=document.createElement('card');
    card.className='  card  mt-5 bg-white w-25 text-center py-2  gap-2 '

    main.appendChild(card)

    const li=document.createElement('li');
    li.className=' sdva';
    li.innerHTML=input.value
    card.appendChild(li)


    const p=document.createElement('p');
   
    p.innerHTML=email.value
    card.appendChild(p);


    const p1=document.createElement('p');
    p1.innerHTML=Password.value
    card.appendChild(p1);

    const button=document.createElement('button');
    button.innerText='buuton'
    button.className="btn btn-dark"
    button.addEventListener('click',chandeg)
    function chandeg(){
        form.style.boxShadow=' 4px 8px 61px 34px rgba(196,69,69,0.75)'
        alert('your list delete')
    }
   
    
    card.appendChild(button)
    form.reset()
    
}


main.addEventListener('click',removeCard);

function removeCard(e){
    if(e.target.className.includes('btn-dark')){
        e.target.parentElement.remove();
    }
}












