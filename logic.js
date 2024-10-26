let adding_price = 0
let current_price = 0
let yes;
let all_the_movies_added = []
let all_the_movies_price = []

let get_wishlist;

let get_the_wishlist = [];
const get_storage_array = []
let b = 0;
let heck = [];
ttt = 0


//taking all the movies possible to search for
let allMoviesCurrent = []
let allMoviesFinding = []

let nameMovie = document.querySelectorAll("#name")
let take_all_possible_movies_in_store = document.querySelectorAll("#movie-desc")


for (movies of nameMovie ) {

    allMoviesCurrent.push(movies.innerHTML)
    allMoviesFinding.push(movies)

    
}
console.log(allMoviesCurrent)

console.log(allMoviesFinding)

let take_placeholder = document.querySelector("input")




let price_of_movies = 0


function search_movie_btn() {

    let inputSearch = document.querySelector("input").value
    console.log(inputSearch)
    let take_contianer = document.querySelector("#container-moives h1")

    
    
    //search through the list of movies

    for (movie of allMoviesCurrent) {

        let take_allMovies = document.querySelectorAll(".movie")
        let taking_index = 0

        let make_upper_lower = toString(movie)

        let upper = movie.toUpperCase()
        let lower = movie.toLowerCase()

        

            if (inputSearch === movie || inputSearch === upper || inputSearch === lower) {

                for (divs of take_allMovies) {

                    divs.style.display = "none"
        
                }
        
                
                let taking_index = allMoviesCurrent.indexOf(movie)
                let find_moviedesc = allMoviesFinding[taking_index]
                let find_class = find_moviedesc.closest(".movie")
                console.log(find_class)
                find_class.style.display = "block"
                take_placeholder.value = inputSearch
                take_contianer.style.display =  "none"
                break



            } 

        
        
            else if(inputSearch === "") {

                for (divs of take_allMovies) {

                    divs.style.display = "block"
                    take_placeholder.value = inputSearch
        
                }

                take_contianer.style.display = "none"

            } else {

                for (divs of take_allMovies) {

                    divs.style.display = "none"
        
                }

                let take_contianer = document.querySelector("#container-moives h1")
                take_contianer.style.display = "block"


                





            }
        taking_index++
  
        
    };

}


function add_to_wishList(element) {

    //got the name of the movie
    
    console.log(heck)
    let numbee = 1

    let get_elements_movieName = element.closest(".movie");
    let cc = get_elements_movieName.querySelector("#name")
    let get_price = get_elements_movieName.querySelector("h4")
    price_of_movies = price_of_movies + parseFloat(get_price.getAttribute("value"))
    let a = cc.getAttribute("title")
    console.log(get_price.getAttribute("value"))
    console.log(a)


            //done DO NOT TOUCH
    for (let each of all_the_movies_added) {

        if (each === a) {
            numbee ++
            console.log(each)
                    
        }
                
    }
    console.log(numbee)

    
    let container_wish_list = document.getElementById("container-wish_list")
    let closest_h3 = document.querySelector("h3")
    let change_total = closest_h3.innerText = "Total: " + Math.round(price_of_movies) + "$"
    console.log(closest_h3.innerHTML)


    if (all_the_movies_added.includes(a)){

        
        
        all_the_movies_added.push(a)
        console.log(all_the_movies_added)

        let newe = document.getElementById(a)
        
        
        
        console.log(a)

        let newee = newe.getAttribute("id")
        console.log(newe.innerText)
        newe.setAttribute("value", numbee)
        console.log(newe)
        if (newee === a){

            newe.innerText = a + " " + numbee + "x"
            console.log(newe)

            console.log("helooo")
        }

        

    } else {

        
        let take_ol = document.querySelector("ul")
        let create_child_li = document.createElement("li")
        let this_is_title = create_child_li.setAttribute("id", a)
        let this_is_func = create_child_li.setAttribute("onclick", "clicked_to_delete(this)")
        create_child_li.setAttribute("value", numbee)
        console.log(create_child_li)

        
        all_the_movies_added.push(a)
        console.log(all_the_movies_added)

        let container_wish_list = document.getElementById("container-wish_list")
        let closest_h3 = document.querySelector("h3")
        let change_total = closest_h3.innerText = "Total: " + Math.round(price_of_movies) + "$"
        console.log(closest_h3.innerHTML)

        

        
        take_ol.appendChild(create_child_li)
        create_child_li.innerText = `${a} ${numbee}x`

    

    }

    let new_movie = all_the_movies_added

    let added_moviess = []


    
}

