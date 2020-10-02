/* This project will get a response from the Blogger API and send back data that can be
parsed and put into dynamically updated data into HTML and passed to the browser for my portfolio
to showcase. */


// Create a GET request to get Blogger info and return JSON data
fetch(`https://www.googleapis.com/blogger/v3/blogs/3339414188365267951/posts?key=${api_Key}`)
.then(response => {
    return response.json();
}).then(posts => {
    
// NOTE: You can return separated objects of each post by using console.log(individualPosts);
// Loop through and separate each object by itself
    posts.items.forEach(function(individualPosts) {

// Store blog post data in variables
    const postTitle = individualPosts.title;
    const  urlLink = individualPosts.url;
    let content = individualPosts.content;
    const elipticals = "...";


// Take out any HTML code from strings and stores a few sentences and ends with elipticals
    content = individualPosts.content.replace( /(<([^>]+)>)/ig, '');
    content = content.substring(0, 120) + elipticals;
// Insert new HTML of the blog content dynamically into the body
    newHTML = document.querySelector('#output');
    newHTML.insertAdjacentHTML('beforebegin', 
        `<div class="wrapper">
            <div class="card">
                <div class="name">${postTitle}</div>
                <div class="content">${content}</div> 
                <div class="url">${urlLink}</div>
            </div>
        </div>`);
});
})

// Add button with URL link to link to the post

// Log errors to console
.catch(error => {
    console.log('error!');
    console.error(error);
});