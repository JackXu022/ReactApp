console.log('App.js is running');

// JSX -  javascript xml
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: [],
    printOptions(){
        const optionsList = this.options.map((option) => {
            //thransform each item in place
            return <li key={option}>{option}</li>;
        });
        return optionsList;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in '+ city);
        // });
    }
};

const onFormSubmit = (e) => {
    e.preventDefault();
    //all elements index by name.
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
};

const resetAll = () =>{
    app.options = [];
    renderOptions();
};

const onMakeDecision=() => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderOptions = () => {
    const templateTwo = (
        <div>
            <h1>Indecision App</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0?'Here are your options':'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={resetAll}>remove All</button>
            <ol>
             {app.printOptions()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
}

renderOptions();

