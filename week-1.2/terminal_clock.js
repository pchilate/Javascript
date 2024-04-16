function terminalClock(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,'O');
    const mintues = String(now.getMinutes()).padStart(2,'O');
    const seconds = String(now.getSeconds()).padStart(2,'O');

    console.clear();

    console.log(`${hours}:${mintues}:${seconds}`);
    setTimeout(terminalClock, 1000);

}
terminalClock();
