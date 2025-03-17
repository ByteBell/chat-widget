import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface LayoutProps {
  apiKey: string | null;
}

const Layout = ({ apiKey }: LayoutProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Mode ai</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[90vw] h-[90vh] flex flex-col p-2 sm:p-4 bg-white">
          <DialogHeader>
            <DialogTitle>Mode {apiKey}</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Layout;
