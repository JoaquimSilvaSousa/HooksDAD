import styles from "../CandidateForm/CandidateForm.module.css"

function CandidateForm(candidatos, setCandidatos){
    return(
        <div className={styles.form}>
            <input className={styles.input} placeholder="Nome do candidato"></input>
            <button type="submit" onClick={()=>(setCandidatos([...candidatos, {nome: input}]), setInput(''))} className={styles.button}>Adicionar Candidato</button>
        </div>
    )
}

export default CandidateForm;
