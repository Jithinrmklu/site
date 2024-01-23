"use client"

import { useState, useEffect } from 'react';
import Testimonial from './Testimonial';

const testimonialsData = [
    {
        id: 1,
        name: 'John Doe',
        company: 'ABC Company',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        photo: 'path/to/john-doe-photo.jpg',
    },
    {
        id: 2,
        name: 'John Loren',
        company: 'ABC Company',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        photo: 'path/to/john-doe-photo.jpg',
    }
    // Add more testimonials as needed
];

const TestimonialSlider = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Transition to the next testimonial
            setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 5000); // 5-second interval

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [currentTestimonial]);

    return (
        <div className="relative">
            {testimonialsData.map((testimonial, index) => (
                <div
                    key={testimonial.id}
                    className={`absolute top-0 left-0 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                        } transition-opacity duration-500 ease-in-out`}
                >
                    <Testimonial testimonial={testimonial} />
                </div>
            ))}
        </div>
    );
};

export default TestimonialSlider;
