import styles from './frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContent}>
            <p className={styles.fraseContainer}>AQUI É Compomente frase</p>
            <p>Frase 2</p>

        </div>
    )
}
export default Frase