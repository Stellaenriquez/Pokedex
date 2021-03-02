
    const Pname = document.getElementById('name');
    const dp = document.getElementById('pokemonDP');
    const Ptype = document.getElementById('type');
    const Pid = document.getElementById('pokemonId');
    const height = document.getElementById('height');
    const weight = document.getElementById('weight');
    const abilities = document.getElementById('abilities');
    const hiddenAb = document.getElementById('hiddenAb');
    const hp = document.getElementById('hp');
    const att = document.getElementById('att');
    const def = document.getElementById('def');
    const sAtt = document.getElementById('sAtt');
    const sDef = document.getElementById('sDef');
    const speed = document.getElementById('speed');
    const input = document.getElementById('find');
    const searchBtn = document.getElementById('searchBtn');
    const showPokemon = document.getElementById('flip-card')
    const error = document.getElementById('showError');

    
    function getData(id) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(function(response) {
                response.json()
		    .then(function (pokemon) {
                if (pokemon) {
                    showPokemon.style.display="block";
                    Pname.innerHTML= pokemon.name;
                    dp.setAttribute('src', pokemon.sprites.other.dream_world.front_default)
                    Ptype.innerHTML = `${pokemon.types[0].type.name}`;
                    Pid.innerHTML = pokemon.id;
                    height.innerHTML = pokemon.height;
                    weight.innerHTML = pokemon.weight;
                    abilities.innerHTML = `${pokemon.abilities[0].ability.name}`;
                    hiddenAb.innerHTML = `${pokemon.abilities[1].ability.name}`;
                    hp.innerHTML = pokemon.stats[0].base_stat;
                    att.innerHTML = pokemon.stats[1].base_stat;
                    def.innerHTML = pokemon.stats[2].base_stat;
                    sAtt.innerHTML = pokemon.stats[3].base_stat;
                    sDef.innerHTML = pokemon.stats[4].base_stat;
                    speed.innerHTML = pokemon.stats[5].base_stat;
                }              
                
			}).catch(function(){
                if(response.status = 404 || response.statusText == 'Not found') {
                    document.getElementById('showError').style.display = "block";
                } 
            })
        })
    }
    

    //button


    searchBtn.addEventListener('click',function(){
        showPokemon.style.display = "none";
        error.style.display = "none";
        getData(input.value);
        document.getElementById('openpokemon').src='./img/pokeball.png'
        setTimeout(function(){
            document.getElementById('openpokemon').src='./img/enterpokeball.png'
            },1000) 
    });
   
    input.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("searchBtn").click();
        }
      });
 
    input.addEventListener("search", function(event){
        showPokemon.style.display = "none";
    })

    function btnSubmit(txt) {
        if (txt.value != '') {
            searchBtn.disabled = false;
            searchBtn.classList.add("searchBtnBW")
        }
        else {
            searchBtn.disabled = true;
            searchBtn.classList.remove("searchBtnBW")
        }
    }    
    


