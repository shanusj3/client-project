"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Linkedin, Mail, SendHorizontal, Loader2, MapPin, Phone, Clock, Lock } from "lucide-react";
import { content } from "@/app/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
      className="w-full h-14 bg-[#0A2540] text-white hover:bg-[#0A2540]/90 rounded-xl text-xs font-black uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-[#0A2540]/20 flex items-center justify-center gap-3" 
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          SENDING...
        </>
      ) : (
        <>
          <SendHorizontal className="h-4 w-4" />
          SEND MESSAGE
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
    <section id="contact" className="relative bg-[#F8FAFC]">
      <div className="flex flex-col lg:flex-row min-h-[850px]">
        
        {/* Left Column: Dark Branding & Info */}
        <div className="relative w-full lg:w-1/2 min-h-[600px] bg-[#0A2540] flex items-center justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
          {/* Industrial Background Overlay */}
          <div className="absolute inset-0 z-0">
             <Image 
                src="/hero/industrial-full.jpg" 
                alt="SESIL Industrial"
                fill
                className="object-cover opacity-20 mix-blend-overlay"
             />
             <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540]/95 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-xl space-y-16">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="h-px w-6 bg-secondary" />
                   <span className="text-secondary font-black uppercase tracking-[0.2em] text-[10px]">GET IN TOUCH</span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-[1.1] max-w-md">
                   Let's Build Something <span className="text-white">Great</span>
                </h2>
                <div className="h-1.5 w-24 bg-secondary/80 rounded-full" />
              </div>
              <p className="text-lg text-white/60 leading-relaxed max-w-md">
                 Have a project in mind or exploring opportunities in India? Our team is here to help you take the next step.
              </p>
            </div>

            <div className="space-y-10 pt-4 max-w-lg">
              <div className="group flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#1A3A5A] flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-500">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary/80">LOCATION</p>
                  <p className="text-xl font-bold text-white tracking-tight">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="group flex items-start gap-8">
                <div className="w-14 h-14 rounded-full bg-[#1A3A5A] flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-500">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary/80">EMAIL</p>
                  <p className="text-xl font-bold text-white tracking-tight group-hover:text-secondary transition-colors">contact@sesil.in</p>
                </div>
              </div>

              <div className="group flex items-start gap-8 border-b border-white/5 pb-10">
                <div className="w-14 h-14 rounded-full bg-[#1A3A5A] flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors duration-500">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-secondary/80">LINKEDIN</p>
                  <p className="text-xl font-bold text-white tracking-tight group-hover:text-secondary transition-colors">LinkedIn Profile</p>
                </div>
              </div>
            </div>

            {/* Bottom Contact Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4">
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                     <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-0.5">
                     <p className="text-[9px] font-black text-secondary/80 uppercase">Prefer to talk?</p>
                     <p className="text-sm font-bold text-white">{content.contact.phone}</p>
                  </div>
               </div>
               <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                     <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="space-y-0.5">
                     <p className="text-[9px] font-black text-secondary/80 uppercase">BUSINESS HOURS</p>
                     <p className="text-sm font-bold text-white">Mon – Fri: 9:30 AM – 6:30 PM</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Card */}
        <div className="relative w-full lg:w-1/2 bg-white lg:bg-transparent flex items-center justify-center lg:justify-start p-6 md:p-12 lg:p-24 lg:-ml-16 z-20">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-black/[0.03] p-8 md:p-16 space-y-10 md:space-y-12 animate-in fade-in slide-in-from-right duration-1000">
             <div className="space-y-3">
                <h3 className="text-3xl font-black tracking-tighter text-black">Send Us a Message</h3>
                <p className="text-black/50 text-sm">Fill out the form below and we'll get back to you shortly.</p>
             </div>

             <form ref={formRef} action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <Input 
                        type="text" 
                        name="name" 
                        placeholder="Your Full Name" 
                        className="h-14 bg-slate-50 rounded-xl border-black/5 focus:ring-secondary focus:border-secondary px-6 text-sm font-medium" 
                        required
                      />
                      {state.errors?.name && <p className="text-destructive text-[10px] px-2 font-bold">{state.errors.name[0]}</p>}
                   </div>
                   <div className="space-y-2">
                      <Input 
                        type="text" 
                        name="company" 
                        placeholder="Company Name" 
                        className="h-14 bg-slate-50 rounded-xl border-black/5 focus:ring-secondary focus:border-secondary px-6 text-sm font-medium" 
                      />
                   </div>
                </div>
                
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address" 
                    className="h-14 bg-slate-50 rounded-xl border-black/5 focus:ring-secondary focus:border-secondary px-6 text-sm font-medium" 
                    required
                  />
                  {state.errors?.email && <p className="text-destructive text-[10px] px-2 font-bold">{state.errors.email[0]}</p>}
                </div>

                <div className="space-y-2">
                  <Input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number" 
                    className="h-14 bg-slate-50 rounded-xl border-black/5 focus:ring-secondary focus:border-secondary px-6 text-sm font-medium" 
                  />
                </div>

                <div className="space-y-2">
                  <Textarea 
                    name="message" 
                    placeholder="How can we help you?" 
                    rows={5} 
                    className="bg-slate-50 rounded-xl border-black/5 focus:ring-secondary focus:border-secondary px-6 py-4 text-sm font-medium min-h-[160px]" 
                    required
                  />
                  {state.errors?.message && <p className="text-destructive text-[10px] px-2 font-bold">{state.errors.message[0]}</p>}
                </div>

                <SubmitButton />
             </form>

             <div className="flex items-center justify-center gap-3 pt-4 opacity-50">
                <Lock className="w-3 h-3" />
                <p className="text-[10px] font-bold">We respect your privacy. Your information is safe with us.</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
