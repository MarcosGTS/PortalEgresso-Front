import './styles.css'

function LayoutComponentes(props) {
    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default LayoutComponentes;