import './Card.css';

const card = (props) => {
    const backgroundColor = props.bgColor;
    const width = props.width;

    const myStyle = {
        backgroundColor: backgroundColor,
        width: width
    }

    return (
        <div className="box" style={myStyle}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <hr></hr>
            <p>{props.description}</p>
        </div>
    );
}

export default card;