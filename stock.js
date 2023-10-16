const myForm = document.getElementById('my-form');
const nameinput = document.getElementById('name');
const descinput = document.getElementById('description');
const priceinput = document.getElementById('price');
const quantityinput = document.getElementById('quantity');


myForm.addEventListener('submit', onSubmit);
  
function onSubmit(e)
{
  e.preventDefault();
 
    const name=nameinput.value
    const description=descinput.value
    const price=priceinput.value
    const quantity=quantityinput.value
    
    let obj={
      name,
      description,
      price,
      quantity

    }

    
   axios.post("https://crudcrud.com/api/523920c5cfd34048a2455b0b54602730/stock",obj)
      .then((response)=>{
   
   console.log(response);
 
 //document.getElementById('my-form').reset();
  })
  showonscreen(obj);

}

  axios.get("https://crudcrud.com/api/523920c5cfd34048a2455b0b54602730/stock")
    .then((response)=>{
        console.log(response);
        for(var i=0;i<response.data.length;i++)
        {
            showonscreen(response.data[i]);
        }
    })
    .catch((error)=>{
        console.log(error);
    })

    function showonscreen(obj)
    {
    
  const parentElem =document.getElementById('users')
  const childElem=document.createElement('li')
  childElem.textContent=obj.name+' - '+ obj.description +' - '+ obj.price+' - '+obj.quantity
  
  const buy1Btn=document.createElement('input')
  buy1Btn.type='button'
  buy1Btn.value='buy 1 '

  const buy2Btn=document.createElement('input')
  buy2Btn.type='button'
  buy2Btn.value='buy 2 '

  const buy3Btn=document.createElement('input')
  buy3Btn.type='button'
  buy3Btn.value='buy 3 '

  buy1Btn.onclick=()=>{
    axios.put("https://crudcrud.com/api/523920c5cfd34048a2455b0b54602730/stock/652d52382e0fb203e853f40c",{
      name: "3roses",
        description: "teapowder",
        price: "300",
        quantity: "50"
    })
      .then((response)=>{
        
     // response.obj.quantity=obj.quantity-1
   //axios.showonscreen(response.data);
   console.log(response);
   }) 
     .catch((error)=>{
        console.log(error);
    })
    //parentElem.removeChild(childElem)
    
  }

    buy2Btn.onclick=()=>{
      axios.delete("https://crudcrud.com/api/523920c5cfd34048a2455b0b54602730/stock",obj)
        .then((response)=>{
     //axios.showonscreen(response.data);
     console.log(response);
     }) 
       .catch((error)=>{
          console.log(error);
      })
    }

      buy3Btn.onclick=()=>{
        axios.delete("https://crudcrud.com/api/523920c5cfd34048a2455b0b54602730/stock",obj)
          .then((response)=>{
       //axios.showonscreen(response.data);
       console.log(response);
       }) 
         .catch((error)=>{
            console.log(error);
        })
      }
    //

  
  childElem.appendChild(buy1Btn)
  childElem.appendChild(buy2Btn)
  childElem.appendChild(buy3Btn)
  parentElem.appendChild(childElem)
  
}