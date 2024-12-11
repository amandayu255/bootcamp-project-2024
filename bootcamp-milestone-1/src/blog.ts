type Blog = {
	title: string,
	date: string,
	description: string,
    image: string,
    imageAlt: string,
    slug: string,
};

const blogs: Blog[] = [
	{
		title: "So much HW",
		date: "10-19-2024",
		description: "Getting a lot of homework and projects",
        image: "https://myhomeworkdone.com/blog/wp-content/uploads/2018/12/homework-everywhere.jpg",
        imageAlt: "Homework everywhere",
        slug: "so-much-hw",
	},
    {
		title: "Working on senior project",
		date: "10-21-2024",
		description: "Creating a game for my senior project",
        image: "https://www.vanas.ca/images/blog/video-game-design-basics-vanas.jpg",
        imageAlt: "Video Game Design",
        slug: "working-on-senior-project",
	},
];

function displayBlogs() {
    const blogContainer = document.getElementById('blog-container');
    
    if (blogContainer) {
        blogs.forEach((blog) => {
            const blogPost = document.createElement('div');
            blogPost.classList.add('blog-post');

            const title = document.createElement('h2');
            title.textContent = blog.title;

            const date = document.createElement('p');
            date.textContent = `Date: ${blog.date}`;

            const link = document.createElement('a');
            link.href = `blogs/${blog.slug}.html`;
            link.textContent = "Read more";

            blogPost.appendChild(title);
            blogPost.appendChild(date);
            blogPost.appendChild(link);

            blogContainer.appendChild(blogPost);
        });
    }
}