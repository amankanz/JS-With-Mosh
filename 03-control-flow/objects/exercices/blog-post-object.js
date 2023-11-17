
/**
 * Create a blog post object with the following properties:
 * title
 * body
 * author
 * views (represents the number of times the post has been viewed)
 * comment: each comment should have a couple of properties: auther and body
 * isLive: can either be true or false
 */

// Start of the code
// Peusocode
// Create an object with the required properties
const blogPost = {
  title: 'ziha Inc.',
  body: 'Ziha Inc. is coperation founded in 2022. Providing great services in tech, security, food, health and Estate Industries. Founded by the CEO Amani Zihalirwa Fred.',
  author: 'Wilson K.',
  views: '100k',
  comment: {
    author: 'google',
    body: 'Interested in partning with Ziha Inc. for future projects'
  },
  isLive: true
};

const showBlogPost = ( object) => {
  for (const key in object) {
    console.log(key, object[key]);
  }
}

showBlogPost(blogPost);
// End of the code