"use client";
import { useState, useRef } from "react";
import { Form, Input, Button, Select, message, Row, Col } from "antd";
import emailjs from "@emailjs/browser";
import "antd/dist/reset.css";
import { countries } from "@/data/countries";
import toast from "react-hot-toast";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const enquiryTypes = [
    { value: "Business Enquiries / Request For Service", label: "Business Enquiries / Request For Service" },
    { value: "Employment and Careers", label: "Employment and Careers" },
    { value: "Marketing", label: "Marketing" },
    { value: "Sales", label: "Sales" },
    { value: "Partnerships", label: "Partnerships" },
    { value: "Others", label: "Others" },
  ];


  const formItems = [
    { name: "type_of_enquiry", label: "Type of Enquiry", type: "select", options: enquiryTypes, rules: [{ required: true, message: "Please select an enquiry type" }] },
    { name: "first_name", label: "First Name", type: "input", rules: [{ required: true, message: "Please enter your first name" }] },
    { name: "last_name", label: "Last Name", type: "input", rules: [{ required: true, message: "Please enter your last name" }] },
    { name: "organization", label: "Organization", type: "input" },
    { name: "job_title", label: "Job Title", type: "input" },
    { name: "country", label: "Country", type: "select", options: countries, rules: [{ required: true, message: "Please select your country" }] },
    { name: "phone_number", label: "Phone Number", type: "input", rules: [{ required: true, message: "Please enter your phone number" }] },
    { name: "message", label: "Message", type: "textarea", rules: [{ required: true, message: "Please write your message" }], fullSpan: true },
  ];

  // const sendMail = async (values) => {
  //   setLoading(true);
  //   console.log(values);
  //   const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  //   const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  //   const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;


  //   try {
  //     const res = await emailjs.send(
  //       serviceID, // Service ID
  //       templateID, // Template ID
  //       values, // Form reference
  //       userID 
  //     );

  //     if (res.status === 200) {
  //       message.success("Message Sent successfully!");

  //       console.log("Form values:", values);
  //     } else {
  //       // console.log('hjsadj');

  //       console.error("Oops! Message not sent!");
  //     }
  //   } catch (error) {
  //     console.error("EmailJS error:", error);
  //     message.error("Failed to send the message. Try again later.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const sendMail = (e) => {
  //   e.preventdefault();
  //   sendEmail()
  //   const serviceId = "service_4dxca8o";
  //   const templateId = "template_3hepcof";
  //   const publicKey = "cmpTX87NvOc7tGwfs";

  //   // Create a new object that contains dynamic template params
  //   const templateParams = {
  //     param1: value1,
  //     param2: value2,
  //     param3: value3,
  //     param4: value4,
  //     param5: value5,
  //   };

  //   // Send the email using EmailJS
  //   emailjs
  //     .send(serviceId, templateId, templateParams, publicKey)
  //     .then((response) => {
  //       console.log("Email sent successfully!", response);
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //     });
  // }

  const sendMail = async (values) => {
    setLoading(true);
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      const res = await emailjs.send(serviceID, templateID, values, userID);

      if (res.status === 200) {
        // console.log("Message sent successfully!");
        toast.success("Message Sent successfully!");
        form.resetFields();
      }
      else {
        toast.error("Failed to send the message. Try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again later.");
      // console.error("Failed to send message. Please try again later.", error);
    }
    finally {
      setLoading(false);
    }
  }

  const sendMailWithLambda = async (values) => {
    setLoading(true);
    const lambdaEndpoint = process.env.NEXT_PUBLIC_AWS_EMAIL_ENDPOINT;
    const toEmail = process.env.NEXT_PUBLIC_AWS_TO_EMAIL;

    try {
      const res = await fetch(lambdaEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          toEmail,
          subject: 'New Contact Us Form Submission',
          body: { ...values }
        })
      });

      if (res.ok) {
        toast.success("Message Sent successfully!");
        form.resetFields();
      } else {
        toast.error("Failed to send the message. Try again later.");
      }
    } catch (error) {
      toast.error("Something went wrong. Try again later.");
      console.error("Error in ",error);
      
    } finally {
      setLoading(false);
    }
  }




  return (
    <>
      <section className="">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-content">
              <div className="title-area">
                <h3 className="" style={{ padding: "0" }}>Ready to Get Started?</h3>
                <p>
                  Providing best-of-breed knowledge environment to enquire at{" "}
                  <a href="mailto:operations@dotsito.com" style={{ fontWeight: "bold" }} target="_blank">
                    operations@dotsito.com
                  </a>.
                </p>
                <p style={{ marginBottom: '0' }}>Need more information? </p>
                <p> We will take approximately 3-5 working days to respond to your enquiry.</p>
              </div>

              <br />
              <Form
                // ref={form}
                form={form}
                onFinish={sendMailWithLambda}
                layout="vertical"
                className="contact-form"
              >
                <Row gutter={16}>
                  {formItems.map((item) => (
                    <Col span={item.fullSpan ? 24 : 12} key={item.name}>
                      <Form.Item
                        name={item.name}
                        label={item.label}
                        rules={item.rules || []}
                      >
                        {item.type === "select" ? (
                          <Select
                            size="large"
                            placeholder={`Select ${item.label}`}
                            showSearch // Enables searching
                            optionFilterProp="children" // Filters options by their displayed text
                            filterOption={(input, option) =>
                              option?.children?.toLowerCase().includes(input.toLowerCase())
                            } // Custom filter logic
                          >
                            {item.options.map((option) => (
                              <Select.Option key={option.value} value={option.value}>
                                {option.label}
                              </Select.Option>
                            ))}
                          </Select>
                        ) : item.type === "textarea" ? (
                          <Input.TextArea size="large" rows={4} placeholder="Write your message" />
                        ) : (
                          <Input size="large" placeholder={`Enter your ${item.label.toLowerCase()}`} />
                        )}
                      </Form.Item>
                    </Col>
                  ))}
                </Row>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="submit-btn"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: auto;
          padding: 0 20px;
        }

        .contact-section {
          padding: 30px 0;
        }

        .title-area {
          margin-bottom: 20px;
        }

        .title-area h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .submit-btn {
          width: 100%;
        }

        @media (max-width: 768px) {
          .title-area h2 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .title-area h2 {
            font-size: 1.5rem;
          }

          .submit-btn {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}
