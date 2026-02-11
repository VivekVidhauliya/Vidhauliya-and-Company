import React from "react";
import { Link } from "react-router-dom";


export function Navbar() {
return (
<nav className="bg-black text-white p-4 flex justify-between items-center">
<h1 className="font-bold text-xl">Vidhauliya and Company</h1>
<div className="space-x-4">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/machines">Machines</Link>
<Link to="/contact">Contact</Link>

</div>
</nav>
);
}