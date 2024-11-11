const SurveyForm = () => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg ">
        <h3 className="text-2xl font-semibold mb-6">Survey Form</h3>
        
        {/* Name Field */}
        <label className="block text-gray-700 mb-1">Name</label>
        <input 
          type="text" 
          placeholder="Enter your full name" 
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500" 
        />
        
        {/* Email Field */}
        <label className="block text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500" 
        />
        
        {/* Age Field */}
        <label className="block text-gray-700 mb-1">Age</label>
        <input 
          type="number" 
          placeholder="Enter your age" 
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500" 
        />
        
        {/* Subject Dropdown */}
        <label className="block text-gray-700 mb-1">Which option best describes you?</label>
        <select className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500">
          <option>Select your subject</option>
          <option>Student</option>
          <option>Professional</option>
          <option>Freelancer</option>
          <option>Other</option>
        </select>
        
        {/* Recommendation Radio Buttons */}
        <label className="block text-gray-700 mb-1">Would you recommend our site to a friend?</label>
        <div className="flex items-center space-x-4 mb-4">
          <label className="flex items-center">
            <input type="radio" name="recommend" className="mr-2" /> Yes
          </label>
          <label className="flex items-center">
            <input type="radio" name="recommend" className="mr-2" /> No
          </label>
          <label className="flex items-center">
            <input type="radio" name="recommend" className="mr-2" /> Maybe
          </label>
        </div>
        
        {/* Languages & Frameworks Checkboxes */}
        <label className="block text-gray-700 mb-1">Which languages & frameworks do you know?</label>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> C
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> C++
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Java
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Python
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> JavaScript
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> React
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Angular
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Other
          </label>
        </div>
        
        {/* Comments Textarea */}
        <label className="block text-gray-700 mb-1">Any comments or suggestions?</label>
        <textarea 
          placeholder="Type here" 
          className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-blue-500" 
          rows="4"
        />
        
        {/* Submit Button */}
        <button className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 transition duration-200">
          Send Message
        </button>
      </div>
    );
  };
  
  export default SurveyForm;
  