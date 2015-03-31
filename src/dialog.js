var MessagePresenter = (function () {
    function MessagePresenter(message) {
        this.message = message;
    }
    MessagePresenter.prototype.show = function () {
        alert(this.message);
    };
    return MessagePresenter;
})();
module.exports = MessagePresenter;
