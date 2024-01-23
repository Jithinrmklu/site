import Blog from '../components/Blog';

export default function blogs() {
    const blogData = {
        title: 'Introduction to Tailwind CSS',
        author: 'John Doe',
        date: 'January 15, 2024',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };

    return (
        <div>
            <Blog {...blogData} />
        </div>
    );
};
