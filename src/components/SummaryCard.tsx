// SummaryCard.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CleaningIncludes from "@/components/CleaningIncludes";

export default function SummaryCard() {
  return (
    <aside className="sticky top-16 self-start w-full">
      {/* This wrapper makes the card + accordion share the same width and align to the right edge */}
      <div className="w-full md:max-w-sm md:ml-auto">
        <Card className="relative w-full bg-primary text-white rounded-[28px] overflow-hidden shadow-md">
          <div className="absolute inset-x-0 top-0 h-16 bg-primary/20" />

          <CardHeader className="relative flex flex-col items-center justify-center pt-8">
            <CardTitle className="text-2xl">Bokning uppgifter</CardTitle>
            <div className="w-40 border-b border-white/60 my-2" />
            <CardDescription className="text-lg text-white">
              Flytthjälp
            </CardDescription>
          </CardHeader>

          <CardContent className="relative divide-y divide-white/30">
            <div className="flex justify-between items-center py-2 px-4">
              <p>Extra Badrum</p>
              <p>300kr</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4">
              <p>Extra Toalett</p>
              <p>200kr</p>
            </div>
            <div className="flex justify-between items-center py-2 px-4">
              <p>Inglasad Duschhörna</p>
              <p>200kr</p>
            </div>

            <div className="flex items-center gap-2 py-6 px-4">
              <Input
                placeholder="Rabattskod"
                className="w-full bg-transparent text-white placeholder:text-white/80 ring-1 ring-white/50 rounded-full px-4"
              />
              <Button className="bg-[#95fff8] text-black px-4 rounded-lg">
                Använd
              </Button>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between items-center py-3 px-4 border-t border-white/30">
            <p>Totalt pris:</p>
            <p>2800kr</p>
          </CardFooter>
        </Card>

        {/* Accordion under the card, same width */}
        <CleaningIncludes />
      </div>
    </aside>
  );
}
