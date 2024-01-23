const BlogComponent = ({ title, author, date, content }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-2xl w-full p-8 bg-white rounded-md shadow-md">
                <h2 className="text-3xl font-semibold mb-4">{title}</h2>
                <div className="flex items-center text-gray-500 mb-4">
                    <p className="mr-2">Author: {author}</p>
                    <p>Date: {date}</p>
                </div>
                <div className="text-gray-700">{content}</div>
            </div>
        </div>
    );
};

export default BlogComponent;