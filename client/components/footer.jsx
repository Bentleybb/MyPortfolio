import React from "react";
import '../src/index.css'; 

export default function footer() {
  return (
    <footer>
      Copyright &copy; Centennial College {new Date().getFullYear()} Binli's page<br />
      Credits to websites for images and information.
      <a href="mailto:bhan19@my.centennialcollege.ca"> Binli Han</a>
    </footer>
  );
}