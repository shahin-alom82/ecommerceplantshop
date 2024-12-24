import Container from "../Container";

const Loaader = () => {
      return <Container className="py-80">
            <div className="flex items-center justify-center gap-4 text-2xl text-gray-700">
                  <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>

      </Container>;
};

export default Loaader;