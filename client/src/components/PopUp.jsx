export default function PopUp() {

    return (
        <div className="modal-backdrop">
            <div className="modal-content">

                <div className="errorContainer">
                    <p>Are you sure you want to proceed?</p>
                    <button className="btn-no">No</button>
                    <button className="btn-yes" >Yes</button>
                </div>
            </div>
        </div>
    )
}

