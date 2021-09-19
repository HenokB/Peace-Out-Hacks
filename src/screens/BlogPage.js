import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { useSelector } from "react-redux";
import { selectPosts } from "../redux/slice";
import { Paper } from "@material-ui/core";

// class BlogPage extends React.Component {
//   render() {
//     return (
//       <div>
//         <Map
//           google={this.props.google}
//           zoom={8}
//           style={mapStyles}
//           initialCenter={{ lat: 47.444, lng: -122.176 }}
//         >
//           <Marker position={{ lat: 48.0, lng: -122.0 }} />
//         </Map>
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDX5b2eROUXhaHcVDNiX4yAnipp3d7898Q"
// })(BlogPage);

// const mapStyles = {
//   width: "80%",
//   height: "50%"
// };

export default function GoogleMapsApi() {
  // const posts = useSelector(selectPosts)

  const posts = [
    {
      title: "Lorem Impsum Protest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
      geolocation: {
        lat: "1231",
        long: "123123"
      }
    },
    {
      title: "Lorem Impsum Protest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
      geolocation: {
        lat: "1231",
        long: "123123"
      }
    },
    {
      title: "Lorem Impsum Protest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
      geolocation: {
        lat: "1231",
        long: "123123"
      }
    },
    {
      title: "Lorem Impsum Protest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
      geolocation: {
        lat: "1231",
        long: "123123"
      }
    },
    {
      title: "Lorem Impsum Protest",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Nisl pretium fusce id velit. Arcu dictum varius duis at consectetur lorem. Fermentum dui faucibus in ornare quam viverra orci sagittis. Mi quis hendrerit dolor magna. Odio morbi quis commodo odio. Dictum non consectetur a erat nam. Eget nullam non nisi est sit amet facilisis. Turpis cursus in hac habitasse platea dictumst quisque.",
      geolocation: {
        lat: "1231",
        long: "123123"
      }
    }
  ];

  return (
    <div styles={{ height: "500px", overflowY: "scroll" }} className="mt-3">
      {posts.map(({ title, description, geolocation }, k) => {
        return (
          <div className="break-words text-left w-11/12 h-1/4 overflow-ellipsis shadow-lg m-3 p-3 border-2 border-green-400 rounded-lg">
            <p className="p-2 font-extrabold text-2xl capitalize">{title}</p>

            <p className="p-2 font-semibold text-lg">{description}</p>

            <p className="p-2 font-medium">
              Geolocation: {geolocation.lat}, {geolocation.long}
            </p>
          </div>
        );
      })}
    </div>
  );
}
