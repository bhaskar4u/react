
let count = 0;
const addOne = () => {
    count ++;
   countRenderApp()
}
const deleteOne = () => {
    count --;
   countRenderApp()
}
const reset = () => {
    count = 0
   countRenderApp()
}


const appRoot = document.getElementById('app')


const countRenderApp = () => {
    const template = (
        <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}> +1</button>
        <button onClick={deleteOne}> -1</button>
        <button onClick={reset}> reset</button>
        </div>
        );
        ReactDOM.render(template,appRoot)
};

countRenderApp()