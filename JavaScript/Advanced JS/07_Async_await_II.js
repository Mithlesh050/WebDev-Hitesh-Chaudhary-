function fetchPostdata() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Post data fetched!");
        }, 3000);
    });
}
function fetchCommentdata() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Comment data fetched!");
        }, 5000);
    });
}
async function fetchContent() {
    try {
        console.log("Data fetching...");
        // const postData = await fetchPostdata();
        // const commentData = await fetchCommentdata();
        const [postData, commentData] = await Promise.all([fetchPostdata(), fetchCommentdata()]);
        console.log(postData);
        console.log(commentData);
        console.log("Fetch complte.");
        
    } catch (error) {
        console.error("Error data fetching");
    }
}
fetchContent();