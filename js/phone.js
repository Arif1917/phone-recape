const loadPhone = async (inputText)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`);
    const data = await res.json();
    const phone = data.data
    showPhone(phone)
}

const showPhone =(phones)=>{
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.textContent='';
    const showAllButton = document.getElementById('show-all-button');
    if(phones.length >12){
        showAllButton.classList.remove('hidden')
    }
    else{
        showAllButton.classList.add('hidden')
    }
   phones =phones.slice(0,12)
    phones.forEach(phone => {
        console.log(phone)
       const phoneDiv = document.createElement('div');
       phoneDiv.classList='card   shadow-sm';
       phoneDiv.innerHTML=`
       <figure>
                          <img class="w-auto"
                            src="${phone.image}" />
                        </figure>
                        <div class="card-body">
                          <h2 class="card-title ">${phone.phone_name}</h2>
                          <p>${phone.slug}</p>
                          <p>${phone.brand}</p>
                          <div class="card-actions justify-center">
                            <button class="btn btn-primary">Show Details</button>
                          </div>
                        </div>
       `;
       phoneContainer.appendChild(phoneDiv);
    });
    loadingButton(false)
}

const handleSearchButton =()=>{
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    inputField.value ='';
    loadPhone(inputText)
    loadingButton(true)
    
}

const loadingButton = (isLoading)=>{
    const toggleloadingButton = document.getElementById('loading-button');
    if(isLoading){
        toggleloadingButton.classList.remove('hidden')
    }
    else{
        toggleloadingButton.classList.add('hidden')
    }
}