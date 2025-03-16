import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        {/* <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1> */}
        <h1 className="mb-4 text-2xl font-bold">
            <span className="bg-text-next">Contact </span> Us
          </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're here to help and answer any questions you might have. We look
          forward to hearing from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Cards */}
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="bg-text">Call Us</CardTitle>
            <CardDescription>Mon-Fri from 8am to 5pm</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg font-medium">Main Office</p>
            <a href="tel:+014972111" className="text-primary hover:underline">
            +977-01-4972111
            </a>
            <br/>
            <a href="tel:014950559" className="text-primary hover:underline">
            +977-01-4950559
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="bg-text">Email Us</CardTitle>
            <CardDescription>We'll respond within 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg font-medium">General Inquiries</p>
            <a
              href="mailto:info@hritacademy.edu.np"
              className="text-primary hover:underline"
            >
              info@hritacademy.edu.np
            </a>
            <br/>
            <a
              href="mailto:hritacademy.edu.np"
              className="text-primary hover:underline"
            >
              hritacademy.edu.np
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="bg-text">Visit Us</CardTitle>
            <CardDescription>School Hours</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg font-medium">Sunday - Friday</p>
            <p className="text-muted-foreground">8:00 AM - 3:30 PM</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6  bg-text">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-sm font-medium">
                  First Name
                </label>
                <Input id="firstName" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </label>
                <Input id="lastName" placeholder="Enter your last name" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiry" className="text-sm font-medium">
                Type of Inquiry
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admission">
                    Admission Information
                  </SelectItem>
                  <SelectItem value="academic">Academic Programs</SelectItem>
                  <SelectItem value="athletics">Athletics</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full bg-color">
              <Send className="w-4 h-4 mr-2" /> Send Message
            </Button>
          </form>
        </div>

        {/* Map and Address */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 bg-text">Our Location</h2>
            <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3473292818917!2d85.32679879999999!3d27.737431100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18dc8abf1601%3A0x1c43b16d37e5a66b!2sHrit%20Academy!5e0!3m2!1sen!2snp!4v1739630413403!5m2!1sen!2snp"
                width="600"
                height="450"
                className="w-full"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">School Address</p>
                  <p className="text-muted-foreground">
                  Basundhara Chauki, Kanti Marg, Kathmandu, Nepal
                   
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <Card>
            <CardHeader>
              <CardTitle>Additional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Admissions Office</h3>
                <p className="text-sm text-muted-foreground">
                  For enrollment inquiries: (123) 456-7891
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Athletics Department</h3>
                <p className="text-sm text-muted-foreground">
                  For sports programs: (123) 456-7892
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Emergency Contact</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 Security: (123) 456-7899
                </p>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
