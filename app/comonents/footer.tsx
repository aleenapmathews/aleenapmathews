import style from './footer.module.css'

export default function Footer(){
    return <footer className={style["footer"]}>
        <div className={style["footer-text"]}>
            <p>Copyright &copy; 2023 by Codehal | All Rights Reserved.</p>
        </div>

        <div className={style["footer-iconTop"]}>
           <a href="#"><i className='bx bx-up-arrow-alt'></i></a> 
        </div>
    </footer>    
}