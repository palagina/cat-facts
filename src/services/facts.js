import axios from "axios";
import { toast } from "react-toastify";
const baseUrl = 'https://cat-fact.herokuapp.com';
//const corsAnywhere = "https://cors-anywhere.herokuapp.com"

//In case the browser throws a cross-origin error it is possible to use corsAnywhere instead

//get 5 random facts
const getFacts = async () => {
  try{
    const fiveFactsUrl = `${baseUrl}/facts/random?amount=5`;
    const response = await axios.get(fiveFactsUrl);
    //const fiveFactsUrl = `${corsAnywhere}/${baseUrl}/facts/random?amount=5`;
    //const response = await axios.get(fiveFactsUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error.toString())
  }
};

  export default { getFacts }