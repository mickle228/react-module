const FirstComponent = ({person}) => {
    const {name, photo} = person;

    return (
        <div>
            <h1>{name}</h1>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default FirstComponent;
