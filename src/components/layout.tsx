import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const Layout = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bgclass">
            Mode ai
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:!min-w-[90vw] !min-h-[90vh] flex flex-col p-2 sm:p-4 bg-white bgclass">
          <DialogHeader>
            <DialogTitle>Mode </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Layout;
