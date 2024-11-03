import { FaShareAlt, FaRegBookmark, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, name, image_url, rating, total_view, author, description } =
    news;

  return (
    <div>
      <div>
        <div>
          <div className="card-body items-center text-center">
            <p className="card-title">{name}</p>
            <p>{author}</p>
            <img src={image_url} className="rounded-md px-3" />
            {description.length > 200 ? (
              <p className="text-sm text-gray-400 text-justify py-3 px-8">
                {description.slice(0, 200)}
                <Link
                  to={`/news/${_id}`}
                  className="text-blue-600 underline font-bold text-lg"
                >
                  Read More...
                </Link>
              </p>
            ) : (
              <p className="text-sm text-gray-400 text-justify py-3 px-8">
                {description}
              </p>
            )}
            <p className="card-actions">
              {" "}
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Buy Now
              </button>{" "}
            </p>
          </div>

          {/* Card Footer */}
          <div className="flex justify-between items-center bg-slate-800 py-4 px-8 border border-gray-700 mt-2 rounded-tr-md rounded-bl-md">
            <div className="flex">
              <FaStar size={25} color="orange" />
              <span className="ml-2">{rating.number}</span>
              <span className="ml-2">{rating.badge}</span>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <h3 className="py-4">
            Item Added to Cart Succesfully!
          </h3>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default NewsCard;
