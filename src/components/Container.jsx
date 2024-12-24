import { twMerge } from "tailwind-merge";



const Container = ({ className, children }) => {
      return (
            <div className={twMerge('max-w-screen-xl mx-auto lg:px-0 px-4', className)}>
                  {children}
            </div>
      );
};

export default Container;