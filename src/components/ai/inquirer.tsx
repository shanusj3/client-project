"use client";

import { useState, useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Bot, Send, Loader2, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getAIResponse } from "@/app/actions";
import { siteContent, content } from "@/app/lib/content";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type Message = {
  role: "user" | "ai";
  content: string;
};

const initialState: { answer: string; error?: string } = {
  answer: "",
};

export default function AIInquirer() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const aiAction = async (prevState: any, formData: FormData) => {
    const query = formData.get("query") as string;
    if (!query) return initialState;
    setMessages((prev) => [...prev, { role: "user", content: query }]);
    const answer = await getAIResponse(query, siteContent);
    setMessages((prev) => [...prev, { role: "ai", content: answer }]);
    return { answer };
  };
  
  const [state, formAction] = useFormState(aiAction, initialState);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);
  
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
        size="icon"
        onClick={() => setOpen(true)}
        aria-label="Open AI Inquirer"
      >
        <Bot className="h-8 w-8" />
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="flex flex-col w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle className="font-headline text-2xl flex items-center gap-2">
              <Sparkles className="text-primary w-6 h-6" />
              Ask about {content.name}
            </SheetTitle>
            <SheetDescription>
              This AI can answer questions about {content.name}'s profile.
            </SheetDescription>
          </SheetHeader>
          <ScrollArea className="flex-1 pr-4 -mr-6" ref={scrollAreaRef}>
            <div className="space-y-6 p-1">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === "user" ? "justify-end" : ""
                  )}
                >
                  {message.role === "ai" && (
                     <Avatar className="w-8 h-8 border border-primary/50">
                        <AvatarFallback className="bg-accent text-accent-foreground">
                            <Bot className="w-5 h-5" />
                        </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "rounded-lg p-3 max-w-sm text-sm",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border"
                    )}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                   {message.role === "user" && (
                     <Avatar className="w-8 h-8 border">
                        <AvatarFallback>
                            <User className="w-5 h-5" />
                        </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
               {messages.length === 0 && (
                <div className="text-center text-sm text-muted-foreground p-8">
                  <p>e.g., What is his main expertise?</p>
                </div>
              )}
            </div>
          </ScrollArea>
          <SheetFooter>
            <form action={(formData) => {
              formAction(formData);
              formRef.current?.reset();
            }} ref={formRef} className="w-full flex items-center gap-2">
              <Input
                name="query"
                placeholder="Ask a question..."
                className="flex-1"
                autoComplete="off"
                required
              />
              <SubmitButton />
            </form>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" aria-label="Send message" disabled={pending} className="bg-accent text-accent-foreground">
      {pending ? (
        <Loader2 className="h-5 w-5 animate-spin" />
      ) : (
        <Send className="h-5 w-5" />
      )}
    </Button>
  );
}
