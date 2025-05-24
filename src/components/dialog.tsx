'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router';

export default function CenteredDialog() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="dialog fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <DialogHeader>
          <DialogTitle>Enquiry Open</DialogTitle>
          <DialogDescription>
            Enroll Now to Book Your Seat Earlier.
          </DialogDescription>
        </DialogHeader>
        <Link to="/admission-form" className="py-4">
          <img src="/banner/popup-banner.jpg" alt="admission-open" className="w-full h-auto" />
        </Link>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
