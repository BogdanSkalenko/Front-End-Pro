import $ from 'jquery';

export default class TodoView{
    constructor(elId){
        this.$el = $(elId);
        this.template = $('#contactTemplate').html();

        this.onDeleteBtnClick = this.onDeleteBtnClick.bind(this);
        this.onContactItemClick = this.onContactItemClick.bind(this);
        this.renderItem = this.renderItem.bind(this);

        this.$el.on('click', '.delete' , this.onDeleteBtnClick);

        this.$el.on('click', '.contact-name' , this.onContactItemClick);
    }

    onDeleteBtnClick(event){
        const id = $(event.target).parents('.contact-item').data('contact-id');
        this.onContactDeleteClick(id);
        
    }
    onContactItemClick(event){
        const id = $(event.target).parents('.contact-item').data('contact-id');
        this.onContactNameClick(id);
    }

    render(data){
        this.$el.html(
            `${data.map(this.renderItem).join('\n')}` 
        )
    }

    renderItem(el){
        return this.template
                 .replace('{{name}}', el.name)
                 .replace('{{phone}}', el.phone)
                 .replace('{{email}}', el.email)
                 .replace('{{id}}', el.id)         
    }   
}   