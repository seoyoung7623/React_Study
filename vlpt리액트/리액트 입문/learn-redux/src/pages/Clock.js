
const Clock = ({today}) => {
    return (
        <div>
            <subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</subtitle><br/>
            <subtitle className="text-5xl">{today.toLocaleTimeString()}</subtitle>
        </div>
    )
}

export default Clock;