import Button from "./Button";
import Dropdown from "./Common/Dropdown";

const HeadUnits = () => {
  return (
    <section className="w-full h-full flex flex-1 justify-between items-start">
      <div>
        <span className="text-xl font-semibold text-btnTextPrimary">
          Unit No
        </span>
        <div className="flex flex-row items-center justify-start gap-2">
          <p className="text-base font-normal text-btnTextPrimary">Status</p>
          <Button title="Vacant" />
        </div>
      </div>
      <div>
        <Dropdown
          title="Actions"
          options={["Edit", "Delete", "Duplicate"]}
          onSelect={(option) => console.log("Selected:", option)}
        />
      </div>
    </section>
  );
};

export default HeadUnits;
