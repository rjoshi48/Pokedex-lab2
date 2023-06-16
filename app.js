//Global ul list element
var continerlist= document.createElement('ul');
    continerlist.classList.add('no-bullets');

//validate the number input
function validatenum(){

    let input = document.getElementById('search-num').value ;

    var ul = document.getElementsByTagName(ul);

    //check if the input is number
    if(input.match(/^[0-9]+$/) == null){
        continerlist.innerText= '';
        setTimeout(()=>alert('Please enter a number!'),1);
        return;
    }

    //check the length of input
    if(input.length > 20){
        continerlist.innerText= '';
        setTimeout(()=>alert('String length should be less than 20 characters'),1);
        return;
    } 

    //check if the number is > 20 
    if (input> 20){
      continerlist.innerText= '';
      setTimeout(()=>alert('Please enter numbers between 1 to 20'),1);
      return;
    }


    // match input 
    var i = 0
    var temparray = [];

    continerlist.innerText= '';
    
    //store filterd values in temp array object
    for(i; i<pokemoninfo.length; i++){

        if(pokemoninfo[i].number.indexOf(input) >-1){

          const index = temparray.findIndex(element => element.number === pokemoninfo[i].number);             
                temparray.push(pokemoninfo[i]);
                          
        }
    }


    temparray.forEach(function (item) {

        var divcontainer =document.createElement('div');
        divcontainer.classList.add('pokemonjscontainer');

        var listElement = `<li>
        <div class="img-container">
          <img class="pokemon1" src="pokemon/${item.number}.png"/>
        </div>
        <div class="info">
          <span class="number">#00${item.number}</span>
          <h3 class="name">${item.name}</h3>
        </div>
        </li>`;

      divcontainer.insertAdjacentHTML('beforeend',listElement);
      
      continerlist.appendChild(divcontainer);

      var ulcontianer= document.querySelector('.no-bullets');

      ulcontianer.parentNode.insertBefore(continerlist, ulcontianer);

    });
}

//validate the string input
function validatestring(){
    let string = document.getElementById('search-string').value ;
    //check if the input is number
    if(string.match(/^[a-zA-Z]+$/) == null){
        continerlist.innerText= '';  
        setTimeout(()=>alert('Please enter a string!!'),1);
        return;
    }
    //check the length of input
    if(string.length > 20){
        continerlist.innerText= '';  
        setTimeout(()=>alert('String length should be less than 20 characters'),1);
        return;
    }

        // match input 
        var i = 0
        let temparray = [];

        continerlist.innerText= '';

        for(i; i<pokemoninfo.length; i++){
            
    
            if(pokemoninfo[i].name.toLowerCase().indexOf(string.toLowerCase()) >-1){
                
                    temparray.push(pokemoninfo[i]);
                           
            }
        }
    
        temparray.forEach(function (item) {

              //continerlist.remove();

              var divcontainer1 =document.createElement('div');
              divcontainer1.classList.add('pokemonjscontainer');
      
              var listElement1 = `<li>
              <div class="img-container">
                <img class="pokemon1" src="pokemon/${item.number}.png"/>
              </div>
              <div class="info">
                <span class="number">#00${item.number}</span>
                <h3 class="name">${item.name}</h3>
              </div>
              </li>`;
      
              divcontainer1.insertAdjacentHTML('beforeend',listElement1);
              
              continerlist.appendChild(divcontainer1);
        
              var ulcontianer1= document.querySelector('.no-bullets');
        
              ulcontianer1.parentNode.insertBefore(continerlist, ulcontianer1);
        });
}

//define a global pokemon array object