function clicked_to_delete(element) {

    
    
    //makes the element.innertext into a list

    let take_id_element = element.getAttribute("id")
    console.log(take_id_element)
    take_id_element = take_id_element +"1"
    console.log(take_id_element)
    let take_id_moviee = document.getElementById(take_id_element)
    console.log(take_id_moviee.getAttribute("value"))
    let take_price_movie = take_id_moviee.getAttribute("value")



    
    // Find the price element within that container


    console.log(parseInt(element.getAttribute("value")))
    console.log(parseInt(take_price_movie))
    console.log(parseInt(price_of_movies))

    let this_first = parseInt(element.getAttribute("value")) * Math.round(take_price_movie)

    let price_change = parseInt(price_of_movies) - parseInt(this_first)

    if (price_change < 0 || price_change === 0) {

        price_change = price_change - price_change
        console.log(price_change)
        all_the_movies_added = []
        console.log(all_the_movies_added)

    }
    price_of_movies = price_change
    

    console.log(element)

    let container_wish_list = document.getElementById("container-wish_list")
    let closest_h3 = document.querySelector("h3")
    let change_total = closest_h3.innerText = "Total: " + parseInt(price_change)+ "$"
    console.log(closest_h3.innerHTML)


    element.remove()





}






//the following code is for the order page

function chaning_payment_method(){
    let hey = open("storage.json", "a+")
    console.log(hey)

}


//the following code is for wish list button for mobile port 

let num = 0;

function see_wish_list() {

    console.log("hey")

    const take_wishlist = document.querySelector("#container-wish_list");
    console.log(take_wishlist)
    const take_logo = document.querySelector("#container-search")
    const take_movies = document.querySelector("#container-moives")
    const take_btn = document.querySelector("#wish_list_buttonn")
    if (num === 0) {

            take_wishlist.style.display = "block"
            take_logo.style.display = "none"
            take_movies.style.display = "none"
            take_btn.style.display = "block"
            num++

            function clicked_to_delete(element) {

    
    
                //makes the element.innertext into a list
            
                let take_id_element = element.getAttribute("id")
                console.log(take_id_element)
                take_id_element = take_id_element +"1"
                console.log(take_id_element)
                let take_id_moviee = document.getElementById(take_id_element)
                console.log(take_id_moviee.getAttribute("value"))
                let take_price_movie = take_id_moviee.getAttribute("value")
            
            
            
                
                // Find the price element within that container
            
            
                console.log(parseInt(element.getAttribute("value")))
                console.log(parseInt(take_price_movie))
                console.log(parseInt(price_of_movies))
            
                let this_first = parseInt(element.getAttribute("value")) * Math.round(take_price_movie)
            
                let price_change = parseInt(price_of_movies) - parseInt(this_first)
            
                if (price_change < 0 || price_change === 0) {
            
                    price_change = price_change - price_change
                    console.log(price_change)
                    all_the_movies_added = []
                    console.log(all_the_movies_added)
            
                }
                price_of_movies = price_change
                
            
                console.log(element)
            
                let container_wish_list = document.getElementById("container-wish_list")
                let closest_h3 = document.querySelector("h3")
                let change_total = closest_h3.innerText = "Total: " + parseInt(price_change)+ "$"
                console.log(closest_h3.innerHTML)
            
            
                element.remove()
            
            
            
            
            
            }

    } else {

        take_wishlist.style.display = "none"
        take_logo.style.display = "block"
        take_movies.style.display = "flex"
        take_btn.style.display = "none"
        num--

    }

    



}

function switch_to_order() {

    let get_the_wishlist_div = document.querySelector("#ol_wish_list")
    let get_the_wishlist_ol = get_the_wishlist_div.firstElementChild
    get_the_wishlist = document.querySelectorAll("li")
    let c = parseInt(get_the_wishlist.length)


    get_storage_array.push(c)
    console.log(JSON.stringify(get_storage_array))

    get_wishlist = c
    console.log(c)



}
    




//make a sorting mechanism from best rating to worst
//button where the movie adds to wish list
//search bar for movies

