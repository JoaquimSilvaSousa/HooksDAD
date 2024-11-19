import styles from "../CandidateItem/CandidateItem.module.css"

function CandidateItem(props) {
    return(
        <div className={styles.listItem}>
            <p className={styles.name}>{props.nome}</p>
            <p className={styles.votes}>Votos: {props.votos}</p>
            <div className={styles.actions}>
                <button className={styles.voteButton}>Votar</button>
                <button className={styles.deleteButton}>X</button>
            </div>
        </div>
    )
}

export default CandidateItem;