//contains network call code
//http https call

async function makeNetworkCall(){
    try{
        const URL = 'https://raw.githubusercontent.com/SatishKumar1211/food_app-json_file/main/food-app-json.txt';
        const response = await fetch(URL);
        const object = await response.json();
        return object;
    }
    catch(error){
        console.log('Some Problem in API call',error);
        throw error;
    }
    // promise.then(response => {
    //     console.log('promise is', response);  
    //         //deserialization: JSON to object
    //     promise2.then( data => {
    //         console.log('DATAis ', data);
            
    //     }).catch(e =>{
    //         console.log("JSON parse Error",e);
            
    //     });
    // }).catch(error =>{
    //     console.log('ERROR',error);
    // });
    
}
export default makeNetworkCall;