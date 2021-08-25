import React from 'react';
import api from '../apiConfig/chats';
import formatTime from '../util';
import sendIcon from '../assests/send.png';
import user1 from '../assests/user1.png';
class LiveChat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chats: [],
            replyMessage: ''
        }
    }
    componentDidMount() {
        this.reteriveChats();
    }
    setReply = (e) => {
        let value = e.target.value;
        this.setState({
            replyMessage: value
        })
    }
    reteriveChats = async () => {
        const response = await api.get("/chats");
        const userChat = response.data.filter((user) => {
            if (this.props.userId == user.id) {
                return true;
            }
        })
        this.setState({
            chats: userChat
        })
    }
    sendReply = async () => {
        const userChat = this.state.chats[0].chat;
        const chatLength = userChat.length;
        const chatId = parseInt(userChat[chatLength - 1].msgId) + 1;
        const newChat = {
            msgId: chatId,
            message: this.state.replyMessage,
            type: "reply",
            timeLogged: new Date()
        }
        const updateChat = {
            lastMessage: this.state.replyMessage,
            lastMsgType: "reply",
            chat: [...this.state.chats[0].chat, newChat],
        }
        const response = await api.patch(`/chats/${this.props.userId}`, updateChat);
        console.log("response", response);
        this.reteriveChats();
        this.props.updateChat();
        this.setState({
            replyMessage: ""
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userId != this.props.userId) {
            this.reteriveChats();
        }
    }
    render() {

        const uName = this.state.chats.length > 0 ? this.state.chats[0].userName : "";
        const loginSince = this.state.chats.length > 0 ? formatTime(this.state.chats[0].lastLogin) : "";
        const userChats = this.state.chats.length > 0 ? this.state.chats[0].chat : [];


        return (
            <div className="livechat">
                <div className='livechatHeader'>
                    <img src={user1} alt="" style={{ borderRadius: '50%', width: '60px', height: '40px' }} />
                    <div className='livechatHeaderSide'>
                        <span className="liveChatOptions">
                            <i className="fas fa-paperclip"></i>
                            <i className="fas fa-ellipsis-v"></i>
                        </span>
                        <h5 style={{ fontWeight: 'bolder', fontSize: '1em' }}>{uName}</h5>
                        <p style={{ fontSize: '0.8em', color: 'rgba(11, 145, 255, 0.836)', fontWeight: 'bold' }}>last online {loginSince} </p>

                    </div>
                </div>
                <div className='liveChatBody'>
                    {userChats.map((chat) => {
                        return (
                            <div className="chatWrapper">
                                <img className={chat.type == "sent" ? "showImg" : "hideImg"} src={user1} style={{ borderRadius: '50%', width: '40px', float: 'left', paddingTop: '4%' }} />

                                <div className={chat.type == "sent" ? "chatSentStytle" : "chatReplyStyle"}>{chat.message}</div>
                                <span className={chat.type == "reply" ? "fas fa-check readStyle" : ""}></span>
                                <i className={chat.type == "sent" ? "fas fa-ellipsis-h sentOption" : "fas fa-ellipsis-h replyOption"} ></i>

                            </div>
                        )
                    })}
                </div>
                <div className='liveChatReply'>
                    <textarea className="liveChatText" placeholder="Type a message here" value={this.state.replyMessage} onChange={this.setReply} />
                    <img src={sendIcon} onClick={this.sendReply} />
                </div>
            </div>

        )
    }
}


export default LiveChat;
