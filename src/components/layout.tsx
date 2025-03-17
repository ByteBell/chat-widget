import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const Layout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-4">
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Dialog Box</DialogTitle>
            <DialogDescription>
              This is the dialog content that appears when you click the button.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 text-center font-medium">
            main content of widget
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Layout;
