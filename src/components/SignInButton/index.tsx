import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss';

export function SignInButton(){

  const isUserLogedIn = true;

  return isUserLogedIn ? (
    <button
    className={styles.SignInButton}
    type="button">
      <FaGithub color="#04d361" />
      Pedro Sobucki
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button
    className={styles.SignInButton}
    type="button">
      <FaGithub color="#eba417"/>
      Sign in with GitHub
    </button>
  );
}