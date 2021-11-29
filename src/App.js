import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./gallerySlice";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);
  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>This is a photo gallery made using redux toolkit and redux thunk.</p>
      <hr />
      <div className="Gallery">
        {photos.data.map((photo) => {
          return (
            <img
              width="400"
              height="400"
              src={photo.download_url}
              key={photo.id}
              alt={photo.author}
            />
          );
        })}
      </div>
      <button>View More</button>
    </div>
  );
}

export default App;
