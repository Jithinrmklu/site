const testimonial = {
    photo: 'https://placebear.com/g/200/200',
    name: 'John Doe',
    company: 'ABC Company',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
};

const TestimonialComponent = () => {
    return (
        <div className="bg-slate-300 mx-auto mt-8 shadow-md text-black px-4 lg:px-8">
            <div className="items-start px-12 py-5">
                <img
                    src={testimonial.photo}
                    alt={`Photo of ${testimonial.name}`}
                    className="w-12 h-12 rounded-full"
                />
                <div className="text-left mb-2">
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-md font-semibold">{testimonial.company}</p>
                </div>
                <div>
                    <p className="text-md font-semibold py-3">{testimonial.text}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialComponent;