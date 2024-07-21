export default function Controls() {

    const options = [
        { name: 'Previous', data: 'prev', direction: 'left' },
        { name: 'Next', data: 'next', direction: 'right' },

    ]

    const content = options.map(option => (
        <a
            className={`carousel-control-${option.data}`}
            href="#banner1"
            role="button"
            data-slide={option.data}
        >
            <i className={`fa fa-angle-${option.direction}`} aria-hidden="true" />
            <span className="sr-only">{option.name}</span>
        </a>

    ));

    return (
        <>
        {content}
        </>
    )

}

