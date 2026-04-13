import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Phone, Mail } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().min(10, "Please briefly describe your project"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Request Sent Successfully!",
      description: "T&B Remodeling will get back to you shortly.",
      duration: 5000,
    });
    
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-card relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Get In Touch</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Let's Build <br /><span className="text-primary">Something Great</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Ready to start your remodeling project? Fill out the form to request a free, no-obligation quote. Brenda or Tito will contact you within 24 hours to discuss the details.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-wide text-lg">Call Us Directly</h4>
                  <a href="tel:4128790701" className="text-muted-foreground hover:text-primary transition-colors">412-879-0701</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-wide text-lg">Email Us</h4>
                  <a href="mailto:tandb7975@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">tandb7975@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-wide text-lg">Service Area</h4>
                  <p className="text-muted-foreground">Pittsburgh, PA & Surrounding Counties</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-background border-l-4 border-primary rounded-r-lg">
              <p className="font-display font-bold text-xl italic text-foreground tracking-wide uppercase">
                "T&B Got It Done!"
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background border border-border p-8 md:p-10 rounded-2xl shadow-xl relative"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-foreground mb-2">
                  Full Name
                </label>
                <input 
                  {...register("name")}
                  className={`w-full bg-card border ${errors.name ? 'border-destructive' : 'border-border focus:border-primary'} text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider text-foreground mb-2">
                    Phone Number
                  </label>
                  <input 
                    {...register("phone")}
                    className={`w-full bg-card border ${errors.phone ? 'border-destructive' : 'border-border focus:border-primary'} text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                    placeholder="(412) 555-0000"
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold uppercase tracking-wider text-foreground mb-2">
                    Email Address
                  </label>
                  <input 
                    {...register("email")}
                    className={`w-full bg-card border ${errors.email ? 'border-destructive' : 'border-border focus:border-primary'} text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-colors`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-foreground mb-2">
                  Project Type
                </label>
                <select 
                  {...register("projectType")}
                  className={`w-full bg-card border ${errors.projectType ? 'border-destructive' : 'border-border focus:border-primary'} text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-colors appearance-none`}
                >
                  <option value="">Select a service...</option>
                  <option value="kitchen">Kitchen Remodel</option>
                  <option value="bathroom">Bathroom Remodel</option>
                  <option value="flooring">Flooring</option>
                  <option value="drywall">Drywall / Walls</option>
                  <option value="painting">Painting</option>
                  <option value="decking">Decking</option>
                  <option value="concrete">Concrete</option>
                  <option value="other">Other / Multiple</option>
                </select>
                {errors.projectType && <p className="text-destructive text-sm mt-1">{errors.projectType.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold uppercase tracking-wider text-foreground mb-2">
                  Project Description
                </label>
                <textarea 
                  {...register("description")}
                  rows={4}
                  className={`w-full bg-card border ${errors.description ? 'border-destructive' : 'border-border focus:border-primary'} text-foreground rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none`}
                  placeholder="Tell us a little bit about what you want to achieve..."
                />
                {errors.description && <p className="text-destructive text-sm mt-1">{errors.description.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Request..." : "Request Free Quote"}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
