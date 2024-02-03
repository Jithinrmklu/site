import Link from 'next/link';
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
        <div className="container items-center justify-center flex  min-h-screen">
            {/* <BlogList blogs={blogData} /> */}
            <ul className="max-w-md space-y-1 list-none list-inside dark:text-slate-950 mt-5 text-4xl">
                <li className='pb-16'><Link href="/webrtc">WebRTC</Link></li>
                <li className='pb-16'><Link href="/devops" >Devops</Link></li>
                <li className='pb-16'><Link href="/general" >General</Link></li>
                <li className='pb-16'><Link href="/products" >Products</Link></li>
                <li ><Link href="/services" >Services</Link></li>
            </ul>
        </div>
    );
};
