import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Animated } from "react-animated-css";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import "../static/css/CastingStyle.css"


import "../static/css/CastingStyle.css"
const StarRating = (props) => {
const [rating, setRating] = useState(null);
const [hover, setHover] = useState(null);
const [movie, setmovie] = useState({});
const [numberOfRating, setnum] = useState();
const [rerender, setrerender] = useState(false);
const [averageofrating, setavg] = useState();
const [transfer, settransfer] = useState(false);
const [casting, setcasing] = useState({});
// const [name,setName]=useState("");
const id = "611683e7331e43144caff188"; //changed after to id from props
useEffect(() => {
axios.get("http://localhost:8000/api/movie/" + id).then((res) => {
setmovie(res.data);
// setName(res.data.name)
setnum(res.data.numberOfRating);
setRating(res.data.rating);
console.log(res.data._id);
setavg(res.data.averageofrating);
setcasing(res.data.casting)
setrerender(false);
});
}, [rerender]);

const updaterate = (rating, numberOfRating) => {
axios
.put("http://localhost:8000/api/edit/" + id, {
rating,
numberOfRating,
averageofrating: rating / numberOfRating
})
.then((res) => setrerender(true));
};
const moviecaster = () => {
if (transfer === false) {
settransfer(true);
} else settransfer(false);
};
return (

  <div>
    <div style={{ display: "flex" }}>
      <img src={movie.poster} style={{ width: "280px", height: "350px", margin: "10px" }} />
      < div >

    <div style={{ width: "500px" }}>
<h1>Movie Name: {movie.name}</h1>
<h3>Movie Language: {movie.language}</h3>
<h3>Relase Date: {movie.year}</h3>
<h3 >The Movie Rating Is :{String(averageofrating).substring(0, 3)} / 5 </h3>

</div>
<div style={{ width: "300px", marginLeft: "50px", display: "flex" }}>

<div>
{[...Array(5)].map((star, i) => {
const ratingValue = i + 1;
return (
<label>
<input
style={{ display: "none" }}
type="radio"
name="rating"
value={ratingValue}
onClick={() => {
updaterate((ratingValue + rating), numberOfRating + 1);
}}
/>
<FaStar
style={{
cursor: "pointer",
transition: "width 50s",
transform: "translate(-20px)",
}}
color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
size={20}
onMouseEnter={() => setHover(ratingValue)}
onMouseOut={() => setHover(ratingValue)}
/>
</label>
);
})}
{/* <div class="dropdown">
<button class="dropbtn">Dropdown</button>
<div class="dropdown-content">
<a href="#">Link 1</a>
<a href="#">Link 2</a>
<a href="#">Link 3</a>
</div>
</div> */}


</div>
</div>

<br />

<a href="#" onClick={() => moviecaster()}>
Movie Cast
</a>
</div>
</div> 
<div>

<Animated
animationIn="bounceInLeft"
animationOut="fadeOut"
isVisible={transfer}
>
<div style={{ width: '100px', display: 'flex' }}>
<div style={{ display: 'inlineBlock' }}>
<img src={casting.castimg1} style={{ width: '90px', height: '90px', borderRadius: '50%', border: "solid 4px gray", }} />
<h2>{casting.actorone}</h2>

</div>
<div style={{ display: 'inlineBlock' }}>
<img src={casting.castimg2} style={{ width: '90px', height: '90px', borderRadius: '50%', border: "solid 4px gray", }} />
<h3 >{casting.actortwo}</h3></div>
<div style={{ display: 'inlineBlock' }}>
<img src={casting.castimg3} style={{ width: '90px', height: '90px', borderRadius: '50%', border: "solid 4px gray", }} />
<h3 >{casting.actorthree}</h3></div>
<div style={{ display: 'inlineBlock' }}>
<img src={casting.castimg4} style={{ width: '90px', height: '90px', borderRadius: '50%', border: "solid 4px gray", }} />
<h3 >{casting.actorfour}</h3></div>
<div style={{ display: 'inlineBlock' }}>
<img src={casting.castimg5} style={{ width: '90px', height: '90px', borderRadius: '50%', border: "solid 4px gray", }} />
<h3 >{casting.actorfive}</h3></div>
</div>


</Animated>

</div>
</div>

);
};

export default StarRating;