import { useState } from 'react';
import './RegistrationForm.css';

/**
 * RegistrationForm Component
 * Handles user registration with validation
 */
function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    numberOfGuests: '',
    specialNote: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Phone Number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      const phoneRegex = /^[\d\s\-+()]{10,}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Please enter a valid phone number';
      }
    }

    // Number of Guests validation
    if (!formData.numberOfGuests) {
      newErrors.numberOfGuests = 'Number of guests is required';
    } else if (isNaN(formData.numberOfGuests) || parseInt(formData.numberOfGuests) < 1) {
      newErrors.numberOfGuests = 'Please enter a valid number (minimum 1)';
    } else if (parseInt(formData.numberOfGuests) > 50) {
      newErrors.numberOfGuests = 'Maximum 50 guests allowed';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Set loading state
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Log form data (for development/testing)
      console.log('Form submitted successfully:', formData);
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          numberOfGuests: '',
          specialNote: ''
        });
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="registration section" id="registration">
      <div className="container">
        <h2 className="section-title">Register With Us</h2>
        <p className="section-subtitle">
          Fill out the form below to join us for upcoming events and activities
        </p>

        <div className="registration-container">
          <form onSubmit={handleSubmit} className="registration-form" noValidate>
            {/* Full Name Field */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`form-input ${errors.fullName ? 'error' : ''}`}
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                aria-required="true"
                aria-invalid={errors.fullName ? 'true' : 'false'}
                aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              />
              {errors.fullName && (
                <span className="error-message" id="fullName-error" role="alert">
                  {errors.fullName}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <span className="error-message" id="email-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            {/* Phone Number Field */}
            <div className="form-group">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+233 XX XXX XXXX"
                aria-required="true"
                aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                aria-describedby={errors.phoneNumber ? 'phoneNumber-error' : undefined}
              />
              {errors.phoneNumber && (
                <span className="error-message" id="phoneNumber-error" role="alert">
                  {errors.phoneNumber}
                </span>
              )}
            </div>

            {/* Number of Guests Field */}
            <div className="form-group">
              <label htmlFor="numberOfGuests" className="form-label">
                Number of Guests <span className="required">*</span>
              </label>
              <input
                type="number"
                id="numberOfGuests"
                name="numberOfGuests"
                className={`form-input ${errors.numberOfGuests ? 'error' : ''}`}
                value={formData.numberOfGuests}
                onChange={handleChange}
                placeholder="1"
                min="1"
                max="50"
                aria-required="true"
                aria-invalid={errors.numberOfGuests ? 'true' : 'false'}
                aria-describedby={errors.numberOfGuests ? 'numberOfGuests-error' : undefined}
              />
              {errors.numberOfGuests && (
                <span className="error-message" id="numberOfGuests-error" role="alert">
                  {errors.numberOfGuests}
                </span>
              )}
            </div>

            {/* Special Note Field */}
            <div className="form-group">
              <label htmlFor="specialNote" className="form-label">
                Special Note (Optional)
              </label>
              <textarea
                id="specialNote"
                name="specialNote"
                className="form-textarea"
                value={formData.specialNote}
                onChange={handleChange}
                placeholder="Any special requirements or notes..."
                rows="4"
                aria-describedby="specialNote-description"
              />
              <span className="field-description" id="specialNote-description">
                Share any dietary restrictions, accessibility needs, or other information
              </span>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : (
                'Register Now'
              )}
            </button>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="status-message success" role="alert">
                <span className="status-icon">✓</span>
                Registration successful! We look forward to seeing you.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error" role="alert">
                <span className="status-icon">✕</span>
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
