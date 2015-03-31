class MessagePresenter{
  message :string
  constructor(message : string){
      this.message = message;
  }

  show() : void{
    alert(this.message);
  }
}

export = MessagePresenter
