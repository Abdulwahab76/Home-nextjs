export default function Heading({ children }) {
  return (
    <div className="relative pb-4">
      <h1 className="text-[18px] font-medium leading-[1.5em] tracking-normal relative pb-4 uppercase  text-[#356AA4]">
        {children}
        {/* Top bar */}
        <span className="absolute left-0 bottom-[3px] h-[5px] w-[55px] bg-primary-blue"></span>
        {/* Bottom bar */}
        <span className="absolute left-0 bottom-[2px] h-[1px] w-[40%]   bg-gray-400"></span>
      </h1>
    </div>
  );
}
