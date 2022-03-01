import React, { Fragment } from 'react';
import styles from './Chessboard.module.scss';


const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const Chessboard = () => {
    let board = [];
    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j <= 7; j++) {
            if ((i + j) % 2 === 0) {
                if (j === 0 && i === 0) {
                    board.push(<span className={styles.whiteBox}>
                        <div>{verticalAxis[i]}</div>
                        <div>{horizontalAxis[j]}</div>
                    </span>);
                }
                else if (j === 0) {
                    board.push(<span className={styles.whiteBox}>{verticalAxis[i]}</span>);
                }
                else if (i === 0) {
                    board.push(<span className={styles.whiteBox}>
                        <div style={{width:"100%"}}>{horizontalAxis[j]}</div>
                        </span>);
                }
                else {
                    board.push(<span className={styles.whiteBox}></span>);
                }
            }
            else {
                if (j === 0) {
                    board.push(<span>{verticalAxis[i]}</span>);
                }
                else if (i === 0) {
                    board.push(<span>
                        <div style={{width:"100%"}}>{horizontalAxis[j]}</div>
                    </span>);
                }
                else {
                    board.push(<span></span>);
                }
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