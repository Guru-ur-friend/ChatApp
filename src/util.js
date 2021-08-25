const formatTime = (time) => {
    console.log("called");
    const getDate = new Date(time);
    const today = new Date();
    const diffTime = today.getTime() - getDate.getTime();   
        if (diffTime < 60000) {    
            var sec = Math.trunc(diffTime / 1000);
            return `${sec} seconds ago`;
        } else if (diffTime < 3600000) {                
            var min = Math.trunc(diffTime / 60000);
            return `${min} minutes ago`;
        } else if( diffTime < 86400000){
            var hr = Math.trunc(diffTime / 3600000);               
            return `${hr} hours ago`;
        }else {
            var days = Math.trunc(diffTime / 86400000);   
            return `${days} days ago`;
        }
}

export default formatTime;