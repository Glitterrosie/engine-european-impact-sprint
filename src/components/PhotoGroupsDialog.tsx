import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PhotoGroupsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PHOTO_GROUPS = [
  {
    id: 1,
    name: "Beach Vacation 2024",
    photos: [
      { id: 1, color: "#93C5FD" },
      { id: 2, color: "#60A5FA" },
      { id: 3, color: "#3B82F6" },
      { id: 4, color: "#93C5FD" },
    ],
  },
  {
    id: 2,
    name: "Birthday Party",
    photos: [
      { id: 5, color: "#FBBF24" },
      { id: 6, color: "#F59E0B" },
      { id: 7, color: "#FBBF24" },
      { id: 8, color: "#F59E0B" },
      { id: 9, color: "#FBBF24" },
    ],
  },
  {
    id: 3,
    name: "Mountain Hiking",
    photos: [
      { id: 10, color: "#34D399" },
      { id: 11, color: "#10B981" },
      { id: 12, color: "#34D399" },
    ],
  },
  {
    id: 4,
    name: "City Trip",
    photos: [
      { id: 13, color: "#F472B6" },
      { id: 14, color: "#EC4899" },
      { id: 15, color: "#F472B6" },
      { id: 16, color: "#EC4899" },
    ],
  },
];

export const PhotoGroupsDialog = ({ open, onOpenChange }: PhotoGroupsDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[120px] p-2">
        <DialogHeader>
          <DialogTitle className="text-xs">Photos</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[150px]">
          <div className="space-y-2">
            {PHOTO_GROUPS.map((group) => (
              <div key={group.id}>
                <div className="grid grid-cols-3 gap-1">
                  {group.photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="aspect-square rounded shadow-sm transition-transform hover:scale-105 cursor-pointer"
                      style={{ backgroundColor: photo.color }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
