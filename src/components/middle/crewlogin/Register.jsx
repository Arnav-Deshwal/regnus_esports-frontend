// RegistrationForm.jsx
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error for the field being edited
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // Basic form validation logic
  const validate = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = 'Summoner name is required.';
    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters.';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!formData.terms) newErrors.terms = 'You must agree to the terms.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Logic for API submission goes here (e.g., axios.post('/api/register', formData))
      console.log('Registration Data Submitted:', formData);
      setIsSubmitted(true);
      // Reset form after successful submission if needed: setFormData(...)
    } else {
      console.log('Validation failed:', errors);
    }
  };

  return (
    // Base container uses the deep black background and centers the form
    <div className="flex items-center justify-center min-h-screen bg-[#0B090A] p-4">
      
      {/* Form Card */}
      <div className={`w-full max-w-md p-8 rounded-xl shadow-2xl transition duration-500 
                     bg-[#161A1D] border-t-4 ${isSubmitted ? 'border-green-500' : 'border-[#E5383B]'}`}>

        <h2 className="text-4xl font-black text-center mb-6 text-white uppercase">
          Join <span className="text-[#E5383B]">Regnus</span>
        </h2>
        <p className="text-center text-[#B1A7A6] mb-8">
          Create your account and begin your journey.
        </p>

        {isSubmitted && (
          <div className="bg-green-800 text-white p-4 rounded-lg mb-6 text-center">
            Registration successful! Welcome to the Realm.
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold text-[#F5F3F4] mb-2">
              Summoner Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full p-3 rounded-md bg-[#0B090A] text-white placeholder-gray-500 border-2 ${
                errors.username ? 'border-red-500' : 'border-[#660708] focus:border-[#E5383B]'
              } transition duration-200 focus:outline-none`}
              placeholder="Enter your in-game name"
              required
            />
            {errors.username && <p className="text-red-500 text-xs italic mt-1">{errors.username}</p>}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-[#F5F3F4] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-md bg-[#0B090A] text-white placeholder-gray-500 border-2 ${
                errors.email ? 'border-red-500' : 'border-[#660708] focus:border-[#E5383B]'
              } transition duration-200 focus:outline-none`}
              placeholder="user@example.com"
              required
            />
            {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold text-[#F5F3F4] mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 rounded-md bg-[#0B090A] text-white placeholder-gray-500 border-2 ${
                errors.password ? 'border-red-500' : 'border-[#660708] focus:border-[#E5383B]'
              } transition duration-200 focus:outline-none`}
              placeholder="Must be 8+ characters"
              required
            />
            {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-bold text-[#F5F3F4] mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 rounded-md bg-[#0B090A] text-white placeholder-gray-500 border-2 ${
                errors.confirmPassword ? 'border-red-500' : 'border-[#660708] focus:border-[#E5383B]'
              } transition duration-200 focus:outline-none`}
              placeholder="Re-enter password"
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs italic mt-1">{errors.confirmPassword}</p>}
          </div>
          
          {/* Terms Checkbox */}
          <div className="mb-6">
            <label className="flex items-center space-x-2 text-sm text-[#B1A7A6]">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className={`form-checkbox h-5 w-5 bg-transparent border-2 rounded ${
                  errors.terms ? 'border-red-500 text-red-500' : 'border-[#E5383B] text-[#E5383B]'
                } focus:ring-[#E5383B]`}
              />
              <span>
                I agree to the <a href="#terms" className="text-[#E5383B] hover:underline">Terms of Service</a>
              </span>
            </label>
            {errors.terms && <p className="text-red-500 text-xs italic mt-1">{errors.terms}</p>}
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#E5383B] hover:bg-[#A4161A] text-white font-bold py-3 rounded-md uppercase tracking-wider text-lg transition duration-300 transform hover:scale-[1.01]"
          >
            Create Regnus Account
          </button>
        </form>
        
        <p className="text-center text-[#B1A7A6] mt-6 text-sm">
          Already a warrior? <a href="#login" className="text-[#E5383B] hover:underline font-semibold">Log In Here</a>
        </p>

      </div>
    </div>
  );
};

export default RegistrationForm;