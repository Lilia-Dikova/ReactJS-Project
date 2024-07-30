export default function ContactInfo() {

    const email = 'admin@petacat.biz'

    return (
        <div className="col-md-4 d_none">
            <ul className="top_info">
                <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href={`mailto:${email}`}>{email}</a>
                </li>
            </ul>
        </div>
    )
}