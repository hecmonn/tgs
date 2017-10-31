export function setTours(data){
    return {
        type: 'SET_TOURS',
        data
    }
}

export function getTours(){
    return dispatch=>{
        return fetch('http://localhost:3030/api/get-tours')
        .then(res=>res.json())
        .then(data=>dispatch(setTours(data.response)))
    }
}
