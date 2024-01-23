import BlogList from '../components/BlogList ';

export default function blogs() {
    const blogData = [{
        id: 1,
        title: 'Introduction to Tailwind CSS',
        readTime: "5 mins",
        author: 'John Doe',
        date: 'January 15, 2024',
        subheading: "Next js",
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 2,
        title: 'Introduction to Tailwind CSS',
        readTime: "5 mins",
        author: 'John Doe',
        date: 'January 15, 2024',
        subheading: "Next js",
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 3,
        title: 'Introduction to Tailwind CSS',
        readTime: "5 mins",
        author: 'John Doe',
        date: 'January 15, 2024',
        subheading: "Next js",
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    ];

    return (
        <div>
            <BlogList blogs={blogData} />
        </div>
    );
};
