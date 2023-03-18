function Tempo(props) {
    const dynamicDate = new Date()
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <p>{dynamicDateString} </p>
            <p>{props.staticDateString} </p>
        </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date()
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

export default Tempo