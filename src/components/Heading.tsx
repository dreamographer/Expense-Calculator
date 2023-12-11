interface Props{
    children:String
}
function Heading({children}:Props){
    return(
        <div className="text-center w-screen m-5">
            <h1 className="text-3xl mt-10 text-bold font-[Montserrat]">{children}</h1>
        </div>
    )
}
export default Heading