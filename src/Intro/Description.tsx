interface DescriptionProps {
  scale: number;
}

export const Description = ({ scale }: DescriptionProps) => {
  return (
    <div
      className="flex flex-col w-full h-full text-white justify-center items-center text-6xl mt-28"
      style={{ transform: `scale(${scale})` }}
    >
      <div>
        <span>A podcast about </span>
        <span className="font-semibold text-pink-600">developer tools</span>
      </div>
      <div>
        <span>and the </span>
        <span className="font-semibold text-blue-600">people</span>
        <span> who make them</span>
      </div>
    </div>
  );
};
