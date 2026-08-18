import { useState } from "react";
import "../Contact.css";

function Contact() {
    const [status, setStatus] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        setStatus("Sending...");

        try {
            const response = await fetch("YOUR_FORM_ENDPOINT_HERE", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                form.reset();
            } else {
                setStatus("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error(error);
            setStatus("Something went wrong. Please try again.");
        }
    }

    return (
        <section className="contact-section" id="contact">
            <div className="contact-card">
                <h2>Contact Me</h2>

                <p>
                    If you have a question don't hesitate to send an email!
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email address"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    <div className="form-group">
        <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Message"
            required
        ></textarea>
                    </div>

                    <button type="submit" className="contact-submit-btn">
                        Submit
                    </button>

                    {status && <p className="form-status">{status}</p>}
                </form>
            </div>
        </section>
    );
}

export default Contact;