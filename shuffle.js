String.prototype.shuffle = function shuffle() {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
console.log("the quick brown fox jumps over the lazy dog".shuffle());
//-> "veolrm  hth  ke opynug tusbxq ocrad ofeizwj"

console.log("the quick brown fox jumps over the lazy dog".shuffle());
//-> "o dt hutpe u iqrxj  yaenbwoolhsvmkcger ozf "