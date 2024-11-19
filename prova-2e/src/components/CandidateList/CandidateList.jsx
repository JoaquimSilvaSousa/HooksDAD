import styles from "../CandidateList/CandidateList.module.css"
import CandidateItem from "../CandidateItem/CandidateItem";

function CandidateList({candidatos}){
    return(
        <div className={styles.listContainer}>
            <p className={styles.header}>Candidatos</p>
            <div className={styles.list}>
                {tasks.map((candidatos, index) => <CandidateItem nome={nome} votos={votos}/>)}
            </div>
        </div>
    )
}

export default CandidateList;
