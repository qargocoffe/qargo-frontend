import { FranciseeForm } from "@/components/ui";

export default function RegisterFranchisiesPage() {
  return (
    <div className="px-8 py-8 lg:w-desktop lg:m-auto ">
      <h3 className="mb-6 mt-12 md:mb-6 uppercase text-left tracking-widest text-lavazzaBlue text-lg font-semibold md:text-2xl md:text-center">Qargo Coffee <br />Pre-selection Contact Form</h3>
      <p className="text-gray mb-5 md:text-lg md:m-auto md:w-2/3 md:text-center"> Thank you for showing an interest in becoming a Qargo Coffee Franchisee! We’re looking for entrepreneurial, visionary and self-motivated franchisees to bring the future of coffee to life.</p>
      <p className="text-gray mb-10 md:text-lg md:m-auto md:w-2/3 md:mt-5 md:text-center">
      We adapt to the market needs with stand-alone, kiosk or drive-thru locations. At Qargo Coffee, possibilities are endless.
      </p>
      <FranciseeForm />
    </div>
  );
}