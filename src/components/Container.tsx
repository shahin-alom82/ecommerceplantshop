import { twMerge } from "tailwind-merge";

interface Props {
      className: string,
      children: React.ReactNode
}


const Container = ({ className, children }: Props) => {
      return (
            <div className={twMerge('max-w-screen-xl mx-auto lg:px-0 px-2', className)}>
                  {children}
            </div>
      );
};

export default Container;