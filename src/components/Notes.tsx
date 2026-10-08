
interface  ProjectProps{
    name:string;
    age:number;
}

const Project= (props:ProjectProps) =>{
    return(
 <>
 <h1> name {props.name}</h1>
 <h2> number {props.age}</h2>
 </>
    )
}
export default Project