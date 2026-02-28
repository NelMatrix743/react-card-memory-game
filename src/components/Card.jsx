const Card = (props) => {
    const { cardContent, handleCallBack } = props;

    return (
        <div className="card" onClick={() => handleCallBack(cardContent)}>
            <div className="card-front">?</div>
            <div className="card-back">{ cardContent.value  }</div>
        </div>
    );
};


export default Card;