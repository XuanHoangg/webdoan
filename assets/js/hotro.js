function taoID() {
    var id = '';
    // sinh ID
    id = Math.random().toString().substring(2,12) + "_" + String(new Date().getTime());
    return id;
}