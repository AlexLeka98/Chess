import React, { Fragment } from 'react';
import styles from './Chessboard.module.scss';


const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Chessboard = () => {
    let board = [];
    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j <= 7; j++) {
            if ((i + j) % 2 === 0) {
                board.push(<span className={styles.whiteBox}>{`${horizontalAxis[j]}${verticalAxis[i]}`}</span>)
            }
            else{
                board.push(<span>{`${horizontalAxis[j]}${verticalAxis[i]}`}</span>)
            }
        }
    }

    return (
        <div className={styles.chessboardContainer}>
            <div className={styles.chessboard}>
                {board}
            </div>
        </div>
    )
}

export default Chessboard