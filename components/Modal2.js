function Modal2(props){
    return(
        <div className="modal2">
            <div className="relative">
            <img onClick={props.close} className="cancel" src="../static/x.svg"/>
                <img src="https://cdn4.iconfinder.com/data/icons/rcons-user/32/user_man_add-64.png" alt="add" />
                <div className="modal2Text">
                    <p>Add someone to your network</p>
                    <p>What's their username?</p>
                </div>
                <input type="text" placeholder="@username" />
                <div className="button">
                    <p>Send Request</p>
                </div>
            </div>
        </div>
    )
}
export default Modal2;