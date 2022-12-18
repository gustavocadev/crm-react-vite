type Props = {
  children: React.ReactNode;
  key: number;
};
const Error = ({ children, key }: Props) => {
  return (
    <div
      className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase"
      key={key}
    >
      {children}
    </div>
  );
};
export default Error;
