class Page {

    get notification () { return $('.ant-notification-notice-message') }

    clearInput(element){
        const value = element.getValue();
        for(let i = 0; i < value.length; i++){
            element.keys(['Backspace']);
        }
    }
}

export default Page;
