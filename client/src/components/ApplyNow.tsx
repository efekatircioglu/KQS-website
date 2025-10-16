import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ApplyNowProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

const ApplyNow: React.FC<ApplyNowProps> = ({ isOpen, onClose, jobTitle }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: jobTitle || '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset form when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        subject: jobTitle || '',
        message: ''
      });
      setErrors({});
      setIsSubmitted(false);
    }
  }, [isOpen, jobTitle]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation - REQUIRED
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    }

    // Email validation - REQUIRED
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation - Auto-filled, should always be present
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation - Optional, no length restriction
    // No validation needed for optional message field

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      
      // Close modal after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            {jobTitle ? `Apply for ${jobTitle}` : 'Apply Now'}
          </DialogTitle>
          <DialogDescription className="text-center">
            {jobTitle 
              ? `Join our team as a ${jobTitle} and be part of the Kings Quant Society.`
              : 'Join the Kings Quant Society and be part of our community of quantitative finance enthusiasts.'
            }
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-6">
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                <strong>Application submitted successfully!</strong>
                <br />
                Thank you for your interest in joining KQS. We'll review your application and get back to you soon.
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          <div className="py-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name * <span className="text-red-500">(Required)</span></Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <Alert className="border-red-200 bg-red-50 p-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 text-sm">
                  {errors.name}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address * <span className="text-red-500">(Required)</span></Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <Alert className="border-red-200 bg-red-50 p-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 text-sm">
                  {errors.email}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Subject Field */}
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              readOnly
              className={`${errors.subject ? 'border-red-500' : ''} bg-gray-50 cursor-not-allowed`}
            />
            {errors.subject && (
              <Alert className="border-red-200 bg-red-50 p-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 text-sm">
                  {errors.subject}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message">Message <span className="text-gray-500">(Optional)</span></Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about yourself, your interests in quantitative finance, and why you'd like to join KQS..."
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? 'border-red-500' : ''}
              rows={6}
            />
            {errors.message && (
              <Alert className="border-red-200 bg-red-50 p-2">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 text-sm">
                  {errors.message}
                </AlertDescription>
              </Alert>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting || !formData.name.trim() || !formData.email.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </>
            )}
          </Button>

            
          </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplyNow;
