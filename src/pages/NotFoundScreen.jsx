import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundScreen() {
    return (
        <div id="center">
            <h1>404 Not Found</h1>
            <Link to="/">Go back Home page</Link> 
        </div>
    );
}