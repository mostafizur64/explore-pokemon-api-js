

const pokeMan =async ()=>{
    const url =`https://pokeapi.co/api/v2/pokemon/`;
    let id = Math.floor(Math.random() * 150) + 1;
    // Combine the pokeapi url with pokemon id
    const finalUrl = url + id;
    
    const res =await fetch(finalUrl);
    const data= await res.json();
    showPokeManDetails(data);
}
 const showPokeManDetails = (data) =>{
    
        console.log(data);
        const name = data.forms[0].name;
        const pokeManContainer = document.getElementById('container');
        pokeManContainer.innerHTML ="";
        const div = document.createElement('div');
        div.innerHTML =`
        <figure><img class="w-[70%] move " src=${data.sprites.other.dream_world.front_default} alt="Shoes" /></figure>
        <div class="card-body text-center  space-y-6">
            <h2 class="card-title text-5xl justify-center">${name.charAt(0).toUpperCase() + name.slice(1)}</h2>
            <hr>
            <div class="w-50 mx-auto px-8 py-2 text-white rounded bg-cyan-500 hover:bg-cyan-600">Normal</div>
            <div class="grid grid-cols-2 justify-center ">
                <p>Order: ${data.order}</p>
                <p>Id: ${data.id}</p>
            </div>
            <div class="grid grid-cols-3 ">
              <div>
                <h2 id="attack"class="text-2xl">${data.types[0].type.name}</h2>
                <p>type</p>

              </div>
              <div>
                <h2 class="text-2xl">${data.weight}</h2>
                <p id="defense">weight</p>

              </div>
              <div>
                <h2 class="text-2xl">${data.height}</h2>
                <p id="spreed">height</p>

              </div>
             
            </div>
        </div>
        <div class="card-actions justify-center">
            <button onclick="autoReload()" class="btn btn-primary">New Generate</button>
        </div>
        `;
        pokeManContainer.appendChild(div);
       
        
   
}

pokeMan();
const autoReload = ()=>{
    pokeMan();

}