export default class CatDetailPresenter {
    #catID;
    #model;
    #view;

    constructor(catID, { model, view }) {
        this.#catID = catID;
        this.#model = model;
        this.#view = view;
    }

    async getCatDetail() {
        const cat = await this.#model.getCatByID(this.#catID);
        this.#view.showCat(cat);
    }
}