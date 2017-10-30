export function setUsers(data){
    return {
        type:'SET_USERS',
        data
    }
}

export function getUsers(){
    return dispatch=>{
        fetch('http://localhost:3030/api/get-users',{
            method:'get'
        })
        .then(res=>res.json())
        .then(data=>dispatch(setUsers(data)))
    }
}
