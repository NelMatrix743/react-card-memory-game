const Card = (props) => {
    const { cardContent } = props;

    return (
        <div className="card">
            <div className="card-front">?</div>
            <div className="card-back">{ cardContent }</div>
        </div>
    );
};


export default Card;