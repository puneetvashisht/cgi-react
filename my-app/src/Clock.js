function Clock(){

    const today = new Date();

    return (
        <h2>{today.getHours()} : {today.getMinutes()}: {today.getSeconds()}</h2>
    )
}

export default Clock;