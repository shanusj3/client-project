"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Linkedin, Mail, Send, Loader2, MapPin } from "lucide-react";
import { content } from "@/app/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { cn } from "@/lib/utils";

const initialState = {
  message: "",
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl text-lg font-bold transition-all shadow-lg hover:shadow-primary/20" 
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          {content.contact.cta}
        </>
      )}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24 bg-card/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-[3rem] border border-black/5 p-8 md:p-16 lg:p-24 shadow-2xl relative overflow-hidden">
          {/* Decorative blurry shape */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            
            {/* Left Column */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="font-headline text-4xl md:text-6xl font-black tracking-tight text-black leading-tight">
                  {content.contact.title}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                  {content.contact.description}
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <div className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <MapPin className="w-6 h-6 text-black" />
                   </div>
                   <div className="space-y-1">
                      <p className="text-sm font-bold uppercase tracking-widest text-black/40">Location</p>
                      <p className="text-lg font-bold text-black">Ahmedabad, Gujarat, India</p>
                   </div>
                </div>

                <a href="mailto:rajeshsampat2016@gmail.com" className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail className="w-6 h-6 text-black" />
                   </div>
                   <div className="space-y-1">
                      <p className="text-sm font-bold uppercase tracking-widest text-black/40">Email</p>
                      <p className="text-lg font-bold text-black transition-colors group-hover:text-primary">rajeshsampat2016@gmail.com</p>
                   </div>
                </a>

                <a href="https://www.linkedin.com/in/rajeshsampat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                   <div className="w-14 h-14 bg-card rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Linkedin className="w-6 h-6 text-black" />
                   </div>
                   <div className="space-y-1">
                      <p className="text-sm font-bold uppercase tracking-widest text-black/40">LinkedIn</p>
                      <p className="text-lg font-bold text-black transition-colors group-hover:text-primary">/in/rajeshsampat</p>
                   </div>
                </a>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card/30 p-8 md:p-12 rounded-[2.5rem] border border-black/5">
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                  <Input 
                    type="text" 
                    name="name" 
                    placeholder="Your Full Name" 
                    className="h-14 bg-white rounded-xl border-black/5 focus:ring-primary focus:border-primary px-6 text-lg" 
                    required
                  />
                  {state.errors?.name && <p className="text-destructive text-sm px-2 font-medium">{state.errors.name[0]}</p>}
                </div>
                
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    className="h-14 bg-white rounded-xl border-black/5 focus:ring-primary focus:border-primary px-6 text-lg" 
                    required
                  />
                  {state.errors?.email && <p className="text-destructive text-sm px-2 font-medium">{state.errors.email[0]}</p>}
                </div>

                <div className="space-y-2">
                  <Textarea 
                    name="message" 
                    placeholder="How can we help?" 
                    rows={4} 
                    className="bg-white rounded-xl border-black/5 focus:ring-primary focus:border-primary px-6 py-4 text-lg" 
                    required
                  />
                  {state.errors?.message && <p className="text-destructive text-sm px-2 font-medium">{state.errors.message[0]}</p>}
                </div>

                <SubmitButton />
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
