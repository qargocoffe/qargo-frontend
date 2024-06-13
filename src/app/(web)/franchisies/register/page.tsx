import { FranciseeForm } from "@/components/ui";

export default function RegisterFranchisiesPage() {
  return (
    <div className="px-6 py-8">
      <h3 className="mb-6 uppercase text-left tracking-widest text-lavazzaBlue text-lg font-semibold">Qargo Coffee <br />Pre-selection Contact Form</h3>
      <p className="text-gray mb-5"> Thank you for showing an interest in becoming a Qargo Coffee Franchisee! We’re looking for entrepreneurial, visionary and self-motivated franchisees to bring the future of coffee to life.</p>
      <p className="text-gray">
      We adapt to the market needs with stand-alone, kiosk or drive-thru locations. At Qargo Coffee, possibilities are endless.
      </p>
      <FranciseeForm />
    </div>
  );
}