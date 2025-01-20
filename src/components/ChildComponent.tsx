export interface ChildComponentProps{
    name:string,counter:number
}

function ChildComponent({name,counter}:ChildComponentProps){
    return (<>
        Привет, {name}! Текущий счетчик: {counter}
    </>)
}
export default ChildComponent