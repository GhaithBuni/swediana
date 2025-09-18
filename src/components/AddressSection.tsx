import AccessSelect from "./AccessSelect";
import DistanceSlider from "./DistanceSlider";
import FloorSelect from "./FloorSelect";
import HomeTypeSelect from "./ui/HomeTypeSelect";

type Address = {
  homeType: HomeType;
  floor: Floor;
  access: Access;
  distance: number;
  postcode?: string;
};

const DEFAULT_ADDRESS: Address = {
  homeType: "lagenhet",
  floor: "1",
  access: "stairs",
  distance: 10,
};

type HomeType = "lagenhet" | "Hus" | "forrad" | "kontor";
type Floor = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10+";
type Access = "stairs" | "elevator" | "large-elevator";

export default function AddressSection({
  title,
  value,
  onChange,
  showDistance = true,
}: {
  title: string;
  value: Address;
  onChange: (next: Address) => void;
  showDistance?: boolean;
}) {
  return (
    <section aria-labelledby={`${title}-heading`} className="space-y-6">
      <h2 id={`${title}-heading`} className="text-2xl text-primary-foreground">
        {title}
      </h2>

      <div className="grid gap-6">
        <HomeTypeSelect
          value={value.homeType}
          onChange={(homeType: HomeType) => onChange({ ...value, homeType })}
        />

        <FloorSelect
          value={value.floor}
          onChange={(floor: Floor) => onChange({ ...value, floor })}
        />

        <AccessSelect
          value={value.access}
          onChange={(access: Access) => onChange({ ...value, access })}
        />

        {showDistance && (
          <DistanceSlider
            value={value.distance}
            onChange={(distance: number) => onChange({ ...value, distance })}
          />
        )}
      </div>
    </section>
  );
}
