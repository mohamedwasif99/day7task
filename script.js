// the countries with a population of less than 2 lakhs using Filter function
var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send()
  request.onload=function(){
     var data = request.response
     var result = JSON.parse(data)
     var res = result.filter((ele)=>ele.population<200000)
     var res1 = res.map((ele)=>ele.name.common)
     console.log(res1)
    }

//   Details name, capital, flag using forEach function

 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send()
  request.onload=function(){
     var data = request.response
     var result = JSON.parse(data)
     var res= result.forEach((ele) =>{console.log(`${ele.name.common}  ${ele.capital} ${ele.flag}`)})
        }

 //  the total population of countries using reduce function

    var request = new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true)
        request.send()
         request.onload=function(){
            var data = request.response
            var result = JSON.parse(data)
            var res = result.reduce((acc,cv)=>acc+cv.population,0)
            console.log(res)
            }

// the country which uses US Dollars as currency.
var request = new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v3.1/all",true)
        request.send()
         request.onload=function(){
            var data = request.response
            var result = JSON.parse(data)
            var res = result.filter((ele)=>{
                for(var key in ele.currencies){
                    if(ele.currencies[key].code==="USD"){
                        console.log(ele.name);

                    }
                }

            })
           
         }
