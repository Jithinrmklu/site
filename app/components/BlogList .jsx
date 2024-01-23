import Link from "next/link";

const BlogList = ({ blogs }) => {
    return (
        <div className="relative bg-[#242d45] mt-[4rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white p-6 shadow-md">
                        {/* <Link to={`/blog/${blog.id}`}> */}
                            {/* <img
                src={blog.image}
                alt={blog.title}
                className="mb-4 w-full h-32 object-cover rounded-md"
              /> */}
                            <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
                            <p className="text-gray-600 mb-2">{blog.readTime} min read</p>
                            <div className="flex items-center">
                                {/* <img
                  src={blog.author.avatar}
                  alt={blog.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                /> */}
                                <p className="text-gray-700">{blog.author}</p>
                            </div>
                            <p className="text-gray-500 mt-2">{blog.subheading}</p>
                        {/* </Link> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
