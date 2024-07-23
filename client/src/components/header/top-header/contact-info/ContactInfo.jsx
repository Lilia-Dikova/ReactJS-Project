export default function ContactInfo() {

    const info = [ 
        {phone: '+359889908870', email: 'admin@petacat.biz', class: ''}
    ];
    return (
        <div className="col-md-4 d_none">
            <ul className="top_info">
                <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    
                </li>
                <li>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <a href="mailto:admin@petacat.biz">admin@petacat.biz</a>
                </li>
            </ul>
        </div>
    )
}