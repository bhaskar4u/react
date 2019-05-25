console.log('App is runing');

const app = {
    title: 'ReactApp',
    subtitle: 'put your expenses in your budget',
    options:[]
}
const onFormSubmit = (e) => {
    e.preventDefault();
    
    
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option)
        e.target.elements.option.value = '';
        appRender()

    }
}

const numbers = []

let options
const removeAll = () =>{
app.options = [];
appRender()
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option  = app.options[randomNum];
    alert(option)
};

const appRender = () => {
    const temp1 = (
        <div>
        
            <h1>{app.title}</h1>
            {app.subtitle && <p> {app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'here is your option': 'no options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should i do?</button>
            <button onClick={removeAll}>RemoveAll</button>
            {/*
                numbers.map((number) =>{
                    return <p key={number}>number:{number}</p>
                })
            */}
            <ol>
            {
            app.options.map((num) =><li key={num}>{num}</li>)    
            }
            </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
        </form>
        </div>
    );
    ReactDOM.render(temp1, appRoot)
}




const appRoot = document.getElementById('app')
appRender()