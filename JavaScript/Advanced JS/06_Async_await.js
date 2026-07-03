function fetchUsersData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name : "chaicode" , url : "http://chaicode.com"})
        }, 3000);
    })
}
async function getUsersData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUsersData();
        console.log("User data : " ,userData);
    }
    catch (error) {
        console.log("Error fetching data " , error); 
    }
}
getUsersData();