import emailjs from '@emailjs/browser';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'amartyanayan397@gmail.com',
      },
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    );

    if (response.status === 200) {
      return true;
    }
    throw new Error('Failed to send email');
  } catch (error) {
    console.error('Email send error:', error);
    throw error;
  }
};