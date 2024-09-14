export const LinkItem = ({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) => {
  return (
    <div className="flex items-center space-x-2" onClick={onClick}>
      <span className="text-gray-800 text-4xl hover:underline hover:decoration-red-500">
        {label}
      </span>
      <span className="text-red-500 text-5xl">›</span>
    </div>
  );
};
