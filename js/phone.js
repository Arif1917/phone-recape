const loadPhone = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await res.json();
    const phone = data.data
    showPhone(phone)
}

const showPhone =(phones)=>{
    const phoneContainer=document.getElementById('phone-container');

    phones.forEach(phone => {
        console.log(phone)
       const phoneDiv = document.createElement('div');
       phoneDiv.classList='card   shadow-sm';
       phoneDiv.innerHTML=`
       <figure>
                          <img
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
}
loadPhone()