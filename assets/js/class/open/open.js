export default class{
    constructor({map}){
        this.parentElement = document.querySelector('.open')
        this.element = document.querySelector('.open-element-container')
        this.isOpenDone = true
        this.mapProxy = map.proxy
        this.init()
    }


    // init
    init(){
        this.create()
        self.element.style.opacity = 0
        this.mapProxy.play = true
        this.parentElement.style.display = 'none'
        this.element.style.display = 'none'
    }

    // create
    create(){
    }
}
