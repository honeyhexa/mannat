import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const PublishScript = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="rounded-md border border-black bg-black px-4 py-2 gap-4 text-sm font-medium text-white transition-all duration-75 hover:bg-white hover:text-black active:scale-95"
          variant="outline"
        >
          Publish Script
          <kbd className="hidden rounded bg-zinc-700 px-2 py-0.5 text-xs font-light text-gray-400 transition-all duration-75 group-hover:bg-gray-100 group-hover:text-gray-500 md:inline-block">
            P
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Publish Script</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="The Godfather"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="genres" className="text-right">
              Genres
            </Label>
            <Input
              id="genres"
              placeholder="Action, Drama"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="script" className="text-right">
              Script File
            </Label>
            <Input id="script" type="file" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="private" className="text-right">
              Private
            </Label>
            <Switch className="col-span-3" id="private" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Publish Script</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PublishScript;
