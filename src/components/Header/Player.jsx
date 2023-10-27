import React from 'react';
import s from './Header.module.css';
import next from './../../img/headerImgs/next.png'
import play from './../../img/headerImgs/play-button.png'
import volume from './../../img/headerImgs/volume.png'

const Player = () => {
    return <div className={s.player_wrapper}>
        <img className={`${s.prev} ${s.MeidaButton}`} src={next} alt=''/>
        <img className={`${s.play} ${s.MeidaButton}`} src={play} alt=''/>
        <img className={`${s.next} ${s.MeidaButton}`} src={next} alt=''/>
        <img className={`${s.volume} ${s.MeidaButton}`} src={volume} alt=''/>
    </div>
}

export default Player;