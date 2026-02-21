'use client';
type Props = {
  title: string;
  description: string;
  overlayColor: string;
  children: React.ReactNode;
};

function AuthCard({ title, description, overlayColor, children }: Props) {
  return (
    <div className="relative w-[474px]">
      <div
        className="absolute -right-3 -bottom-4 h-full w-full rounded-4xl"
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative w-[474px] rounded-4xl bg-white p-8 text-black">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="mt-1 text-[20px] font-medium">{description}</p>

        {children}
      </div>
    </div>
  );
}

export { AuthCard };
