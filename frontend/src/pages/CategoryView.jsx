import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { data } from "../assets/data/data";

function CategoryView() {
  const params = useParams();
  const [currentDataImages, setCurrentDataImages] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("");
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [draggedOverIndex, setDraggedOverIndex] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [newData, setNewData] = useState(
    JSON.parse(localStorage.getItem("images-data")) || data
  );

  const navigate = useNavigate();
  const dragItem = useRef();
  const dragItemNode = useRef();

  useEffect(() => {
    try {
      if (!params.id || !params.title) {
        navigate("/dashboard", { replace: true });
        return;
      }
      if (params.id > data.length) {
        navigate("/dashboard", { replace: true });
        return;
      }
      setSectionTitle(newData[params.id - 1].name);
      setCurrentDataImages(newData[params.id - 1].images);
    } catch (err) {
      navigate("/dashboard" , {replace:true});
      return;
    }

    document.title = params.title;
  }, [params.id, params.title, newData]);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    dragItem.current = index;
    dragItemNode.current = e.target;
    dragItemNode.current.style.opacity = "0.8";
    dragItemNode.current.style.transition = "all 0.3s linear";
    setTimeout(() => {
      e.target.style.transform = "scale(0.8)";
    }, 0);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setDraggedOverIndex(index);
  };

  const handleDragEnter = (e, index) => {
    e.preventDefault();
    if (dragItemNode.current !== e.target && draggedIndex !== null) {
      setCurrentDataImages((prevImages) => {
        const newImages = [...prevImages];
        const draggedImage = newImages[draggedIndex];
        newImages.splice(draggedIndex, 1);
        newImages.splice(index, 0, draggedImage);
        return newImages;
      });
      dragItem.current = index;
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDraggedOverIndex(null);
    dragItem.current = null;
    if (dragItemNode.current) {
      dragItemNode.current.style.opacity = "1";
      dragItemNode.current.style.transform = "scale(1)";
      data[params.id - 1].images = currentDataImages;
      localStorage.setItem("images-data", JSON.stringify(data));
    }
  };

  return (
    <div className="flex flex-col gap-y-6  pt-8 max-md:pt-6 max-vsm:pt-4 max-vvsm:pt-4 px-6 max-vsm:px-4 max-vvsm:px-2 py-4 overflow-y-hidden">
      <div className="text-center">
        <span className="text-3xl max-ssm:text-2xl max-vvsm:text-xl font-oswald font-bold text-center dark:text-gray-300 text-gray-800 tracking-wide">
          {sectionTitle.toUpperCase()}
        </span>
      </div>
      <div className="image-container flex w-full h-full justify-center place-items-center">
        <div className="images grid grid-cols-3 gap-4 xl:grid-cols-3 md:grid-cols-2 md:gap-4 sm:grid-cols-1 max-sm:flex max-sm:flex-col">
          {currentDataImages.map((image, index) => (
            <div
              key={image}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragEnd={handleDragEnd}
              className={`overflow-hidden rounded-md image-box max-w-[400px] max-h-[300px] object-fill cursor-grab active:cursor-grabbing transition-transform ${
                index === draggedIndex ? "dragging" : ""
              }`}
              style={{
                transform:
                  index === draggedIndex
                    ? `translateY(${index === draggedOverIndex ? "0" : "10px"})`
                    : "",
              }}
            >
              <img
                src={image}
                alt={`${params.title}-${index}`}
                className="w-full h-full object-fill hover:scale-105 transition-all rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryView;
