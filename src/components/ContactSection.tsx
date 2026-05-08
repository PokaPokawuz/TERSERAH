import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useToast } from '@/hooks/use-toast';

type FormDataType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const { toast } = useToast();

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    // simulasi loading
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);

      toast({
        title: 'Message Sent',
        description: 'Your message has been delivered successfully!',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="
      relative py-24 overflow-hidden
      bg-gradient-to-b
      from-[#020617]
      via-[#020c1b]
      to-[#000814]
      "
    >
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* AURORA */}
        <div className="absolute top-[-120px] left-[-120px] w-[340px] h-[340px] bg-blue-500/20 blur-[150px] rounded-full" />

        <div className="absolute bottom-[-120px] right-[-120px] w-[340px] h-[340px] bg-cyan-400/20 blur-[150px] rounded-full" />

        <div className="absolute top-[20%] right-[10%] w-[260px] h-[260px] bg-purple-500/15 blur-[120px] rounded-full" />

        <div className="absolute bottom-[15%] left-[8%] w-[260px] h-[260px] bg-sky-400/10 blur-[120px] rounded-full" />

        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="
            text-sm font-semibold tracking-[0.3em]
            uppercase text-blue-400/80 mb-4
            "
          >
            CONTACT
          </p>

          <h2
            className="
            text-4xl md:text-5xl font-bold mb-5
            bg-gradient-to-r
            from-blue-400
            via-sky-300
            to-cyan-300
            bg-clip-text text-transparent
            "
          >
            Let&apos;s Build Something Amazing
          </h2>

          {/* LINE */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 120, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="
            relative h-[3px] mx-auto rounded-full overflow-hidden
            bg-gradient-to-r
            from-blue-500
            via-sky-400
            to-cyan-300
            "
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent
              via-white/40
              to-transparent
              "
            />
          </motion.div>

          <p
            className="
            text-gray-400
            max-w-2xl mx-auto mt-6 leading-relaxed
            "
          >
            Have an idea, project, or collaboration in mind?
            Feel free to reach out and let&apos;s create
            something meaningful together.
          </p>
        </motion.div>

        {/* CARD */}
        <div
          className="
          relative rounded-[32px]
          border border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          overflow-hidden
          shadow-[0_0_60px_rgba(56,189,248,0.08)]
          "
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-400/5" />

          <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12 relative z-10">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
              }}
              className="space-y-7"
            >
              <div>
                <h3
                  className="
                  text-3xl md:text-4xl font-bold mb-4
                  bg-gradient-to-r
                  from-blue-400
                  via-sky-300
                  to-cyan-300
                  bg-clip-text text-transparent
                  "
                >
                  Collaborate & Connect
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Whether it&apos;s a creative project,
                  portfolio collaboration, or simply sharing
                  ideas about technology and design —
                  I&apos;d love to hear from you.
                </p>
              </div>

              {/* EMAIL */}
              <a
                href="mailto:akufathirdinata@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                flex items-center gap-4
                group
                "
              >
                <div
                  className="
                  p-3 rounded-2xl
                  bg-blue-500/10
                  border border-blue-400/20
                  "
                >
                  <Mail className="text-blue-400 group-hover:scale-110 transition" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p
                    className="
                    font-medium text-gray-200
                    group-hover:text-blue-400
                    transition
                    "
                  >
                    akufathirdinata@gmail.com
                  </p>
                </div>
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div
                  className="
                  p-3 rounded-2xl
                  bg-cyan-500/10
                  border border-cyan-400/20
                  "
                >
                  <MapPin className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="font-medium text-gray-200">
                    Indonesia
                  </p>
                </div>
              </div>

              {/* TEXT */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="
                text-sm text-blue-400
                font-medium pt-4
                "
              >
                ✦ Turning ideas into digital experiences.
              </motion.p>
            </motion.div>

            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 80,
              }}
              className="
              relative overflow-hidden
              rounded-[28px]
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-6 md:p-7
              space-y-5
              "
            >

              {/* SUCCESS */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="
                    absolute inset-0 z-20
                    flex flex-col items-center justify-center
                    bg-[#020617]/90
                    backdrop-blur-xl
                    "
                  >
                    <CheckCircle className="w-16 h-16 text-cyan-400 mb-4 animate-bounce" />

                    <p
                      className="
                      text-3xl font-bold
                      bg-gradient-to-r
                      from-blue-400
                      via-sky-300
                      to-cyan-300
                      bg-clip-text text-transparent
                      "
                    >
                      Message Sent ✦
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="
                h-12 rounded-2xl
                bg-white/[0.04]
                border-white/10
                text-white
                placeholder:text-gray-500
                focus-visible:ring-2
                focus-visible:ring-blue-400
                "
              />

              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="
                h-12 rounded-2xl
                bg-white/[0.04]
                border-white/10
                text-white
                placeholder:text-gray-500
                focus-visible:ring-2
                focus-visible:ring-blue-400
                "
              />

              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="
                h-12 rounded-2xl
                bg-white/[0.04]
                border-white/10
                text-white
                placeholder:text-gray-500
                focus-visible:ring-2
                focus-visible:ring-blue-400
                "
              />

              <Textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="
                rounded-2xl
                bg-white/[0.04]
                border-white/10
                text-white
                placeholder:text-gray-500
                focus-visible:ring-2
                focus-visible:ring-blue-400
                "
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="
                w-full h-12 rounded-full
                bg-gradient-to-r
                from-blue-500
                via-sky-500
                to-cyan-400
                hover:scale-[1.02]
                transition-all duration-300
                shadow-[0_0_30px_rgba(56,189,248,0.25)]
                "
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.form>

          </div>
        </div>
      </div>
    </section>
  );
}