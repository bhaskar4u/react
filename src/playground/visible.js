let Visibility = false

const toggle = () => {
    Visibility = !Visibility
    render()
}
const render = () => {
const jsx = (
<div>
<h1>
Visibility Toggle
</h1>
<button onClick={toggle}>
{Visibility ? 'Hide details': 'show details'}
</button>
{Visibility && (
    <div>
    <p>Hey. there is something for You</p>
    </div>
)}
</div>
)
ReactDOM.render(jsx,document.getElementById('app'))
}

render()