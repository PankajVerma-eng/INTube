
 export const API_KEY ='AIzaSyC_qGVT1XkiTUpxdteLvKzuKGBIhSa0Hf4';

 export const value_converter = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }

   else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }

    else{
        return value;
    }

}

export default API_KEY;