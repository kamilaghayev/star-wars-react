import css from "./HomePage.module.css";
import cn from "classnames";

const HomePage = () => {
  return (
    <div className={css.header}>
      <div className={css.header__item}>
        <div className="header__text">STAR WARS</div>
        <p>
          Star Wars is an American epic space opera media franchise created by George Lucas, which began 
          with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon. The franchise 
          has been expanded into various films and other media, including television series, video games, 
          novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing 
          fictional universe. Star Wars is one of the highest-grossing media franchises of all time.
        </p>
      </div>
    </div>
  )
}

export default HomePage