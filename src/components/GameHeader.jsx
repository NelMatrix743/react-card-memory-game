const GameHeader = (props) => {
    const { score, moves } = props;
    
    return (
        <div className="game-header">
            <h1>♠️ Memory Card Game</h1>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-label">SCORE</span>
                    <span className="stat-value">{ score }</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">SCORE</span>
                    <span className="stat-value">{ moves }</span>
                </div>
            </div>
        </div>
    );
};

export default GameHeader;