import s from "./Nav.module.css";
import ava from "../../img/headerImgs/Ava.jpg";

const NavFriends = () => {
  return (
    <div className={s.navFriendsWrapper}>
      Friends:
      <div className={s.column}>
        <div className={s.friendsLine}></div>
        <div className={s.row}>
          <div className={s.navFriendsItem}>
            <div>
              <img src={ava} alt="" />
            </div>
            Михаил
          </div>
          <div className={s.navFriendsItem}>
            <div>
              <img src={ava} alt="" />
            </div>
            Артем
          </div>
          <div className={s.navFriendsItem}>
            <div>
              <img src={ava} alt="" />
            </div>
            Валера
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavFriends;
