import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='contact-section'>
    <div className='title'>
      <h1>Contact Us</h1>
    </div>
      <div className='form'>

      <Form onSubmit={handleSubmit}>
        <Form.Group className='form-group' controlId="formName">
          <Form.Label className='form-label'>Name</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='form-group' controlId="formEmail">
          <Form.Label className='form-label'>Email</Form.Label>
          <Form.Control 
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='form-group' controlId="formMessage">
          <Form.Label className='form-label'>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className='button' variant="outline-dark" type="submit"> Send </Button>
      </Form>

      </div> 
    </div>
  );
}

export default Contact;
