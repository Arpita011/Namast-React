const parent=React.createElement("div",{id:"parent"},React.createElement("div",
    {id:"child"},[React.createElement("h1",{},"hi i m h1 tag"),React.createElement("h2",{},"hi i m h2 tag")]

));
console.log(parent);


const heading=React.createElement("h1",{ id:"heading"},"Namaste Everyone");
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);