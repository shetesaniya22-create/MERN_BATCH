function MsgBox({name,color}){
    return(
        <>
        <p style={{color:color}}>
            Hello My name is {name}
        </p>
        </>
    );
}

export default MsgBox;