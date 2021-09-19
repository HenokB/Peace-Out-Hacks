import React from "react";
import Forms from "./Forms/Forms";
import { Paper, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/slice";

export default function WorkContainer() {
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [lat, setLat] = React.useState("");
  const [long, setLong] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const submitObject = {
      title: title,
      description: desc,
      geolocation: {
        lat: lat,
        long: long
      }
    };
    console.log(submitObject);
    dispatch(addPost(submitObject));
  };

  return (
    <Paper className="w-10/12 p-4 m-2">
      <p className="text-4xl font-bold m-3">Post an Event or Violation</p>
      <Forms title="Title" type="text" value={title} change={setTitle} />
      <Forms title="Description" type="text" value={desc} change={setDesc} />
      <Forms title="Latitude" type="text" value={lat} change={setLat} />
      <Forms title="Longitude" type="text" value={long} change={setLong} />
      <button
        className=" outline-none p-2 border-2 border-green-900 font-semibold text-green-800 rounded-lg m-2 outline-none"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </Paper>
  );
}
