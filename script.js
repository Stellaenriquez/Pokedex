
	function getData(id) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(function (response) {
            response.json()
			.then(function (pokemon) {
                console.log(pokemon)
                document.getElementById('name').innerHTML= pokemon.name;
                // document.getElementById('HP').innerHTML = pokemon.stats[0].base_stat;
                // document.getElementById('XP').innerHTML = pokemon.base_experience
                document.getElementById('pokemonDP').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
                document.getElementById('type').innerHTML = `${pokemon.types[0].type.name}`;
                document.getElementById('pokemonId').innerHTML = pokemon.id;
                document.getElementById('height').innerHTML = pokemon.height;
                document.getElementById('weight').innerHTML = pokemon.weight;
                document.getElementById('abilities').innerHTML = `${pokemon.abilities[0].ability.name}`;
                document.getElementById('hiddenAb').innerHTML = `${pokemon.abilities[1].ability.name}`;
                document.getElementById('hp').innerHTML = pokemon.stats[0].base_stat;
                document.getElementById('att').innerHTML = pokemon.stats[1].base_stat;
                document.getElementById('def').innerHTML = pokemon.stats[2].base_stat;
                document.getElementById('sAtt').innerHTML = pokemon.stats[3].base_stat;
                document.getElementById('sDef').innerHTML = pokemon.stats[4].base_stat;
                document.getElementById('speed').innerHTML = pokemon.stats[5].base_stat;
                
                // pokemon['type'] = data.types.map(type => type.type.name).join(", ")

			}).catch(function(){
                if(response.status = 404 || response.statusText == 'Not found') {
                    document.getElementById('showError').style.display = "block";
                    setTimeout(function(){
                        document.getElementById('showError').style.display ="none";
                    },2000)
                } 
            })

		})
    }
   
    
    

    //button
    const input = document.getElementById('find');
    const searchBtn = document.getElementById('searchBtn');
    const showPokemon = document.getElementById('flip-card')
    const error = document.getElementById('showError');
    const bgImg = document.getElementById('bgImg');
    const baseBack = document.getElementById('backBase');

   


    //  window.addEventListener("load", function(){

    //     setTimeout(function(n){
    //         document.getElementById('about').style.display="block";
    //         },5000)

   



        // document.getElementById('about').style.display="block";
 
//  })




    searchBtn.addEventListener('click',function(){
        getData(input.value);
        document.getElementById('openpokemon').src='./img/pokeball.png'
        setTimeout(function(){
            document.getElementById('openpokemon').src='./img/enterpokeball.png'
            },1000)
        bgImg.style.display = "none"
        
        showPokemon.style.display = "block";
        // setTimeout(function(){
        //     showPokemon.style.display="none";
        //     },15000)
        

    
    });


    // input.addEventListener('click',function(){
    //     if (!input.value) {
    //         bg.style.display = "none"
    //     }
    // });

    // input.addEventListener("search", function(event){
    //     bgImg.style.display ="block"
    //     showPokemon.style.display ="none"
    //     error.style.display ="none"
    // })

    // input.getAttribute('')

    // input.addEventListener('keydown', function(event){
    //     const key = event.key;
    //     if (key === "Backspace" || key === "Delete") {
    //         bg.style.display ="block"
    //     }
    // })
