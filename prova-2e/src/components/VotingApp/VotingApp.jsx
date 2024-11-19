import styles from "../VotingApp/VotingApp.module.css"
import CandidateForm from "../CandidateForm/CandidateForm";
import CandidateList from "../CandidateList/CandidateList"
import { useState } from "react";

function VotingApp(){
    const [candidatos, setCandidatos] = useState([]);

    return(
        <div className={styles.appContainer}>
            <p className={styles.header}>App Votos</p>
            <CandidateForm setCandidatos={setCandidatos} candidatos={candidatos}/>
            <CandidateList candidatos={candidatos}/>
        </div>
    )
}

export default VotingApp;
