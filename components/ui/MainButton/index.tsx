interface IButton {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  styles?: string;
}

const MainButton = ({ children, styles }: IButton) => {
  return (
    <>
      <button className={`bg-blue-dark rounded-none p-3 text-white ${styles}`}>
        {children}
      </button>
    </>
  );
};

export default MainButton;
