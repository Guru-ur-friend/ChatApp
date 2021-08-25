import React from 'react';
import profile from '../assests/profile.jpg';

class SideBar extends React.Component {
    render() {
        return (
            <div className="sidebar">
                
                <div className="menu">
                <img src={profile} alt="" />
                <div>Pattrick, Jane <i class="fas fa-chevron-down"></i></div>
                    <ul>
                        <li><i className="fal fa-border-all"></i>&nbsp;&nbsp;&nbsp;HOME</li>
                        <li style={{color : 'rgba(11, 145, 255, 0.836)'}}><span className="fas fa-comment-dots"></span>&nbsp;&nbsp;&nbsp;CHAT</li>
                        <li><i className="far fa-user"></i>&nbsp;&nbsp;&nbsp;CONTACT</li>
                        <li><i className="far fa-bell"></i>&nbsp;&nbsp;&nbsp;NOTIFICATION</li>
                        <li><i className="far fa-calendar-minus"></i>&nbsp;&nbsp;&nbsp;CALENDAR</li>
                        <li><i className="fas fa-cog"></i>&nbsp;&nbsp;&nbsp;SETTINGS</li>
                        <li><i className="fas fa-power-off"></i>&nbsp;&nbsp;&nbsp;LOGOUT</li>
                    </ul>
                </div>

            </div>

        )
    }
}


export default SideBar;

