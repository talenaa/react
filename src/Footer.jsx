function Footer(){

    const styles = {
        fontWeight: "bold",
        color: "white",
        marginTop: "auto",
        textAlign: "center",
        padding: "20px",
        backgroundColor:"hsl(224, 40.40%, 22.40%)",
        fontFamily: "arial",
    }

    return(
        <footer style={styles}>
            <p>&copy; {new Date().getFullYear()} My website</p>
        </footer>
    );
}

export default Footer