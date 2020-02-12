
import {action,observable} from "mobx"

export default class todomodel{
    store
    id
   @observable title
   @observable completed

   constructor (store,title,completed,id){
       this.title = title
       this.completed = completed
       this.id = id 
       this.store = store
   }

    @action
    toggle(){
        this.completed = !this.completed
    }

    @action
    handleDestroy(){
        this.store.todoss.remove(this)
    }

    setTitle(title) {
		this.title = title;
	}

	toJS() {
		return {
			id: this.id,
			title: this.title,
			completed: this.completed
		}}


    
}
