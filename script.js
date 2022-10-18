chrome.tabs.query({active:true, lastFocusedWindow: true},(tabs)=>{
    const tabTitle = document.getElementById('tabTitle');
    tabTitle.innerHTML =  tabs[0].title;
});
