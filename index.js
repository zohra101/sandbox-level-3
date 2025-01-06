import React from "react";
import handleClick from "./utils/handleClick";
import handleSubmit from "./utils/handleSubmit";

const message = "Amazing world!";
const root = createRoot (window.bodyTag);
root.render(
<main>
    <h1>Hello React</h1>
    <h2>Start editing to see some magic hap</h2>
    <h3>{message}</h3>
    <button onClick={handleClick}>Click</button>
    <form onSubmit={handleSubmit}>
        <input/>
        <input type="button"></input>        
    </form>
</main>
) ;