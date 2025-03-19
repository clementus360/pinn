"use client";

import React, { useState } from "react";
import { send } from "@emailjs/browser";
import { TextInput, Button, ContactTag } from "..";

interface ContactLink {
    title: string;
    type: "email" | "phone" | "address";
    link: string;
}

interface ContactFormProps {
    contactLinks: ContactLink[];
}

export const ContactForm: React.FC<ContactFormProps> = ({ contactLinks }) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate form fields
    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: "", email: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission manually
    const handleSubmit = async () => {
        if (!validateForm()) {
            return;
        }

        setStatus("loading");

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
        const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;

        try {
            await send(serviceId, templateId, formData, userId);
            setStatus("success");
            setFormData({ name: "", company: "", email: "", message: "" }); // Reset form
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("error");
        }
    };

    return (
        <div className="bg-primary flex flex-col gap-8 px-4 md:px-8 py-8 w-full h-full rounded-4xl text-white">
            <h2 className="md:w-10/12 text-center md:text-start text-2xl md:text-4xl font-medium">
                Say Hello, We’re Listening!
            </h2>

            <div className="flex flex-col">
                <TextInput
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Full name*"
                    value={formData.name}
                    onChange={handleChange}
                    errorMessage={errors.name}
                />
                <div className="flex flex-col md:flex-row gap-4">
                    <TextInput
                        label="Company name"
                        type="text"
                        name="company"
                        placeholder="Company name"
                        value={formData.company}
                        onChange={handleChange}
                    />
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleChange}
                        errorMessage={errors.email}
                    />
                </div>
                <TextInput
                    label="Message"
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    errorMessage={errors.message}
                />
            </div>

            <Button
                variant={"tertiary"}
                className="w-full mt-8"
                onClick={handleSubmit}
                disabled={status === "loading"}
            >
                {status === "loading" ? (
                    <>
                        <span className="animate-spin">🔄</span> Sending...
                    </>
                ) : (
                    "Contact Us"
                )}
            </Button>

            {status === "success" && <p className="text-green-400 text-sm mt-2">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-400 text-sm mt-2">Failed to send message. Try again.</p>}

            <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full justify-between">
                {contactLinks.map((link, index) => (
                    <ContactTag key={index} title={link.title} type={link.type} link={link.link} />
                ))}
            </div>
        </div>
    );
};
