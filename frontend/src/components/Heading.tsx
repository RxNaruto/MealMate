interface HeadingProps{
    label: string;
}
export const Heading=({label}:HeadingProps)=>{
    return <div className="text-3xl">
        {label}
    </div>
}