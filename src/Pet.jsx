import { Link } from "react-router-dom";

const Pet = (props) => {

  // Array destructuring.
  const { name,animal,breed,images,location,id, removePet } = props;
  console.log(id);

  return (
    <Link to={`/pets/${id}`} className="pet">
      <div className="image-container">
        <img src={images[0]} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
      <button onClick={() => removePet(id)}>Remove Me!</button>
    </Link>
  );
};

export default Pet;
