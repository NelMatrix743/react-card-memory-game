const Card = (props) => {
    const {cardContent, handleCallBack } = props;

    return (
        <div className={`card ${cardContent.isFlipped ? "flipped" : ""}`} onClick={() => console.log(`${cardContent.id}`)}>
            <div className="card-front">?</div>
            <div className="card-back">{ cardContent.value  }</div>
        </div>
    );
};


export default Card;