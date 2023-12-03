import { useNavigate } from "react-router";
import styles from "./GoBack.module.css";
import GoBackBtn from "@UI/UIButton/GoBackBtn";
const GoBack = () => {
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        
        navigate(-1)
    }

    return (
        <GoBackBtn
            className={styles.go__back}
            onClick={handleGoBack}
        >
            go back
        </GoBackBtn>
    )
}

export default GoBack