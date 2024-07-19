export default function SocialIcons() {

    const icons = [ 
        {name: 'facebook', tag: 'https://facebook.com'},
        {name: 'twitter', tag: 'https://x.com/' },
        {name: 'instagram', tag: 'https://www.instagram.com/' }
    ];

    const myIcons = icons.map(icon => (
        <li key={icon.name}>
            {<a href={icon.tag} target="_blank">
                <i className={`fa fa-${icon.name}`}  />
            </a>}
        </li>
    ))


    return (
        <div className="col-md-4">
            <ul className="social_icon text_align_right">
                {myIcons}
            </ul>
        </div>
    )
}

