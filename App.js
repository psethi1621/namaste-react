/**
 * <div>
 *      <div>
 *          <h1>
 *          </h1>
 *      </div>
 * </div>
 * 
 * 
 * 
 */

const heading = React.createElement("h1", {id: "heading", abc: "abc"}, "Hello World From React!");
const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, heading));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
