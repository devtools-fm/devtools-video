import { ConsoleIcon } from "@devtools-ds/icon";

interface LogoProps {
  scale: number;
}
export const Logo = ({ scale }: LogoProps) => {
  return (
    <div
      className="flex text-white w-full h-full justify-center items-center text-9xl"
      style={{
        transform: `scale(${scale})`,
        marginTop: "-40px",
      }}
    >
      <div className="flex items-end">
        <span className="mr-3">devtools.fm</span>
        <ConsoleIcon className="mb-1" height="100px" width="100px" />
      </div>
    </div>
  );
};
