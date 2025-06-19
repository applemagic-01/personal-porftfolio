"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '+91 7899463238'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'ankithpoojary0309@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Moodbidri, Dakshina Kannada 574227'
    },
]

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="py-6 "
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px] ">
                    { /* form*/}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-16 bg-[#27272c] rounded-xl"
                            name="submit-to-google-sheet"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-4xl text-accent">Contact me</h3>
                            <p className="text-white/60">Fill up the following details to contact me</p>

                            {/* Input Fields with Name Attributes */}
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <Input type="text" name="firstname" placeholder="Name" required />
                                <Input type="text" name="lastname" placeholder="Lastname" required />
                                <Input type="email" name="email" placeholder="Email address" required />
                                <Input type="text" name="phone" placeholder="Phone Number" required />
                            </div>

                            {/* Textarea */}
                            <Textarea className="h-[200px]" name="Message" placeholder="Type your message here." required />

                            {/* Submit Button */}
                            <Button size="md" className="max-w-40" type="submit">
                                Send message
                            </Button>
                        </form>

                        {/* Success Message */}
                        <p id="msg" className="mt-4 text-green-500"></p>

                    </div>
                    { /* info*/}
                    <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0 ">
                        <ul className="flex flex-col gap-10 ">{info.map((item, index) => {
                            return <li key={index} className="flex items-center gap-6 ">
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                    <div className="text-[28px]">{item.icon}</div>
                                </div>
                                <div className="flex-1 ">
                                    <p className="text-white/60">{item.title}</p>
                                    <h3 className="text-xl">{item.description}</h3>
                                </div>
                            </li>
                        })}</ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
const scriptURL =
    "https://script.google.com/macros/s/AKfycbxhzloBieTeWIv5uHszSi753y8zfb39_BIte0c19GGQFxfcF9xnEAqJeS3TFAcxCqJE/exec";

const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(scriptURL, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            document.getElementById("msg").innerText = "Message sent successfully!";
            setTimeout(() => {
                document.getElementById("msg").innerText = "";
            }, 3000);
            form.reset();
        } else {
            document.getElementById("msg").innerText = "Failed to send message.";
        }
    } catch (error) {
        console.error("Error!", error.message);
        document.getElementById("msg").innerText = "Error sending message.";
    }
};

export default Contact