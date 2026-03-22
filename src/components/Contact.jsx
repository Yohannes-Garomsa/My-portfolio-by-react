import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MotionSection,
  MotionH2,
  MotionP,
  MotionDiv,
  MotionButton,
  MotionSpan,
  MotionForm,
  MotionInput,
  MotionTextarea,
  MotionLabel,
  containerVariants,
  fadeInUpVariants,
  hoverVariants,
} from "../utils/motion";
import { site } from "../config/site";
import SocialLinks from "./SocialLinks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const body = `From: ${name} <${email}>\n\n${message}`;
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || "Portfolio contact",
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitted(true);
    window.setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      detail: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: "📱",
      title: "Phone",
      detail: site.phone,
      href: `tel:${site.phoneTel}`,
    },
    {
      icon: "📍",
      title: "Location",
      detail: site.location,
      href: site.locationMapsUrl,
    },
  ];

  return (
    <MotionSection
      id="contact"
      className="py-20 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <MotionDiv variants={fadeInUpVariants}>
              <MotionSpan
                className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/80 border border-white/20 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Get In Touch
              </MotionSpan>
            </MotionDiv>

            <MotionH2
              variants={fadeInUpVariants}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Let&apos;s{" "}
              <MotionSpan className="gradient-text" variants={fadeInUpVariants}>
                Work
              </MotionSpan>{" "}
              Together
            </MotionH2>

            <MotionP
              variants={fadeInUpVariants}
              className="text-lg text-white/80 leading-relaxed"
            >
              Have a project in mind or want to say hello? I&apos;d love to hear
              from you. Let&apos;s create something amazing together.
            </MotionP>

            <MotionDiv className="space-y-4" variants={fadeInUpVariants}>
              {contactInfo.map((info, index) => (
                <MotionDiv
                  key={index}
                  variants={fadeInUpVariants}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group border border-white/5"
                >
                  <div
                    className="w-12 h-12 shrink-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-xl group-hover:scale-105 transition-transform duration-300"
                    aria-hidden
                  >
                    {info.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white">{info.title}</h3>
                    <a
                      href={info.href}
                      target={
                        info.title === "Location" ? "_blank" : undefined
                      }
                      rel={
                        info.title === "Location"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-white/60 hover:text-white transition-colors duration-300 text-sm break-all"
                    >
                      {info.detail}
                    </a>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>

            <MotionDiv variants={fadeInUpVariants}>
              <h3 className="text-white font-semibold mb-3">Follow me</h3>
              <SocialLinks links={site.social} />
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <MotionDiv
              className="card p-8 border-white/15"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2 font-display">
                Send a message
              </h3>
              <p className="text-white/55 text-sm mb-6">
                Opens your email app with this message pre-filled — no backend
                required.
              </p>

              {isSubmitted && (
                <MotionDiv
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-emerald-500/15 border border-emerald-400/40 rounded-xl"
                  role="status"
                >
                  <p className="text-emerald-300 text-sm font-medium">
                    If your mail client opened, you&apos;re all set. If nothing
                    happened, email me directly at {site.email}.
                  </p>
                </MotionDiv>
              )}

              <MotionForm
                onSubmit={handleSubmit}
                className="space-y-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <MotionLabel
                      htmlFor="name"
                      variants={fadeInUpVariants}
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Your name
                    </MotionLabel>
                    <MotionInput
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/45 focus:outline-none focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300"
                      placeholder="Jane Doe"
                      required
                      autoComplete="name"
                      variants={fadeInUpVariants}
                    />
                  </div>
                  <div>
                    <MotionLabel
                      htmlFor="email"
                      variants={fadeInUpVariants}
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Email
                    </MotionLabel>
                    <MotionInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/45 focus:outline-none focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300"
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      variants={fadeInUpVariants}
                    />
                  </div>
                </div>

                <div>
                  <MotionLabel
                    htmlFor="subject"
                    variants={fadeInUpVariants}
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Subject
                  </MotionLabel>
                  <MotionInput
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/45 focus:outline-none focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300"
                    placeholder="Project collaboration"
                    required
                    variants={fadeInUpVariants}
                  />
                </div>

                <div>
                  <MotionLabel
                    htmlFor="message"
                    variants={fadeInUpVariants}
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Message
                  </MotionLabel>
                  <MotionTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/45 focus:outline-none focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300 resize-y min-h-[120px]"
                    placeholder="Tell me about timelines, stack, and goals…"
                    required
                    variants={fadeInUpVariants}
                  />
                </div>

                <MotionButton
                  type="submit"
                  whileHover="hover"
                  whileTap="tap"
                  variants={hoverVariants}
                  className="w-full btn-primary py-3.5 text-lg font-medium"
                >
                  Open in email app
                </MotionButton>
              </MotionForm>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
};

export default Contact;
