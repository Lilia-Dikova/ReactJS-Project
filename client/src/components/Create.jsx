
export default function Create() {


    return (
        <div className="details">
            <div className="container">
                <div className="col-md-12">
                    <h1>Create your post</h1>
                    <form id="request" className="main_form">
                        <div className="row">
                            <div className="col-md-12 ">
                                <input
                                    className="form_control"
                                    placeholder="Pet Name"
                                    type="type"
                                    name="name"
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form_control"
                                    placeholder="Pet Nickname"
                                    type="type"
                                    name="nickName"
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form_control"
                                    placeholder="Age"
                                    type="number"
                                    name="age"
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form_control"
                                    placeholder="Story Title"
                                    type="text"
                                    name="title"
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className="form_control"
                                    placeholder="imageUrl"
                                    type="text"
                                />
                            </div>
                            
                            <div className="col-md-12">
                                <textarea
                                    className="textarea"
                                    placeholder="Story"
                                    type="type"
                                    name="content"
                                 
                                />
                            </div>
                            <div className="col-md-12">
                                <button className="send_btn">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    );
}


