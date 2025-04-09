

function getData(dataId, getNextData) {
    //delay 2s
    setTimeout(() => {
        console.log(`it is setTimeout function`,dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}
getData(1, () => {
    getData(5)
})

