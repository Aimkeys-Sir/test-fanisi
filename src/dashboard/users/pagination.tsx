import { Typography } from "../../stories"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import ReactPaginate from "react-paginate"

export default function Pagination({
  pages,
  current,
  handlePageChange
}: {
  pages: number
  current: number, 
  handlePageChange: (selected:number) => void
}) {
  return (
    <div className="sticky bottom-0 left-0 flex 2xl:mt-8 sm:mt-4 justify-between items-center text-lg text-black-3 border-t-2 border-white-1 p-4">
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <div className="flex items-center gap-2 ml-4">
            <Typography className="sm:hidden lg:block">Next</Typography>
            <FaArrowRight />
          </div>
        }
        onPageChange={({selected}) => handlePageChange(selected)}
        pageRangeDisplayed={2}
        pageCount={pages}
        forcePage={current-1}
        previousLabel={
          <div className="flex items-center gap-2 mr-4">
            <FaArrowLeft />
            <Typography className="sm:hidden lg:block">Previous</Typography>
          </div>
        }
        renderOnZeroPageCount={null}
        className="flex items-center justify-center mt-6 gap-4  grow"
        pageClassName="md:w-8 md:h-8 w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full text-gray-500 text-sm md:text-md"
        activeClassName="md:w-8 md:h-8 flex w-6 h-6 justify-center items-center bg-green-700 rounded-full text-white active text-sm md:text-md"
      />
    </div>
  )
}
