export const getHeaders = () =>{
    const token = localStorage.getItem("token")
    const auth = {
        headers: {
            Authorization : token
        }
    }

    return auth
}

export const getStorageItem = (item) =>{
   
    return localStorage.getItem(item)
}


export const setStorageItem = (item, value) =>{
   
    return localStorage.setItem(item, value)
}


export const deleteStorageItem = (item) =>{
   
    return localStorage.removeItem(item)
}