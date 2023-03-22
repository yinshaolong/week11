const radiusPara = document.querySelector("#radius");
const resultPara = document.querySelector("#result");
const areaPara = document.querySelector("#area");
// ```Greet the user```
const get_user_input = (input_string) => {
    do{
        input_string = prompt(`what is the ${input_string}?`)
    }while(!isNaN(input_string))
    // if(isNaN(input_string)){
        //     alert("This is not a number");
        // }
        return input_string
    }
    function get_greeting(greeting_string, time = "Morning"){
        if (isNaN(greeting_string)){
            return (`Good ${time} ${greeting_string}`);
        }
    }
    const greet = function(){
        let user = "name", time = "time";
        user_name = get_user_input(user);
        user_time = get_user_input(time);
        return get_greeting(user_name, user_time)
    }
    greetingPara = greet()
    resultPara.textContent = greetingPara
    
    // ```Get circle area functions```
    function get_radius(){
        let radius = prompt(`what is the radius?`)
        if (isNaN(radius)){
            radiusPara.textContent = "radius is not a number"
            return;
        }
        else{
            radiusPara.textContent = `radius is ${radius}`
            return radius 
        }
        // do{
        //     input_string = prompt(`what is the ${input_string}?`)
        // }while(isNaN(input_string))
        return input_string
    }
    
    function set_circle_area(radius){
        // const area = (radius ** 2) * Math.PI;
        if (isNaN(radius)){
            radiusPara.textContent = "radius is not a number"
            return;
        }
        else{
            radiusPara.textContent = `radius is ${radius}`
        }
        area = (radius ** 2) * Math.PI;
        areaPara.textContent = `area is ${area}`;
        return area;
    }
    
    area = set_circle_area(get_radius());
    // radiusPara.textContent = area;
    
    document.querySelectorAll('.second')[0]
    document.querySelector('h2.second')

    //appending to the class list
function populateList(shoppingList){
    //1.select and store a ref to the ul -> querySelector
    const listText = document.querySelector(".shopping");
    //2.loop through the shopping list 
    for (let item of shoppingList){
    //for (let i = 0; 1 <shoppingList.length; i++) {
        //  3. createElement(li)
        const listed_item = document.createElement("li");
    //  4. append the li to the ul -> parent.appendChild()
        listText.appendChild(listed_item);
    //  5. update the text content of the li with array item
        listed_item.textContent = item;
    }

}
let myList = ['bread','cheese','green pepper']
populateList(myList);