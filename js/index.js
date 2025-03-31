const removeGrid = () =>{
  const cardSection = document.getElementById("card-section")
  cardSection.classList.remove("grid")
}
const activeGrid = () =>{
  const cardSection = document.getElementById("card-section")
  cardSection.classList.add("grid")
}
//  <button class="btn" onclick="my_modal_5.showModal()">open modal</button>

//modal
const showModal = (petId) => {
fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
.then(res => res.json())
.then(data => showModalData(data.petData))
}
const showModalData = (ModalData) => {
 console.log(ModalData)
// alert(ModalData.pet_details)
 document.getElementById("my_modal_5").showModal()
const alldata = document.getElementById("modal-id")
alldata.innerHTML = `${ModalData.pet_details} <img src="${ModalData.image}" alt="" class="w-[272px] h-[160px] rounded-[8px]">`


}

//like button
const like = document.getElementById('like-section')
const likeButton= (petId) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
  .then(res => res.json())
  .then(data => likebutton2(data.petData))
}
const likebutton2 = (likeinfo) => {
  
  console.log(likeinfo)
 const i = `<img src="${likeinfo.image}" alt="" class="w-[272px] p-0 m-0 g-0 h-[160px] rounded-[8px]">`
like.innerHTML = like.innerHTML + i

}

//button catagory
const loadCatagory = (category) => {
  
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
  .then(res => res.json())
  .then(data => allcatagoris(data.data))
   
   
}





const loadData = () => { fetch(' https://openapi.programming-hero.com/api/peddy/categories')
.then(res => res.json())
.then(data => animal(data.categories))
}

const animal = (catagory) => {
  console.log(catagory)
    const buttonContiner = document.getElementById('button-contnier')
    catagory.forEach((allItem) => {
        console.log(allItem)
      const button =  document.createElement('button')
        button.innerHTML = `<button  onclick="loadCatagory('${allItem.category}')" class="h-28 w-72 bg-[#0e7a811a] rounded-[120px]"><img   src="${allItem.category_icon}" alt="">   ${allItem.category}</button>`
        buttonContiner.append(button)
       

        
     })

}




//card section
const loadCatagoty = () => {
  //console.log(category)
  fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
  .then(res => res.json())
  .then(data => allcatagoris(data.pets))
  
 
}


const allcatagoris = (animal2) => {
  
  const cardContiner = document.getElementById('card-section')
  if(animal2.length === 0){
    removeGrid()
    //const cardSection = document.getElementById("card-section")
    //cardSection.classList.remove("grid")
    cardContiner.innerHTML = `<div class="flex justify-center align-middle"> <img src="resos/error.webp" alt=""></img> </div>`
    
 
    return
  }
  cardContiner.innerHTML = ''

  
  
  animal2.forEach((singnalanimal) => {
    activeGrid()
    console.log(singnalanimal)
    
    const card = document.createElement('div')
    card.innerHTML = `    <div class="h-[432px] w-[312px] border-[#1313131a] border-2 rounded-lg">
        <section class="p-5">
        <div><img src="${singnalanimal.image}" alt="" class="w-[272px] h-[160px] rounded-[8px]"></div>
        <div>
        breed:${singnalanimal.breed}<br>
        Birth:${singnalanimal.date_of_birth}<br>
        Gender:${singnalanimal.gender}<br>
        Price:${singnalanimal.price}
        </div>

        <div>
          <button onclick="likeButton('${singnalanimal.petId}')" class="w-14 h-9 border-[#1313131a] border-2 rounded-lg mt-5"><img src="resos/like.png" class="w-4 h-4 pl-1" alt=""></button>
          <button class="w-[92px] h-[40px] border-[#1313131a] border-2 rounded-lg">Adopt</button>
          <button onclick="showModal('${singnalanimal.petId}')" class="w-[92px] h-[40px] border-[#1313131a] border-2 rounded-lg">DEtails</button>
        </div>
    </section>
    </div>`
cardContiner.append(card)
  } )

}






loadCatagoty()

loadData()


