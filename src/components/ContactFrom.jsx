
const ContactForm = () => {
    return (
        <div className="bg-white rounded shadow-md">
            <h3 className="border-b border-stroke px-6 py-4 dark:border-strokedark">Contact Form 2</h3>
            <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">firstName</label>
                        <input type="text" name="firstName" placeholder="Enter your first name" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">lastName</label>
                        <input type="text" name="lastName" placeholder="Enter your last name" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" className="p-2 border rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-900">Phone</label>
                        <input type="tel" name="phone" placeholder="Enter your phone number" className="p-2 border rounded w-full" />
                    </div>
                </div>
                <div className="mt-4">
                    <label>Select option</label>
                    <div className="flex space-x-4 pt-2">
                        <label><input type="radio" name="option" /> Graphics Design</label>
                        <label><input type="radio" name="option" /> Web Development</label>
                        <label><input type="radio" name="option" /> Logo Design</label>
                        <label><input type="radio" name="option" /> Others</label>
                    </div>
                </div>
                <textarea placeholder="Type your message" className="w-full p-2 border rounded mt-4" />
                <button className="bg-blue-600 text-white w-full py-2 mt-4 rounded">Send Message</button>
            </div>
        </div>
    );
};

export default ContactForm;
