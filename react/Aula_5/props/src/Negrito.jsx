function Negrito(props) {
    console.log(`${JSON.stringify(props.children)} 😍`);

    return (
        <div>
            <ul>
                <li>{props.children} 😍</li>
            </ul>
        </div>
        
        // <strong>{props.children} 😍</strong>
        
    )
}

export default Negrito