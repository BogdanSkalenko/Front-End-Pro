import ToDoCollection from './collection';
import config from './config';
import TodoView from './view';
export default class ToDoController{
    constructor(){
        console.log('contorller constructor');
        this.collection = new ToDoCollection(config.contactsUrl);
        this.view = new TodoView('#contactsList');

        this.view.onContactNameClick = (id) => this.rename(id); 

        this.view.onContactDeleteClick = (id) => this.delete(id);

        this.collection
            .fetch()
            .then((data) => this.view.render(data));
    }

    rename(id){
        const model = this.collection.get(id);
        model.name = 'Hello world';
        model.save()
        .then(this.collection.fetch)
        .then((data) => this.view.render(data));
    }

    delete(id){
        const model = this.collection.get(id);
        model.delete()
        .then(this.collection.fetch)
        .then((data) => this.view.render(data));
    }
    
}