class ItemContext{
    #items;
  
    constructor(){
    this.#items = [];
}
get items(){
    return this.#items;
}
}
export default new ItemContext();
// 싱글 턴 : export 문에 객체생성을 하면
// 써야할 곳에 import문을 쓰고 직접가져다쓰면 된다