
const Modal = ({ isOpen, children }) => {
      if (!isOpen) return null;

      return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white  w-[1000px] h-[400px] relative">
                        {children}
                  </div>

            </div >
      );
};

export default Modal;