var pokemoninfo = [
  {
      "number": "1",
      "name": "Bulbasaur",
      "height": "2' 04",
      "abilities": "Overgrow",
      "gender": "both" ,
      "category" : "Seed"
    },

    {
      "number": "2",
      "name": "Ivysaur",
      "height": "3' 03",
      "abilities": "Overgrow",
      "gender": "both" ,
      "category" : "Seed"
    },

    {
      "number": "3",
      "name": "Venusaur",
      "height": "6' 07",
      "abilities": "Overgrow",
      "gender": "both" ,
      "category" : "Seed"
    },

    {
      "number": "4",
      "name": "Charmander",
      "height": "2' 00",
      "abilities": "Blaze",
      "gender": "both" ,
      "category" : "Lizard",
      "weight" : "2.6 lbs"
    },

    {
      "number": "5",
      "name": "Charmeleon",
      "height": "3' 07",
      "abilities": "Blaze",
      "gender": "both" ,
      "category" : "Lizard",
      "weight" :"41.9 lbs"
    },

    {
      "number": "6",
      "name": "Charizard",
      "height": "5' 07",
      "abilities": "Blaze",
      "gender": "both" ,
      "category" : "Lizard",
      "weight" :"199.5 lbs"
    },

    {
      "number": "7",
      "name": "Squirtle",
      "height": "1' 08",
      "abilities": "Torrent",
      "gender": "both" ,
      "category" : "Tiny Turtle",
      "weight" :"19.8 lbs"
    },

    {
      "number": "8",
      "name": "Wartortle",
      "height": "3' 03",
      "abilities": "Torrent",
      "gender": "both" ,
      "category" : "Turtle",
      "weight" :"49.6 lbs"
    },

    {
      "number": "9",
      "name": "Blastoise",
      "height": "5' 03",
      "abilities": "Torrent",
      "gender": "both" ,
      "category" : "Shellfish",
      "weight" :"188.5 lbs"
    },

    {
      "number": "10",
      "name": "Caterpie",
      "height": "1' 00",
      "abilities": "Shield Dust",
      "gender": "both" ,
      "category" : "Worm",
      "weight" :"6.4 lbs"
    },

    {
      "number": "11",
      "name": "Metapod",
      "height": "2' 04",
      "abilities": "Shed Skin",
      "gender": "both" ,
      "category" : "Cocoon",
      "weight" :"21.8 lbs"
    },

    {
      "number": "12",
      "name": "Butterfree",
      "height": "3' 07",
      "abilities": "Compound Eyes",
      "gender": "both",
      "category" : "Butterfly",
      "weight" :"70.5 lbs"
    },

    {
      "number": "13",
      "name": "Weedle",
      "height": "1' 00",
      "abilities": "Shield Dust",
      "gender": "both",
      "category" : "Hairy Bug",
      "weight" :"7.1 lbs"
    },

    {
      "number": "14",
      "name": "Kakuna",
      "height": "2' 00",
      "abilities": "Shed Skin",
      "gender": "both",
      "category" : "Cocoon",
      "weight" :"22.0 lbs"
    },

    {
      "number": "15",
      "name": "Beedrill",
      "height": "3' 03",
      "abilities": "Swarm",
      "gender": "both",
      "category" : "Poison Bee",
      "weight" :"65.0 lbs"
    },

    {
      "number": "16",
      "name": "Pidgey",
      "height": "1' 00",
      "abilities": "Keen Eye, Tangled Feet",
      "gender": "both",
      "category" : "Tiny Bird",
      "weight" :"4.0 lbs"
    },
    
    {
      "number": "17",
      "name": "Pidgeotto",
      "height": "3' 07",
      "abilities": "Keen Eye, Tangled Feet",
      "gender": "both",
      "category" : "Bird",
      "weight" : "66.1 lbs"
    },

    {
      "number": "18",
      "name": "Pidgeot",
      "height": "4' 11",
      "abilities": "Keen Eye, Tangled Feet",
      "gender": "both",
      "category" : "Bird",
      "weight" : "87.1 lbs"
    },

    {
      "number": "19",
      "name": "Rattata",
      "height": "1' 00",
      "abilities": "Run Away, Guts",
      "gender": "both",
      "category" : "Mouse",
      "weight" : "7.7 lbs"
    },

    {
      "number": "20",
      "name": "Raticate",
      "height": "2' 04",
      "abilities": "Run Away, Guts",
      "gender": "both",
      "category" : "Mouse",
      "weight" : "40.8 lbs"
    },

]

