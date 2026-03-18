import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface LeadFormProps {
  title?: string;
  description?: string;
  defaultEventType?: string;
  onSubmit?: (data: LeadFormData) => void;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

export default function LeadForm({
  title = "Get in Touch",
  description = "Tell us about your event and we'll be in touch within 24 hours.",
  defaultEventType = "",
  onSubmit,
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: "",
    email: "",
    phone: "",
    eventType: defaultEventType,
    eventDate: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      eventType: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.eventType) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // For now, just show a success message
      // In a real app, this would send to a backend API
      if (onSubmit) {
        onSubmit(formData);
      } else {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Thank you! We'll be in touch within 24 hours.");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: defaultEventType,
        eventDate: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {title && <h2 className="text-3xl font-bold mb-2 text-primary">{title}</h2>}
      {description && <p className="text-foreground/70 mb-8">{description}</p>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(251) 333-7368"
            required
            className="w-full"
          />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="block text-sm font-semibold text-foreground mb-2">
            Event Type *
          </label>
          <Select value={formData.eventType} onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="engagement">Engagement Party</SelectItem>
              <SelectItem value="bridal">Bridal Shower</SelectItem>
              <SelectItem value="baby">Baby Shower</SelectItem>
              <SelectItem value="birthday">Birthday Party</SelectItem>
              <SelectItem value="anniversary">Anniversary Celebration</SelectItem>
              <SelectItem value="reunion">Reunion</SelectItem>
              <SelectItem value="corporate">Corporate Event</SelectItem>
              <SelectItem value="retreat">Corporate Retreat</SelectItem>
              <SelectItem value="meeting">Business Meeting</SelectItem>
              <SelectItem value="holiday">Holiday Party</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-semibold text-foreground mb-2">
            Preferred Event Date
          </label>
          <Input
            id="eventDate"
            name="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
            Tell Us About Your Event
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details about your event, guest count, vision, etc."
            rows={5}
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary text-secondary-foreground hover:opacity-90 font-semibold py-3 text-base"
        >
          {isSubmitting ? "Sending..." : "Request Information"}
        </Button>

        <p className="text-xs text-foreground/60 text-center">
          We'll respond to your inquiry within 24 hours. You can also call us at{" "}
          <a href="tel:251-333-7368" className="font-semibold text-secondary hover:underline">
            251-333-RENT
          </a>
        </p>
      </form>
    </div>
  );
}
