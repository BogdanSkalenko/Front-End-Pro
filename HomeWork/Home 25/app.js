class SearchMember{
    static DATA_SEARCH_URL = 'https://api.github.com/search/users?q=';
    static USER_GIT_URL = 'https://api.github.com/users/';
    static CONTAINER_CLASSNAME = 'search-user-cont';
    constructor(container){
        this.container = container;
        this.dataSearch = [];
        this.userGitDivTemplate = $('#userGitDivTemplate').html();
        this.init();
    }

    init(){
        this.initAutoComplectWidget();
    }

      initAutoComplectWidget() {
         $('#tags').autocomplete({
            source: (request, responce) => {
                const term = request.term;
                $.ajax({
                    url: SearchMember.DATA_SEARCH_URL + term,
                    type: 'GET'
                }).done(data => {
                    this.dataSearch = data.items.map(user => user.login);
                    responce(this.dataSearch);
                })
            },
            select: (event, user) => {
                $.ajax({
                    url: SearchMember.USER_GIT_URL + user.item.label,
                    type: 'GET'
                }).done(data => this.openUserGit(data))
            },
            minLength: 2
        });
    }
    openUserGit(user){
        const dateInMs = Date.parse(user.created_at);
        const dateObj = new Date(dateInMs);
        const date = '' + dateObj.getDate()
                   + '-' + dateObj.getMonth()
                   + '-' + dateObj.getFullYear();
                    
        const tempThis = this;
         this.container.html(
            tempThis.userGitDivTemplate
            .replace('{{userName}}', user.login)
            .replace('{{avatarSrc}}', user.avatar_url)
            .replace('{{reposit-number}}', user.public_repos)
            .replace('{{followers-number}}', user.followers)
            .replace('{{registration-date}}', date)
            .replace('{{git-link}}', user.html_url)
            .replace('{{gitReposName}}', user.login)
           );
        }
}


const searchMember = new SearchMember($('#container'));